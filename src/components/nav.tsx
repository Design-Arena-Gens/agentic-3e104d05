"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#spotlight", label: "Spotlight" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Creds" },
  { href: "#contact", label: "Contact" },
];

export function FloatingNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="glass-panel flex items-center gap-8 px-8 py-4 shadow-2xl shadow-plasma-blue/15">
        <Link
          href={pathname === "/" ? "#top" : "/"}
          className="font-display text-lg font-semibold tracking-[0.4em] text-white"
        >
          GK
        </Link>
        <ul className="flex items-center gap-6 text-xs uppercase tracking-[0.35em] text-zinc-300/80">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="group relative overflow-hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-200 transition-all hover:border-white/40 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-2">
                {link.label}
                <ArrowUpRight
                  className="h-3 w-3 translate-y-[1px] text-plasma-cyan transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                  strokeWidth={1.5}
                />
              </span>
              <motion.span
                className="absolute inset-0 origin-left bg-plasma-cyan/10"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
