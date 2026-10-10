"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { buttonClassName } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { formIntro, needs, timelines } from "@/content/contact";
import styles from "./ContactForm.module.css";

type Status = { type: "idle" | "sending" | "success" | "error"; message: string };

const idle: Status = { type: "idle", message: "" };

export function ContactForm() {
  const [status, setStatus] = useState<Status>(idle);
  const [sent, setSent] = useState(false);
  const successTitleRef = useRef<HTMLHeadingElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // On success, scroll the panel back into view (past the sticky header) and
  // move focus to the success heading so screen readers announce the flair.
  useEffect(() => {
    if (!sent) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    topRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    successTitleRef.current?.focus();
  }, [sent]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message: "Form is not configured yet (missing NEXT_PUBLIC_WEB3FORMS_KEY).",
      });
      return;
    }

    const data = new FormData(form);
    // Web3Forms honeypot: bots fill it, humans don't.
    if (data.get("botcheck")) return;

    const selectedNeeds = data.getAll("need").join(", ") || "Not specified";

    setStatus({ type: "sending", message: "Sending transmission..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New project inquiry from ${data.get("name")}`,
          from_name: data.get("name"),
          name: data.get("name"),
          email: data.get("email"),
          replyto: data.get("email"),
          company: data.get("company") || "N/A",
          needs: selectedNeeds,
          timeline: data.get("timeline"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json()) as { success: boolean; message?: string };

      if (result.success) {
        form.reset();
        setSent(true);
        setStatus({ type: "success", message: "Transmission received. We'll reply soon." });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again or email us directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Couldn't reach the form service. Please try again or email us directly.",
      });
    }
  }

  const sending = status.type === "sending";

  return (
    <div ref={topRef} className={styles.top}>
      <Panel title={formIntro.title} description={formIntro.description}>
        {sent ? (
          <div className={styles.success} role="status">
          <div className={styles.burst} aria-hidden="true">
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.star} />
            <span className={styles.star} />
            <span className={styles.star} />
            <span className={styles.star} />
            <span className={styles.orbit}>
              <span className={styles.sat} />
            </span>
            <span className={styles.core}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M4.5 12.5l5 5 10-11"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <h3 ref={successTitleRef} tabIndex={-1} className={styles.successTitle}>
            Signal locked in.
          </h3>
          <p className={styles.successText}>
            Transmission received — we read every message and reply within one business day.
          </p>
        </div>
        ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required placeholder="Your name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
          />
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="company">
            Company or website <small>(optional)</small>
          </label>
          <input id="company" name="company" placeholder="yourcompany.com" />
        </div>
        <fieldset className={`${styles.field} ${styles.full} ${styles.fieldset}`}>
          <legend>What do you need?</legend>
          <div className={styles.chips}>
            {needs.map((need, index) => (
              <span key={need}>
                <input type="checkbox" id={`need-${index}`} name="need" value={need} />
                <label htmlFor={`need-${index}`}>{need}</label>
              </span>
            ))}
          </div>
        </fieldset>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="timeline">Ideal launch window</label>
          <select id="timeline" name="timeline">
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What's the goal? Who is it for? Anything you love or hate about your current site?"
          />
        </div>
        {/* Honeypot field: hidden from humans, catches bots. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className={styles.honeypot}
          aria-hidden="true"
        />
        <div className={styles.send}>
          <button
            className={`${buttonClassName("primary")} ${sending ? styles.launching : ""}`}
            type="submit"
            disabled={sending}
            aria-busy={sending}
          >
            {sending ? "Launching..." : "Send transmission"}
          </button>
          <p
            className={`${styles.status} ${status.type === "error" ? styles.error : ""} ${sending ? styles.pulsing : ""}`}
            role="status"
          >
            {sending ? "Launching transmission..." : status.message}
          </p>
        </div>
      </form>
      )}
    </Panel>
    </div>
  );
}
