import Link from "next/link";

export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-[#0F1B2D] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-400 transition-colors hover:text-[#2ECC71]"
        >
          → חזרה לדף הבית
        </Link>

        <h1 className="mb-8 text-4xl font-bold gradient-text">הצהרת נגישות</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Profitector מחויבת להנגשת האתר לאנשים עם מוגבלויות ופועלת להתאמתו לתקן
            הנגישות הישראלי (ת&quot;י 5568) ולהנחיות WCAG 2.1 ברמה AA.
          </p>

          <h2 className="text-2xl font-semibold text-white">פעולות הנגשה שבוצעו</h2>
          <ul className="list-disc list-inside space-y-2 pr-4">
            <li>התאמת האתר לניווט באמצעות מקלדת</li>
            <li>הוספת תיאורי טקסט חלופי (alt) לתמונות</li>
            <li>שימוש בניגודיות צבעים מתאימה</li>
            <li>תמיכה בהגדלת טקסט</li>
            <li>מבנה סמנטי של דפי האתר</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">כלי נגישות</h2>
          <p>
            באתר מוטמע כלי נגישות המאפשר התאמות אישיות כגון שינוי גודל הגופן, מצב
            ניגודיות גבוהה, גווני אפור והדגשת קישורים.
          </p>

          <h2 className="text-2xl font-semibold text-white">פנייה בנושא נגישות</h2>
          <p>
            אם נתקלתם בבעיית נגישות באתר, נשמח לשמוע ולטפל בכך. ניתן לפנות אלינו
            בכתובת{" "}
            <a href="mailto:david@profitector.ai" className="text-[#2ECC71] hover:underline">
              david@profitector.ai
            </a>{" "}
            או בטלפון{" "}
            <a href="tel:+972539230418" className="text-[#2ECC71] hover:underline">
              053-923-0418
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
