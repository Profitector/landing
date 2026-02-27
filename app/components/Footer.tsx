import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const whatsappLink =
  "https://wa.me/972539230418?text=" +
  encodeURIComponent(
    "היי, אשמח לשמוע עוד על Profitector ואיך אפשר להגן על הרווחיות בעסק שלי."
  );

const contactItems = [
  {
    icon: Phone,
    label: "053-923-0418",
    href: "tel:+972539230418",
  },
  {
    icon: MessageCircle,
    label: "שלחו הודעה בוואטסאפ",
    href: whatsappLink,
  },
  {
    icon: Mail,
    label: "david@profitector.ai",
    href: "mailto:david@profitector.ai",
  },
  {
    icon: MapPin,
    label: "דוד אלעזר 107, אור יהודה",
    href: null,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2ECC71]/20 bg-[#0F1B2D] py-12 shadow-[0_-4px_20px_rgba(46,204,113,0.1)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Right column – branding */}
          <div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              <span className="gradient-text">Profitector</span>
            </h3>
            <p className="max-w-sm text-gray-400">
              המערכת האוטונומית שמגנה על הרווחיות שלך, סורקת כל שורה בחשבוניות
              ומזהה טעויות חיוב בזמן אמת.
            </p>
          </div>

          {/* Middle column – quick links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">ניווט מהיר</h4>
            <ul className="space-y-2">
              <li><a href="#savings" className="text-gray-400 transition-colors hover:text-[#2ECC71]">מחשבון חיסכון</a></li>
              <li><a href="#how-it-works" className="text-gray-400 transition-colors hover:text-[#2ECC71]">איך זה עובד</a></li>
              <li><a href="#why-us" className="text-gray-400 transition-colors hover:text-[#2ECC71]">למה אנחנו</a></li>
              <li><a href="#faq" className="text-gray-400 transition-colors hover:text-[#2ECC71]">שאלות נפוצות</a></li>
              <li><a href="#lead-form" className="text-gray-400 transition-colors hover:text-[#2ECC71]">צרו קשר</a></li>
            </ul>
          </div>

          {/* Left column – contact info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">צרו קשר</h4>
            <ul className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="flex items-center gap-3 text-gray-300 transition-colors hover:text-[#2ECC71]">
                    <Icon size={20} className="shrink-0" />
                    <span>{item.label}</span>
                  </span>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Profitector. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
