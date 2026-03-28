import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Berea",
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 space-y-8" style={{ color: "var(--foreground)" }}>
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm" style={{ color: "var(--muted)" }}>Last updated: March 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What we collect</h2>
        <p style={{ color: "var(--muted)" }}>
          Berea collects audio recordings you choose to make and the transcriptions
          generated from them. We store this data in your account to power the notes,
          cross-references, and prayer features. We also collect your email address
          if you create an account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How we use it</h2>
        <p style={{ color: "var(--muted)" }}>
          Your recordings and transcriptions are used solely to generate your sermon
          notes. We do not sell your data. We do not use your recordings to train AI
          models without explicit consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Third-party services</h2>
        <p style={{ color: "var(--muted)" }}>
          Berea uses Deepgram for audio transcription and Supabase for data storage.
          Both services are bound by their respective privacy policies and data
          processing agreements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Data deletion</h2>
        <p style={{ color: "var(--muted)" }}>
          You can delete your account and all associated data at any time from within
          the app. Contact us at support@berea.app for assistance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p style={{ color: "var(--muted)" }}>
          Questions? Email us at{" "}
          <a href="mailto:support@berea.app" className="underline" style={{ color: "var(--accent)" }}>
            support@berea.app
          </a>
        </p>
      </section>
    </div>
  );
}
