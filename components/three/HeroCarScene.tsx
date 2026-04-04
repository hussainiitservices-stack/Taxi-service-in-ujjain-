"use client";

import * as React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { HERO_CAR_GLB_URL } from "@/lib/config";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function HeroCarScene({ className }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = prefersReducedMotion();

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 500);
    camera.position.set(0.35, 1.05, 3.5);
    camera.lookAt(0, -0.2, 0);

    // Lights
    scene.add(new THREE.HemisphereLight(0xffffff, 0x223344, 1.15));

    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3.5, 4.5, 2.5);
    key.castShadow = false;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x99aaff, 0.7);
    rim.position.set(-4, 2, -2);
    scene.add(rim);

    // Ground + shadow catcher
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0b0b10,
      roughness: 0.95,
      metalness: 0.0,
    });
    const ground = new THREE.Mesh(new THREE.CircleGeometry(2.4, 80), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.55;
    ground.receiveShadow = false;
    scene.add(ground);

    // Subtle glow under the car
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.12,
    });
    const glow = new THREE.Mesh(new THREE.CircleGeometry(1.35, 64), glowMat);
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = -0.549;
    scene.add(glow);

    const group = new THREE.Group();
    scene.add(group);

    // Fallback car (if GLB fails)
    const fallback = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1.45, 0.35, 0.8),
      new THREE.MeshStandardMaterial({ color: 0xffc94a, roughness: 0.35, metalness: 0.25 }),
    );
    body.position.y = -0.25;
    fallback.add(body);
    const cab = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.28, 0.62),
      new THREE.MeshStandardMaterial({ color: 0xffd36b, roughness: 0.35, metalness: 0.2 }),
    );
    cab.position.set(0, -0.02, 0.03);
    fallback.add(cab);
    fallback.visible = false;
    group.add(fallback);

    let modelRoot: THREE.Object3D | null = null;

    // Load realistic GLB model
    const loader = new GLTFLoader();
    loader.load(
      HERO_CAR_GLB_URL,
      (gltf) => {
        modelRoot = gltf.scene;
        modelRoot.traverse((o) => {
          const mesh = o as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = false;
            mesh.receiveShadow = false;
          }
        });

        // Auto-center and scale model so it's always visible.
        // 1) Get original bounds
        const box0 = new THREE.Box3().setFromObject(modelRoot);
        const size0 = new THREE.Vector3();
        const center0 = new THREE.Vector3();
        box0.getSize(size0);
        box0.getCenter(center0);

        // 2) Normalize scale to a target size
        const maxDim0 = Math.max(size0.x, size0.y, size0.z) || 1;
        const target = 1.9;
        const scale = target / maxDim0;
        modelRoot.scale.setScalar(scale);

        // 3) Recompute bounds after scaling, then center at origin
        const box1 = new THREE.Box3().setFromObject(modelRoot);
        const center1 = new THREE.Vector3();
        const size1 = new THREE.Vector3();
        box1.getCenter(center1);
        box1.getSize(size1);
        modelRoot.position.sub(center1);

        // 4) Drop onto ground: align minY with ground plane (y = -0.55)
        const box2 = new THREE.Box3().setFromObject(modelRoot);
        const minY = box2.min.y;
        const groundY = -0.55;
        modelRoot.position.y += groundY - minY;

        // 5) Nice angle
        modelRoot.rotation.y = Math.PI * 0.85;

        // 6) Adjust camera distance based on final size
        const radius = Math.max(size1.length() * 0.5, 1.2);
        camera.position.set(0.4, 0.95, radius * 2.4);
        camera.lookAt(0, groundY + 0.35, 0);

        group.add(modelRoot);
      },
      undefined,
      () => {
        fallback.visible = true;
      },
    );

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const tick = (t: number) => {
      const time = t / 1000;

      if (!reduceMotion) {
        group.rotation.y = Math.sin(time * 0.6) * 0.22;
        group.position.y = Math.sin(time * 1.2) * 0.03;
        glowMat.opacity = 0.08 + (Math.sin(time * 1.25) + 1) * 0.03;
      } else {
        group.rotation.y = 0.18;
      }

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

