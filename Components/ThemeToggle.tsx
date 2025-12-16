"use client";

import { useTheme } from "@/app/providers";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-3 py-2 text-sm rounded-md border
        border-zinc-300 dark:border-zinc-700
        hover:bg-zinc-100 dark:hover:bg-zinc-800
        transition
      "
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
