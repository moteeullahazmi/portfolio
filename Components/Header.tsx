import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Moteeullah Azmi
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Full Stack Developer building production-ready products
        </p>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <img
          src="/me.jpeg"
          alt="Moteeullah Azmi"
          className="w-24 h-24 rounded-full object-cover border
          border-zinc-300 dark:border-zinc-700
          hover:scale-105 transition"
        />
      </div>
    </section>
  );
}
