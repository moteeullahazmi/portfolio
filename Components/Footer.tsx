import { Github, Linkedin, X, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-6 border-t border-zinc-800 flex flex-col items-center gap-4">
      <div className="flex gap-6">
        <a href="https://github.com/moteeullahazmi" target="_blank">
          <Github className="w-5 h-5 hover:text-white" />
        </a>
        <a href="https://linkedin.com/in/moteeullahazmi" target="_blank">
          <Linkedin className="w-5 h-5 hover:text-white" />
        </a>
        <a href="https://x.com/moteeullahazmi" target="_blank">
          <X className="w-5 h-5 hover:text-white" />
        </a>
        <a href="https://youtube.com/moteeullahazmi" target="_blank">
          <Youtube className="w-5 h-5 hover:text-white" />
        </a>

      </div>

      <p className="text-xs text-zinc-100">
        © {new Date().getFullYear()} Moteeullah Azmi. All rights reserved.
      </p>
    </footer>
  );
}
