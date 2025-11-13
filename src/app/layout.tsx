import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-3e104d05.vercel.app"),
  title: {
    default: "Gautham Krishna - Building Delightful Human-Tech Moments",
    template: "%s | Gautham Krishna",
  },
  description:
    "The unforgettable digital playground of Gautham Krishna - student, builder, and creative technologist exploring data, AI, and immersive web experiences.",
  openGraph: {
    title: "Gautham Krishna - Builder of unforgettable digital experiences",
    description:
      "Step inside an immersive portfolio blending storytelling, data-driven work, and bold design experiments by Gautham Krishna.",
    url: "https://agentic-3e104d05.vercel.app",
    siteName: "Gautham Krishna Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Neon gradient spheres orbiting the initials GK",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautham Krishna - Builder of unforgettable digital experiences",
    description:
      "Step inside an immersive portfolio blending storytelling, data-driven work, and bold design experiments.",
    images: ["/og-image.svg"],
  },
  keywords: [
    "Gautham Krishna",
    "heyitsgautham",
    "portfolio",
    "frontend engineer",
    "creative developer",
    "Next.js",
    "Tailwind CSS",
    "India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} bg-night`}>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
