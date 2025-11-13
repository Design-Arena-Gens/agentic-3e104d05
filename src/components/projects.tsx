"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { signatureProjects } from "@/lib/data";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-4">
          <p className="section-heading">Signature builds</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">
            Prototypes with pulse - engineered to be remembered.
          </h2>
          <p className="max-w-3xl text-base text-zinc-300/85 md:text-lg">
            Each project starts as a question:{" "}
            <em>what if this felt magical?</em> From data infrastructure to
            campus tools, I build for high emotion and tangible outcomes.
          </p>
        </div>

        <div className="grid gap-8">
          {signatureProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/12 via-white/3 to-transparent p-6 shadow-2xl shadow-plasma-blue/10 backdrop-blur-3xl md:p-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-plasma-cyan/15 via-transparent to-plasma-pink/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl text-white">
                      {project.name}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-plasma-cyan/30 bg-plasma-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-plasma-cyan">
                      <Sparkles className="h-4 w-4" strokeWidth={1.6} />
                      {project.stats.year}
                    </span>
                  </div>
                  <p className="text-lg text-zinc-200/90">{project.tagline}</p>
                  <p className="text-sm text-zinc-300/80">{project.description}</p>
                </div>
                <div className="flex flex-col justify-between gap-6 md:w-64">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-plasma-cyan/75">
                      Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100/85"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-plasma-cyan/75">
                      Impact pulse
                    </p>
                    <p className="mt-3 text-sm text-zinc-300/80">
                      {project.stats.impact}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="flex-1 rounded-full border border-white/10 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-zinc-100 transition hover:border-white/40 hover:text-white"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        className="flex-1 rounded-full border border-plasma-cyan/40 bg-plasma-cyan/10 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-white transition hover:bg-plasma-cyan/20"
                      >
                        Live
                      </Link>
                    )}
                    {project.links.video && (
                      <Link
                        href={project.links.video}
                        target="_blank"
                        className="flex-1 rounded-full border border-white/10 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                      >
                        Watch
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -right-32 -top-32 size-72 rounded-full bg-plasma-blue/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-40 -left-24 size-[18rem] rounded-full bg-plasma-pink/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                animate={{ rotate: -360 }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 text-center text-sm text-zinc-400/80">
          <p>
            200+ open experiments live on{" "}
            <Link
              href="https://github.com/heyitsgautham"
              target="_blank"
              className="inline-flex items-center gap-1 text-plasma-cyan transition hover:text-plasma-blue"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            - explore the labyrinth.
          </p>
        </div>
      </div>
    </section>
  );
}
