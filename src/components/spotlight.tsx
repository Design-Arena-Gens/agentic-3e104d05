"use client";

import { motion } from "framer-motion";
import { spotlightMoments } from "@/lib/data";

export function SpotlightTimeline() {
  return (
    <section id="spotlight" className="relative py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16 flex flex-col gap-4">
          <p className="section-heading">Spotlight moments</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">
            Every chapter adds rigs, rituals, and rhythm.
          </h2>
          <p className="max-w-2xl text-base text-zinc-300/85 md:text-lg">
            A rapid-fire tour through the experiences that train my instincts -
            from data-first storytelling to community mentoring and relentless
            open-source shipping.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-white/10 via-white/20 to-white/0 md:block" />
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-10"
          >
            {spotlightMoments.map((moment, index) => (
              <motion.li
                key={moment.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="md:pl-16"
              >
                <div className="glass-panel relative overflow-hidden p-8">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0" />
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl text-white">
                          {moment.title}
                        </span>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-plasma-cyan/80">
                          {moment.year}
                        </span>
                      </div>
                      <p className="text-sm uppercase tracking-[0.3em] text-plasma-blue/70">
                        {moment.subtitle}
                      </p>
                      <p className="max-w-xl text-base text-zinc-200/85">
                        {moment.description}
                      </p>
                    </div>
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-100/85">
                      <span className="block text-xs uppercase tracking-[0.35em] text-plasma-cyan/80">
                        Highlight
                      </span>
                      <p className="mt-2">{moment.highlight}</p>
                    </div>
                  </div>
                  <div className="absolute -left-3 top-10 hidden h-6 w-6 rounded-full bg-gradient-to-br from-plasma-cyan via-plasma-blue to-plasma-pink shadow-lg shadow-plasma-blue/40 md:block">
                    <span className="absolute inset-0 animate-ping rounded-full bg-plasma-cyan/40" />
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-night via-night/40 to-transparent" />
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/5 px-8 py-10 backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-plasma-cyan/75">
              Mission
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Turn students into co-conspirators who build for impact, not
              grades.
            </h3>
          </div>
          <p className="max-w-lg text-sm text-zinc-300/80">
            I&apos;m designing learning spaces where curiosity counts as currency -
            studio-style labs, lightning talks, and open-source rituals that
            reward exploration.
          </p>
        </div>
      </div>
    </section>
  );
}
