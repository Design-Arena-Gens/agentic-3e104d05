"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { heroHighlights, liveStats } from "@/lib/data";

export function Hero() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const springX = useSpring(cursorX, { stiffness: 120, damping: 18 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18 });
  const spotlightX = useTransform(springX, (value) => `${value}px`);
  const spotlightY = useTransform(springY, (value) => `${value}px`);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      cursorX.set(event.clientX - rect.left);
      cursorY.set(event.clientY - rect.top);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [cursorX, cursorY]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plasma-blue/35 blur-[120px]"
          style={{
            left: spotlightX,
            top: spotlightY,
          }}
        />
        <motion.div
          className="absolute size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plasma-pink/25 blur-[180px]"
          style={{
            left: spotlightX,
            top: spotlightY,
          }}
        />
      </div>

      <div className="container relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-xl rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 shadow-lg shadow-plasma-blue/10 backdrop-blur-2xl">
          <span className="flex items-center gap-2 font-medium uppercase tracking-[0.4em] text-plasma-cyan">
            <Sparkles className="h-4 w-4 text-plasma-pink" />
            Hey, I&apos;m Gautham Krishna
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-8">
            <motion.h1
              className="font-display text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I make technology <span className="text-plasma-cyan">feel</span>{" "}
              like a memory you never want to forget.
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg text-zinc-300/90 md:text-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              Creative technologist obsessed with translating data, AI, and
              community stories into immersive digital moments. Currently
              blending IIT Madras&apos; data science rigor with late-night
              prototyping rituals.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <Link
                href="#projects"
                className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition-all hover:border-white hover:bg-white hover:text-night"
              >
                <span className="flex items-center gap-3">
                  See the work
                  <ArrowDownRight
                    className="h-4 w-4 -rotate-12 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
                </span>
                <motion.span
                  className="absolute inset-0 origin-left bg-white/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                />
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-200 transition hover:border-plasma-cyan hover:text-plasma-cyan"
              >
                Collaborate
              </Link>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
            >
              {liveStats.map((stat) => (
                <div key={stat.label} className="glass-panel p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-plasma-cyan/75">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm text-zinc-300/80">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative flex flex-col gap-6 rounded-[36px] border border-white/10 bg-black/30 p-8 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[36px]">
              <div className="absolute -right-10 -top-24 h-60 w-60 rounded-full bg-plasma-cyan/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-8 h-52 w-52 rounded-full bg-plasma-pink/30 blur-3xl" />
            </div>
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-300/70">
              Why unforgettable?
            </p>
            <ul className="space-y-6 text-sm text-zinc-100/90">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <span
                    className="mt-1 inline-flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-plasma-blue/30 font-display text-xs text-white"
                    aria-hidden="true"
                  >
                    *
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-5 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-plasma-cyan/80">
                  Motto
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Ship wonder. Daily.
                </p>
              </div>
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/40">
                <motion.div
                  className="absolute h-24 w-24 rounded-full bg-plasma-blue/30 blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                />
                <span className="font-display text-sm tracking-[0.35em] text-white">
                  GK
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
