import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Berea",
  description:
    "Guides, comparisons, and resources for serious sermon study. From the team behind the Berea AI sermon notes app.",
};

export default function BlogIndex() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: "var(--border)",
          background: "rgba(15,17,23,0.92)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Berea
          </Link>
          <a
            href="https://apps.apple.com/app/berea/id6759158035"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm font-semibold transition-colors"
            style={{ background: "var(--accent)", color: "#0f1117" }}
          >
            Download Free
          </a>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-10 w-full">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Blog</h1>
        <p style={{ color: "var(--muted)" }}>
          Guides, comparisons, and resources for serious sermon study.
        </p>
      </header>

      {/* Post list */}
      <main className="max-w-3xl mx-auto px-6 pb-24 w-full flex-1">
        <div className="flex flex-col gap-8">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-2xl p-6 border transition-colors group"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <p
                className="text-xs font-medium mb-2"
                style={{ color: "var(--muted)" }}
              >
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h2
                className="text-xl font-semibold mb-2 group-hover:underline"
                style={{ color: "var(--foreground)" }}
              >
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {post.excerpt}
              </p>
              <span
                className="inline-block mt-4 text-sm font-medium"
                style={{ color: "var(--accent)" }}
              >
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-8"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="max-w-5xl mx-auto px-6 text-center text-xs"
          style={{ color: "var(--muted)" }}
        >
          © {new Date().getFullYear()} Berea · Named after the Bereans who examined
          Scripture daily (Acts 17:11)
        </div>
      </footer>
    </div>
  );
}
