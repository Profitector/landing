import { Mail, Phone, MessageCircle, MapPin, Shield } from "lucide-react";

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
    <footer className="border-t border-white/6 bg-[#050505] pt-12 pb-6">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-right">
          {/* Right column – branding */}
          <div>
            <h3 dir="ltr" className="mb-3 flex items-center justify-center gap-2 text-xl font-bold tracking-tight text-white md:justify-end font-(family-name:--font-logo)">
              <Shield className="h-5 w-5 text-[#2ECC71]" />
              <span>profitector<span className="text-[#2ECC71]">.ai</span></span>
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-white/40">
              מערכת ה-AI שמגינה על שולי הרווח שלכם בזמן אמת - מזהה דליפות,
              מתריעה על שחיקת מרווחים ומספקת המלצות פעולה לפני שהנזק נגרם.
            </p>
          </div>

          {/* Middle column – quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
              ניווט מהיר
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#savings", label: "מחשבון חיסכון" },
                { href: "#how-it-works", label: "איך זה עובד" },
                { href: "#why-us", label: "למה אנחנו" },
                { href: "#faq", label: "שאלות נפוצות" },
                { href: "#lead-form", label: "צרו קשר" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Left column – contact info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
              צרו קשר
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="flex items-center gap-3 text-sm text-white/40 transition-colors duration-200 hover:text-white">
                    <Icon size={16} className="shrink-0" />
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

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <div className="mb-3 flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
            <a href="/privacy-policy" className="transition-colors duration-200 hover:text-white">מדיניות פרטיות</a>
            <span>|</span>
            <a href="/terms-of-use" className="transition-colors duration-200 hover:text-white">תנאי שימוש</a>
            <span>|</span>
            <a href="/accessibility-statement" className="transition-colors duration-200 hover:text-white">הצהרת נגישות</a>
          </div>
          <p className="text-xs text-white/40">
            © 2026 Profitector. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
