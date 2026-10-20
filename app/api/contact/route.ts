import { Resend } from "resend";
import { createContactHandler } from "@/lib/contact/handler";
import { createRateLimiter } from "@/lib/contact/rate-limit";
import { emailPattern } from "@/lib/contact/schema";
import { site } from "@/lib/site";
const allow = createRateLimiter();
export const runtime = "nodejs";
export const POST = createContactHandler({
  allow,
  configured: () =>
    Boolean(
      process.env.RESEND_API_KEY &&
        process.env.RESEND_FROM &&
        emailPattern.test(process.env.RESEND_FROM),
    ),
  async send(payload) {
    const from = process.env.RESEND_FROM;
    if (!from) return false;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send(
      {
        from: `Élite Couverture 66 <${from}>`,
        to: [site.email],
        ...(payload.email ? { replyTo: payload.email } : {}),
        subject: `Demande de devis — ${payload.subject}`,
        text: [
          `Nom : ${payload.name}`,
          `Téléphone : ${payload.phone}`,
          `E-mail : ${payload.email || "Non renseigné"}`,
          `Commune : ${payload.city}`,
          `Prestation : ${payload.subject}`,
          "",
          payload.message,
        ].join("\n"),
      },
      {
        idempotencyKey: `contact/${payload.submissionId}`,
        signal: AbortSignal.timeout(15_000),
      },
    );
    if (error || !data?.id) {
      console.error("[contact] provider_rejected");
      return false;
    }
    return true;
  },
});
