import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://profitector.ai"),
  title: "Profitector - מפסיקים להפסיד כסף על טעויות ספקים",
  description: "המערכת האוטונומית שסורקת כל שורה בחשבוניות שלך ומזהה טעויות חיוב",
  openGraph: {
    title: "Profitector - מפסיקים להפסיד כסף על טעויות ספקים",
    description: "המערכת האוטונומית שסורקת כל שורה בחשבוניות שלך ומזהה טעויות חיוב",
    url: "https://profitector.ai",
    siteName: "Profitector",
    images: [
      {
        url: "/meta-og.png",
        width: 1200,
        height: 630,
        alt: "Profitector - מפסיקים להפסיד כסף על טעויות ספקים",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitector - מפסיקים להפסיד כסף על טעויות ספקים",
    description: "המערכת האוטונומית שסורקת כל שורה בחשבוניות שלך ומזהה טעויות חיוב",
    images: ["/meta-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${heebo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}