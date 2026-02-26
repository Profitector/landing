import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, businessType, phone, email } = await request.json();

    if (!name || !businessType || !phone || !email) {
      return NextResponse.json(
        { error: "כל השדות הם חובה" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Profitector Leads <onboarding@resend.dev>",
      to: "david@profitector.ai",
      subject: `ליד חדש מהאתר: ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A2B3C; border-bottom: 2px solid #2ECC71; padding-bottom: 10px;">
            ליד חדש מאתר Profitector
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #1A2B3C; border-bottom: 1px solid #eee;">שם מלא</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #1A2B3C; border-bottom: 1px solid #eee;">סוג עסק</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${businessType}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #1A2B3C; border-bottom: 1px solid #eee;">טלפון</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #1A2B3C; border-bottom: 1px solid #eee;">אימייל</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #888; font-size: 12px;">נשלח מטופס הלידים באתר Profitector</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch {
    return NextResponse.json(
      { error: "שגיאה בשליחת המייל" },
      { status: 500 }
    );
  }
}
