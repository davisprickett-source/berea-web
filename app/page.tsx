import ChurchPartnerForm from "@/components/ChurchPartnerForm";

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/app/berea/id6759158035";

const features = [
  {
    icon: "🎙️",
    title: "Record",
    desc: "One tap to start. AI listens and transcribes while you worship.",
  },
  {
    icon: "📝",
    title: "Sermon Notes",
    desc: "Structured notes generated automatically from the transcript.",
  },
  {
    icon: "📖",
    title: "Cross-References",
    desc: "Related scripture surfaces automatically alongside every sermon.",
  },
  {
    icon: "🙏",
    title: "Prayer",
    desc: "A personalized prayer drawn from what your pastor preached.",
  },
  {
    icon: "🔍",
    title: "Search",
    desc: "Full-text search across every sermon you've ever recorded.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", background: "rgba(15,17,23,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight" style={{ color: "var(--foreground)" }}>Berea</span>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm font-semibold transition-colors"
            style={{ background: "var(--accent)", color: "#0f1117" }}
          >
            Download Free
          </a>
        </div>
      </nav>

      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center space-y-8">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase" style={{ background: "var(--card)", color: "var(--accent)", border: "1px solid var(--border)" }}>
            Free on iOS
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            AI sermon notes,<br />
            <span style={{ color: "var(--accent)" }}>automatically.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            Berea records your sermon, transcribes every word with AI, and generates
            structured notes, scripture cross-references, and a prayer — all before
            you leave the pew.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-semibold shadow-lg transition-colors"
              style={{ background: "var(--accent)", color: "#0f1117" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
            <a
              href="#church-partner"
              className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              For pastors & churches →
            </a>
          </div>
        </section>

        {/* Brand Story */}
        <section className="border-y py-20" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
            <blockquote className="text-2xl sm:text-3xl font-semibold leading-relaxed italic" style={{ color: "var(--foreground)" }}>
              &ldquo;The Bereans examined the Scriptures every day.&rdquo;
            </blockquote>
            <cite className="block text-sm not-italic" style={{ color: "var(--accent)" }}>Acts 17:11</cite>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Berea is built for people who take God&apos;s word seriously. People who want
              to remember what was preached, study it deeper, and carry it into the week
              ahead. Not just another note-taking app — a tool for believers who examine
              the Scriptures every day.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 py-24 space-y-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight">
            Everything you need to study deeper
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 space-y-3 border transition-colors"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            ))}
            {/* Sixth card: free */}
            <div
              className="rounded-2xl p-6 space-y-3 border sm:col-span-2 lg:col-span-1 flex flex-col justify-center"
              style={{ background: "var(--card)", borderColor: "var(--accent)", opacity: 0.9 }}
            >
              <div className="text-3xl">🆓</div>
              <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>Free to start</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Record your first sermons free. No credit card required. Upgrade when you
                want unlimited recordings.
              </p>
            </div>
          </div>
        </section>

        {/* Church Partner */}
        <section id="church-partner" className="border-t py-24" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Bring Berea to your church
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Pastors and worship leaders: get a unique link to share with your congregation.
                When 5+ members install Berea, your entire staff gets free premium access.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { step: "1", label: "Submit your church below" },
                { step: "2", label: "Share your unique link with your congregation" },
                { step: "3", label: "5+ installs → free premium for your staff" },
              ].map(({ step, label }) => (
                <div key={step} className="space-y-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto text-sm font-bold"
                    style={{ background: "var(--accent)", color: "#0f1117" }}
                  >
                    {step}
                  </div>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{label}</p>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl border p-8"
              style={{ borderColor: "var(--border)", background: "var(--background)" }}
            >
              <ChurchPartnerForm />
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Start studying deeper today
          </h2>
          <p style={{ color: "var(--muted)" }}>
            Free to download. No credit card. Available for iPhone and iPad.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold shadow-lg transition-colors"
            style={{ background: "var(--accent)", color: "#0f1117" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "var(--muted)" }}>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>Berea</span>
            <span>·</span>
            <span className="italic">&ldquo;They examined the Scriptures every day&rdquo; — Acts 17:11</span>
          </div>
          <div className="flex gap-6">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              App Store
            </a>
            <a href="/privacy" className="hover:opacity-70 transition-opacity">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
