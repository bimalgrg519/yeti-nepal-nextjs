"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ApplyState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function applyAction(
  _prev: ApplyState,
  formData: FormData,
): Promise<ApplyState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const role = formData.get("role")?.toString().trim();
  const cvLink = formData.get("cvLink")?.toString().trim();

  if (!name || !email || !role || !cvLink) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  if (!/^https?:\/\/.+/.test(cvLink)) {
    return { status: "error", message: "CV link must be a valid URL." };
  }

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      replyTo: email,
      subject: `New Application: ${role} — ${name}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 32px; background: #0b0b0b; color: #fff; border-radius: 4px;">
          <h2 style="color: #b5ff4d; margin: 0 0 24px; font-size: 20px; text-transform: uppercase; letter-spacing: 0.1em;">
            New Application Received (yetinepal.com)
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 100px;">Role</td>
              <td style="padding: 8px 0; color: #fff;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td>
              <td style="padding: 8px 0; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #b5ff4d;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">CV</td>
              <td style="padding: 8px 0;"><a href="${cvLink}" style="color: #b5ff4d;" target="_blank">View CV →</a></td>
            </tr>
          </table>
        </div>
      `,
    });

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Failed to send your application. Please try again.",
    };
  }
}
