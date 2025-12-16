import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Disc,
} from "lucide-react";

const links = [
  { Icon: Github, href: "https://github.com/moteeullahazmi" },
  { Icon: Linkedin, href: "https://linkedin.com/in/moteeullahazmi" },
  { Icon: Twitter, href: "https://twitter.com/moteeullahazmi" },
  { Icon: Youtube, href: "https://youtube.com/moteeullahazmi" },
  { Icon: Disc, href: "https://discord.gg/6w3gvAm6tg" },
];

export function Footer() {
  return (
    <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800
      flex flex-col items-center gap-4">

      <div className="flex gap-6 text-zinc-500">
        {links.map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white
            hover:scale-110 transition"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <p className="text-sm text-zinc-500">
        © {new Date().getFullYear()} Moteeullah Azmi. All rights reserved.
      </p>
    </footer>
  );
}
