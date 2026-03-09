import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0F1B2D] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-400 transition-colors hover:text-[#2ECC71]"
        >
          → חזרה לדף הבית
        </Link>

        <h1 className="mb-8 text-4xl font-bold gradient-text">מדיניות פרטיות</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Profitector (&quot;החברה&quot;) מחויבת להגן על פרטיות המשתמשים באתר. מדיניות
            פרטיות זו מפרטת כיצד אנו אוספים, משתמשים ומגנים על המידע שלך.
          </p>

          <h2 className="text-2xl font-semibold text-white">איסוף מידע</h2>
          <p>
            אנו אוספים מידע שאתה מספק לנו ישירות, כגון שם, כתובת דוא&quot;ל ומספר
            טלפון, בעת מילוי טפסים באתר או יצירת קשר עמנו.
          </p>

          <h2 className="text-2xl font-semibold text-white">שימוש במידע</h2>
          <p>
            המידע שנאסף משמש אותנו ליצירת קשר, שיפור השירות, ושליחת עדכונים רלוונטיים
            בהתאם להסכמתך.
          </p>

          <h2 className="text-2xl font-semibold text-white">אבטחת מידע</h2>
          <p>
            אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה בלתי
            מורשית, שינוי או השמדה.
          </p>

          <h2 className="text-2xl font-semibold text-white">יצירת קשר</h2>
          <p>
            לשאלות בנוגע למדיניות הפרטיות שלנו, ניתן לפנות אלינו בכתובת{" "}
            <a href="mailto:david@profitector.ai" className="text-[#2ECC71] hover:underline">
              david@profitector.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
