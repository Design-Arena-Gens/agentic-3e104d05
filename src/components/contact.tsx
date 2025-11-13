"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { MailPlus, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative pb-28 pt-16">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          className="glass-panel relative overflow-hidden px-10 py-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-plasma-cyan/20 via-transparent to-plasma-pink/20" />
          <p className="section-heading mx-auto">Let&apos;s craft together</p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
            Ready to launch the next unforgettable thing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-300/80 md:text-lg">
            I&apos;m open to collaborations, internships, and wild experiments.
            Share a story, a problem statement, or simply a spark - I reply
            quickly.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="mailto:heyitsgautham@gmail.com?subject=Let's build something unforgettable"
              className="group relative flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white hover:text-night"
            >
              <MailPlus className="h-4 w-4" />
              Email me
              <motion.span
                className="absolute inset-0 origin-left bg-white/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              />
            </Link>
            <Link
              href="https://linkedin.com/in/heyitsgautham"
              target="_blank"
              className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-200 transition hover:border-plasma-cyan hover:text-plasma-cyan"
            >
              <MessageCircle className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.35em] text-zinc-400/80">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.url}
                target="_blank"
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
