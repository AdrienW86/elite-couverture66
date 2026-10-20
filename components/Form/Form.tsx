"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { services, site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { emailPattern } from "@/lib/contact/schema";
import type { ContactPayload } from "@/lib/contact/schema";
import styles from "./form.module.css";

type FormValues = Pick<
  ContactPayload,
  "name" | "email" | "phone" | "city" | "subject" | "message" | "website"
> & { consent: boolean };
export default function Form() {
  const id = useId();
  const startedAt = useRef(0);
  const submissionId = useRef("");
  const lastPayload = useRef("");
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isReady },
  } = useForm<FormValues>({
    defaultValues: { website: "", email: "", consent: false },
  });
  function start() {
    if (!startedAt.current) startedAt.current = Date.now();
  }
  async function onSubmit(values: FormValues) {
    if (submitting.current) return;
    submitting.current = true;
    setStatus("sending");
    const serialized = JSON.stringify(values);
    if (!submissionId.current || lastPayload.current !== serialized) {
      submissionId.current = crypto.randomUUID();
      lastPayload.current = serialized;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          startedAt: startedAt.current,
          submissionId: submissionId.current,
        }),
        signal: AbortSignal.timeout(20_000),
      });
      const result: unknown = await response.json();
      if (
        !response.ok ||
        !result ||
        typeof result !== "object" ||
        !("success" in result) ||
        result.success !== true
      ) {
        const errorMessage =
          result &&
          typeof result === "object" &&
          "message" in result &&
          typeof result.message === "string"
            ? result.message
            : "L’envoi a échoué. Veuillez réessayer ou nous appeler.";
        throw new Error(errorMessage);
      }
      setStatus("sent");
      reset();
      trackEvent("devis_envoye");
    } catch (error: unknown) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.name === "Error"
          ? error.message
          : "La connexion a été interrompue. Vos informations sont conservées, vous pouvez réessayer.",
      );
    } finally {
      submitting.current = false;
    }
  }
  const error = (key: keyof FormValues) =>
    errors[key] ? (
      <span id={`${id}-${key}-error`} className={styles.error}>
        {errors[key]?.message}
      </span>
    ) : null;
  const describedBy = (key: keyof FormValues) =>
    errors[key] ? `${id}-${key}-error` : undefined;
  if (status === "sent")
    return (
      <div className={styles.confirm} role="status">
        <h3>Votre demande a été transmise.</h3>
        <p>
          L’envoi a été accepté par notre service de messagerie. Nous
          reprendrons contact pour échanger sur votre toiture.
        </p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = 0;
            submissionId.current = "";
            lastPayload.current = "";
            setStatus("idle");
          }}
        >
          Faire une nouvelle demande
        </button>
      </div>
    );
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event);
      }}
      onFocusCapture={start}
      onChangeCapture={start}
      aria-label="Demande de devis"
    >
      <fieldset disabled={!isReady || status === "sending"}>
        <h3 className={styles.heading}>Décrivez-nous votre projet.</h3>
        <p className={styles.note}>
          Les champs marqués * sont nécessaires. L’e-mail est facultatif.
        </p>
        <div className={styles.fields}>
          <label htmlFor={`${id}-name`}>
            Votre nom *
            <input
              id={`${id}-name`}
              autoComplete="name"
              maxLength={100}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy("name")}
              {...register("name", {
                required: "Indiquez votre nom.",
                minLength: {
                  value: 2,
                  message: "Indiquez au moins 2 caractères.",
                },
                maxLength: 100,
              })}
            />
            {error("name")}
          </label>
          <label htmlFor={`${id}-phone`}>
            Téléphone *
            <input
              id={`${id}-phone`}
              type="tel"
              autoComplete="tel"
              maxLength={25}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone")}
              {...register("phone", {
                required: "Indiquez votre téléphone.",
                pattern: {
                  value: /^[+\d\s().-]{8,25}$/,
                  message: "Vérifiez votre numéro de téléphone.",
                },
              })}
            />
            {error("phone")}
          </label>
          <label htmlFor={`${id}-email`}>
            E-mail
            <input
              id={`${id}-email`}
              type="email"
              autoComplete="email"
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
              {...register("email", {
                validate: (value) =>
                  !value ||
                  emailPattern.test(value) ||
                  "Vérifiez votre adresse e-mail.",
              })}
            />
            {error("email")}
          </label>
          <label htmlFor={`${id}-city`}>
            Commune *
            <input
              id={`${id}-city`}
              autoComplete="address-level2"
              maxLength={100}
              aria-invalid={Boolean(errors.city)}
              aria-describedby={describedBy("city")}
              {...register("city", {
                required: "Indiquez la commune du projet.",
                minLength: {
                  value: 2,
                  message: "Indiquez au moins 2 caractères.",
                },
              })}
            />
            {error("city")}
          </label>
          <label className={styles.wide} htmlFor={`${id}-subject`}>
            Votre besoin *
            <select
              id={`${id}-subject`}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={describedBy("subject")}
              {...register("subject", { required: "Choisissez votre besoin." })}
            >
              <option value="">Sélectionner une prestation</option>
              {services.map((service) => (
                <option key={service.href} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Autre demande">Autre demande</option>
            </select>
            {error("subject")}
          </label>
          <label className={styles.wide} htmlFor={`${id}-message`}>
            Votre message *
            <textarea
              id={`${id}-message`}
              rows={4}
              maxLength={5000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={describedBy("message")}
              {...register("message", {
                required: "Décrivez votre projet.",
                minLength: {
                  value: 10,
                  message: "Précisez votre demande en au moins 10 caractères.",
                },
              })}
            />
            {error("message")}
          </label>
        </div>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor={`${id}-website`}>
            Votre site internet
            <input
              id={`${id}-website`}
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </label>
        </div>
        <label className={styles.consent}>
          <input
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy("consent")}
            {...register("consent", {
              required:
                "Votre accord est nécessaire au traitement de la demande.",
            })}
          />
          <span>
            J’accepte que mes coordonnées soient utilisées pour répondre à ma
            demande. * <Link href="/confidentialite">Confidentialité</Link>
          </span>
        </label>
        {error("consent")}
        {status === "error" && (
          <p role="alert" className={styles.error}>
            {message} Vous pouvez aussi nous joindre au{" "}
            <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>.
          </p>
        )}
        <button
          className={styles.submit}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande ↗"}
        </button>
      </fieldset>
    </form>
  );
}
