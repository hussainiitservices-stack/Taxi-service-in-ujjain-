import Image from "next/image";
import { MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type RouteCardModel = {
  id: string;
  from: string;
  to: string;
  imageUrl: string;
};

export function RouteCard({
  route,
  className,
}: {
  route: RouteCardModel;
  className?: string;
}) {
  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <div className="relative h-36 w-full">
        <Image
          src={route.imageUrl}
          alt={`${route.from} to ${route.to}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-sm font-semibold text-white">
            {route.from} → {route.to}
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-white/90">
            <MapPin size={14} />
            <span>Pickup: {route.from}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-4">
        <div className="text-sm font-medium text-zinc-900">Best rate</div>
      </div>
    </Card>
  );
}

