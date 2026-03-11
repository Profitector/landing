import type { Metadata } from "next";
import { Assistant, Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700"],
});

const assistant = Assistant({
  variable: "--font-heading",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://profitector.ai"),
  title: "Profitector — הרווחים שלכם דולפים. אנחנו מוצאים אותם.",
  description:
    "מערכת AI שמגינה על שולי הרווח שלכם בזמן אמת — מזהה דליפות, מתריעה על שחיקת מרווחים, ומספקת המלצות פעולה.",
  openGraph: {
    title: "Profitector — AI Profit Protection",
    description:
      "מערכת AI שמגינה על שולי הרווח שלכם בזמן אמת — מזהה דליפות, מתריעה על שחיקת מרווחים, ומספקת המלצות פעולה.",
    url: "https://profitector.ai",
    siteName: "Profitector",
    images: [
      {
        url: "/meta-og.png",
        width: 1200,
        height: 630,
        alt: "Profitector — AI Profit Protection",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitector — AI Profit Protection",
    description:
      "מערכת AI שמגינה על שולי הרווח שלכם בזמן אמת — מזהה דליפות, מתריעה על שחיקת מרווחים, ומספקת המלצות פעולה.",
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
      <body
        className={`${spaceGrotesk.variable} ${assistant.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
