"use client";

import { GitHubCalendar } from "react-github-calendar";

export function Github() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">Proof of Work</h2>

      <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
        Consistent public contributions and real-world development activity on GitHub.
      </p>

      <div
        className="
          border border-zinc-200 dark:border-zinc-800
          rounded-xl p-6
          flex justify-center
        "
      >
        <div className="w-full [&_svg]:w-full [&_svg]:h-auto">
          <GitHubCalendar
            username="moteeullahazmi"
            blockSize={14}   // 👈 BIGGER blocks
            blockMargin={4}
            fontSize={16}
          />
        </div>
      </div>
    </section>
  );
}
