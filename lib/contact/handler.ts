import { createHash } from "node:crypto";
import {
  validateContact,
  type ContactPayload,
  type ContactResult,
} from "./schema";
export interface ContactDependencies {
  send: (payload: ContactPayload) => Promise<boolean>;
  allow: (key: string) => boolean;
  configured: () => boolean;
}
const maxBodyBytes = 24_000;
function reply(
  body: ContactResult,
  status: number,
  extraHeaders: Record<string, string> = {},
) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...extraHeaders },
  });
}
async function readBody(request: Request): Promise<string | null> {
  if (!request.body) return null;
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  return Buffer.concat(chunks).toString("utf8");
}
export function createContactHandler(dependencies: ContactDependencies) {
  return async function POST(request: Request): Promise<Response> {
    const fail = (message: string, status: number) =>
      reply({ success: false, message }, status);
    const origin = request.headers.get("origin");
    const requestHost =
      request.headers.get("host") ?? new URL(request.url).host;
    if (request.headers.get("sec-fetch-site") === "cross-site")
      return fail("Origine de la demande refusée.", 403);
    if (origin) {
      try {
        if (new URL(origin).host !== requestHost)
          return fail("Origine de la demande refusée.", 403);
      } catch {
        return fail("Origine de la demande refusée.", 403);
      }
    }
    if (
      request.headers.get("content-type")?.split(";")[0].trim() !==
      "application/json"
    )
      return fail("Format de demande non accepté.", 415);
    if (Number(request.headers.get("content-length")) > maxBodyBytes)
      return fail("Le formulaire est trop volumineux.", 413);
    const address =
      process.env.VERCEL === "1"
        ? (request.headers.get("x-vercel-forwarded-for") ?? "unknown")
        : "local";
    const key = createHash("sha256").update(address).digest("hex");
    if (!dependencies.allow(key))
      return reply(
        {
          success: false,
          message:
            "Trop de demandes. Réessayez dans dix minutes ou appelez-nous.",
        },
        429,
        { "Retry-After": "600" },
      );
    let value: unknown;
    try {
      const text = await readBody(request);
      if (text === null)
        return fail("Le formulaire est trop volumineux ou vide.", 413);
      value = JSON.parse(text);
    } catch {
      return fail("Le formulaire est illisible. Veuillez réessayer.", 400);
    }
    const validation = validateContact(value);
    if (!validation.valid) return fail(validation.message, 400);
    if (!dependencies.configured())
      return fail(
        "L’envoi est momentanément indisponible. Contactez-nous par téléphone.",
        503,
      );
    try {
      if (!(await dependencies.send(validation.data)))
        return fail(
          "Votre demande n’a pas été acceptée. Réessayez ou appelez-nous.",
          502,
        );
      return reply({ success: true }, 200);
    } catch {
      console.error("[contact] provider_unavailable");
      return fail(
        "L’envoi a échoué. Réessayez ou contactez-nous par téléphone.",
        502,
      );
    }
  };
}
