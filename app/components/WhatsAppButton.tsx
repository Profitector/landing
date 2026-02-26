"use client";

import Image from "next/image";

const whatsappLink =
  "https://wa.me/972539230418?text=" +
  encodeURIComponent(
    "היי, אשמח לשמוע איך אפשר להגן על הרווחיות בעסק שלי."
  );

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלחו הודעה בוואטסאפ"
      className="fixed bottom-6 right-6 z-50 cursor-pointer transition-transform hover:scale-110"
    >
      <Image
        src="/whatsapp1.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="h-14 w-14 object-contain"
      />
    </a>
  );
}
