"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function contactAction(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const source = formData.get("source")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Name, email, and message are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      replyTo: email,
      subject: `New Contact: ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 32px; background: #0b0b0b; color: #fff; border-radius: 4px;">
          <h2 style="color: #0071e3; margin: 0 0 24px; font-size: 20px; text-transform: uppercase; letter-spacing: 0.1em;">
            New Contact Submission (yetinepal.com)
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0071e3;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Company</td>
              <td style="padding: 8px 0; color: #fff;">${company}</td>
            </tr>` : ""}
            ${source ? `<tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Found us via</td>
              <td style="padding: 8px 0; color: #fff;">${source}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #fff; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Failed to send your message. Please try again.",
    };
  }
}
