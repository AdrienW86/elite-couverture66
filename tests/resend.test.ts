import assert from "node:assert/strict";
import { test } from "node:test";
import { randomUUID } from "node:crypto";
import { POST } from "../app/api/contact/route";

test("le SDK Resend reçoit le destinataire, les champs et la clé anti-doublon", async (context) => {
  const previousKey = process.env.RESEND_API_KEY;
  const previousFrom = process.env.RESEND_FROM;
  process.env.RESEND_API_KEY = "re_test_not_a_real_key";
  process.env.RESEND_FROM = "site@example.com";
  context.after(() => {
    if (previousKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = previousKey;
    if (previousFrom === undefined) delete process.env.RESEND_FROM;
    else process.env.RESEND_FROM = previousFrom;
  });
  const submissionId = randomUUID();
  const data = {
    name: "Validation SDK",
    email: "reply@example.com",
    phone: "0612345678",
    city: "Perpignan",
    subject: "Couverture",
    message: "Validation du transport SDK, sans envoi réel.",
    website: "",
    consent: true,
    startedAt: Date.now() - 5000,
    submissionId,
  };
  let body: unknown;
  let idempotencyKey: string | null = null;
  let accepted = true;
  context.mock.method(
    globalThis,
    "fetch",
    async (_input: RequestInfo | URL, init?: RequestInit) => {
      body = typeof init?.body === "string" ? JSON.parse(init.body) : null;
      idempotencyKey = new Headers(init?.headers).get("idempotency-key");
      return accepted
        ? Response.json({ id: "test-email-id" })
        : Response.json(
            {
              name: "validation_error",
              message: "Unverified domain",
              statusCode: 403,
            },
            { status: 403 },
          );
    },
  );
  const request = () =>
    new Request("https://example.com/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "https://example.com",
      },
      body: JSON.stringify(data),
    });
  assert.equal((await POST(request())).status, 200);
  assert.equal(idempotencyKey, `contact/${submissionId}`);
  assert.ok(
    body &&
      typeof body === "object" &&
      "to" in body &&
      "text" in body &&
      "reply_to" in body,
  );
  assert.deepEqual(body.to, ["contact@elicouverture66.fr"]);
  assert.equal(body.reply_to, "reply@example.com");
  assert.equal(typeof body.text, "string");
  if (typeof body.text === "string")
    for (const value of [
      data.name,
      data.phone,
      data.city,
      data.subject,
      data.message,
    ])
      assert.ok(body.text.includes(value));
  accepted = false;
  assert.equal((await POST(request())).status, 502);
});
