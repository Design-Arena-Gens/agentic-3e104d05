"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { certifications } from "@/lib/data";

export function CertificationsMarquee() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-y border-white/10 bg-night/80 py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-plasma-blue/10 via-transparent to-plasma-pink/10" />
      <div className="container relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3 text-center">
          <p className="section-heading mx-auto">Proof of obsession</p>
          <h2 className="mx-auto max-w-3xl font-display text-3xl text-white md:text-4xl">
            Badges aren&apos;t the goal - they are receipts of relentless curiosity.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-zinc-300/80 md:text-base">
            From Harvard&apos;s CS50 to Google Cloud&apos;s Arcade quests, I treat every
            credential as a spark to teach others and build faster.
          </p>
        </div>

        <div className="relative">
          <motion.div
            className="flex min-w-full gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <Link
                key={`${cert.name}-${index}`}
                href={cert.url}
                target="_blank"
                className="glass-panel flex min-w-[320px] flex-col gap-3 px-6 py-5"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-plasma-cyan/70">
                  {cert.issuer}
                </p>
                <p className="font-semibold text-white">{cert.name}</p>
                <span className="text-xs text-zinc-400/80">Tap to view</span>
              </Link>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-night to-transparent" />
        </div>
      </div>
    </section>
  );
}
