import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500/80 md:flex-row">
        <p>
          Copyright {new Date().getFullYear()} Gautham Krishna. Crafted with
          gratitude, curiosity, and way too many playlists.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="https://github.com/heyitsgautham"
            target="_blank"
            className="transition hover:text-plasma-cyan"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/heyitsgautham"
            target="_blank"
            className="transition hover:text-plasma-cyan"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:heyitsgautham@gmail.com"
            className="transition hover:text-plasma-cyan"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
