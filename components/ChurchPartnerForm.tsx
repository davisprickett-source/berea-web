"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

function generateCode(length = 8): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export default function ChurchPartnerForm() {
  const [form, setForm] = useState({
    contact_name: "",
    church_name: "",
    contact_email: "",
    congregation_size: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const referral_code = generateCode();

    const { error } = await supabase.from("church_partners").insert({
      ...form,
      referral_code,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center space-y-3">
        <div className="text-4xl">✓</div>
        <h3 className="text-xl font-semibold text-[var(--foreground)]">
          You&apos;re in!
        </h3>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          Check your inbox — we&apos;ve sent your unique church partner link and
          instructions for sharing it with your congregation. When 5+ members
          install Berea, your staff gets free premium access.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-[var(--muted)] mb-1.5">
            Your name
          </label>
          <input
            type="text"
            required
            value={form.contact_name}
            onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
            placeholder="Pastor John Smith"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--muted)] mb-1.5">
            Church name
          </label>
          <input
            type="text"
            required
            value={form.church_name}
            onChange={(e) => setForm({ ...form, church_name: e.target.value })}
            placeholder="Grace Community Church"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--muted)] mb-1.5">
          Email address
        </label>
        <input
          type="email"
          required
          value={form.contact_email}
          onChange={(e) => setForm({ ...form, contact_email: e.target.value })}
          placeholder="pastor@youarchurch.com"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--muted)] mb-1.5">
          Congregation size (optional)
        </label>
        <select
          value={form.congregation_size}
          onChange={(e) => setForm({ ...form, congregation_size: e.target.value })}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
        >
          <option value="">Select size</option>
          <option value="under50">Under 50</option>
          <option value="50-200">50–200</option>
          <option value="200-500">200–500</option>
          <option value="500-2000">500–2,000</option>
          <option value="2000+">2,000+</option>
        </select>
      </div>

      {errorMsg && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-dark)] disabled:opacity-60 px-6 py-3 text-sm font-semibold text-[#0f1117] transition-colors cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting…" : "Get my church partner link →"}
      </button>
    </form>
  );
}
