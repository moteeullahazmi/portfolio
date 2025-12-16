export function Work() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">Work</h2>

      <p className="text-zinc-600 dark:text-zinc-400">
        Selected projects and professional experience demonstrating real-world problem solving.
      </p>

      <div className="space-y-4">
        <div className="border rounded-lg p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
          <h3 className="font-semibold">Full Stack Web Applications</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            End-to-end development using React, Next.js, Node.js and databases,
            focusing on performance and scalability.
          </p>
        </div>

        <div className="border rounded-lg p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
          <h3 className="font-semibold">Open Source Contributions</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Active contributor to public repositories, collaborating with developers globally.
          </p>
        </div>
      </div>
    </section>
  );
}
