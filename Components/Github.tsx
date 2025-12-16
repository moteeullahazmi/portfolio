"use client";
import { GitHubCalendar } from "react-github-calendar";

export function Github() {
  return (
    <section className="mt-10 space-y-3">
      <h2 className="text-xl font-semibold">Proof of Work</h2>

      <p className="text-zinc-400 text-sm">
        All the work I have done so far in public & people&apos;s appreciation
      </p>

      <div className="border border-zinc-800 rounded-lg p-3">
        <GitHubCalendar
          username="moteeullahazmi"
          blockSize={8}   // 👈 Laptop / Tablet fit
          blockMargin={1}
          fontSize={14}
        />
      </div>
    </section>
  );
}
