import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://berea-web.vercel.app"
  ),
  title: "Berea – AI Sermon Notes App | Record, Transcribe & Study",
  description:
    "Berea uses AI to record and transcribe sermons, then automatically generates notes, cross-references, and prayers. Free on iOS.",
  openGraph: {
    title: "Berea – AI Sermon Notes App",
    description:
      "Record sermons. AI transcribes. Study deeper. Named after the Bereans who examined Scripture daily (Acts 17:11).",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Berea – AI Sermon Notes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berea – AI Sermon Notes App",
    description: "Record sermons. AI transcribes. Study deeper.",
    images: ["/og-image.png"],
  },
  keywords: [
    "AI sermon notes",
    "sermon transcription app",
    "church notes journal",
    "scripture study",
    "sermon recorder",
    "Berean notes",
    "AI church app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
