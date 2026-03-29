import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPost, formatDate } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} – Berea Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Content } = post;

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

      {/* Article */}
      <main className="max-w-2xl mx-auto px-6 pt-14 pb-24 w-full flex-1">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm"
            style={{ color: "var(--muted)" }}
          >
            ← Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10">
          <p
            className="text-xs font-medium mb-3"
            style={{ color: "var(--muted)" }}
          >
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="text-3xl font-bold tracking-tight leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            {post.excerpt}
          </p>
        </header>

        {/* Divider */}
        <hr style={{ borderColor: "var(--border)" }} className="mb-10" />

        {/* Content */}
        <Content />
      </main>

      {/* CTA */}
      <section
        className="border-t py-14"
        style={{ borderColor: "var(--border)", background: "var(--card)" }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Study sermons more deeply</h2>
          <p className="mb-6" style={{ color: "var(--muted)" }}>
            Berea records, transcribes, and helps you study sermons with AI. Free on iOS.
          </p>
          <a
            href="https://apps.apple.com/app/berea/id6759158035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-7 py-3 text-sm font-semibold"
            style={{ background: "var(--accent)", color: "#0f1117" }}
          >
            Download Berea Free →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
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
