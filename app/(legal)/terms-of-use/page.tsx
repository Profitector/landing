import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#0F1B2D] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-400 transition-colors hover:text-[#2ECC71]"
        >
          → חזרה לדף הבית
        </Link>

        <h1 className="mb-8 text-4xl font-bold gradient-text">תנאי שימוש</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            ברוכים הבאים לאתר Profitector. השימוש באתר זה כפוף לתנאי השימוש המפורטים
            להלן. גלישה באתר מהווה הסכמה לתנאים אלו.
          </p>

          <h2 className="text-2xl font-semibold text-white">שימוש באתר</h2>
          <p>
            האתר מיועד לשימוש אישי ועסקי בלבד. אין להעתיק, לשכפל או להפיץ תכנים מהאתר
            ללא אישור מראש ובכתב.
          </p>

          <h2 className="text-2xl font-semibold text-white">הגבלת אחריות</h2>
          <p>
            המידע באתר מסופק &quot;כמות שהוא&quot; (AS IS). החברה אינה אחראית לנזקים
            ישירים או עקיפים הנובעים מהשימוש באתר או בשירותים המוצעים בו.
          </p>

          <h2 className="text-2xl font-semibold text-white">קניין רוחני</h2>
          <p>
            כל הזכויות בתכני האתר, לרבות עיצוב, לוגו, טקסטים וגרפיקה, שייכות ל-Profitector
            ומוגנות בחוקי קניין רוחני.
          </p>

          <h2 className="text-2xl font-semibold text-white">יצירת קשר</h2>
          <p>
            לשאלות בנוגע לתנאי השימוש, ניתן לפנות אלינו בכתובת{" "}
            <a href="mailto:david@profitector.ai" className="text-[#2ECC71] hover:underline">
              david@profitector.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
