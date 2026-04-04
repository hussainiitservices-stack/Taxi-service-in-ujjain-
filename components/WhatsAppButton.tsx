import { CONTACT_PHONE, WHATSAPP_NUMBER } from "@/lib/config";

export default function WhatsAppButton() {
  const msg = encodeURIComponent(
    `Hi! I want to book a taxi in Ujjain. My number is ${CONTACT_PHONE}.`,
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:bg-emerald-700"
    >
      <span className="text-lg">💬</span>
    </a>
  );
}

