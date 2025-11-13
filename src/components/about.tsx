"use client";

import { motion } from "framer-motion";
import { heroHighlights } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid gap-16 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="section-heading">Who I am</p>
            <h2 className="font-display text-4xl text-white">
              Student by enrollment. Builder by instinct.
            </h2>
            <p className="text-base text-zinc-300/85 md:text-lg">
              I am Gautham Krishna - a data science undergrad composing digital
              experiences that leave a trace. I merge analytics, machine
              learning, and lush interface design to craft products that people
              remember after the tab closes.
            </p>
            <p className="text-base text-zinc-300/75 md:text-lg">
              My playground stretches from AI agents and data pipelines to
              immersive web experiments. I value shipping fast, documenting the
              lessons, and mentoring communities so we all rise together.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="glass-panel relative overflow-hidden p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-plasma-blue/20 via-transparent to-plasma-pink/20 opacity-50" />
            <h3 className="text-sm uppercase tracking-[0.35em] text-plasma-cyan/80">
              Creative DNA
            </h3>
            <ul className="mt-6 space-y-5 text-sm text-zinc-200/85">
              {heroHighlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 font-display text-xs text-white">
                    +
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200/80">
              <p className="uppercase tracking-[0.35em] text-plasma-cyan/75">
                Current fascinations
              </p>
              <p className="mt-2">
                * Vertex AI agent orchestration <br />
                * Generative music + WebGL visuals <br />
                * Systems for collective learning rituals
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
