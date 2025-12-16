export function Work() {
  return (
    <section className="space-y-8">
      {/* SECTION HEADING */}
      <div>
        <br />
        <h2 className="text-xl font-semibold">Experience</h2>
        <p className="mt-2 text-zinc-400 max-w-xl">
          Real-world freelance and independent projects where I designed and
          developed complete web solutions for businesses.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="space-y-8">

        {/* PROJECT 1 */}
        <a
          href="https://azmiindustries.in"
          target="_blank"
          rel="noreferrer"
          className="
            group block border rounded-2xl overflow-hidden
            hover:shadow-lg transition
          "
        >
          <img
            src="/azmiindustries.png"
            alt="Azmi Industries Website"
            className="
              w-full h-52 object-cover
              group-hover:scale-105 transition-transform duration-300
            "
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold text-zinc-400">
              Azmi Industries — Business Website
            </h3>

            <p className="mt-2 text-sm text-zinc-600">
              Designed and developed a professional business website to showcase
              products, services, and company information with a clean,
              conversion-focused layout.
            </p>

            <p className="mt-3 text-sm text-zinc-300">
              <span className="font-medium ">Tech:</span>{" "}
              Next.js, Tailwind CSS
            </p>
          </div>
        </a>

        {/* PROJECT 2 */}
        <a
          href="https://azmielectricals.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="
            group block border rounded-2xl overflow-hidden
            hover:shadow-lg transition
          "
        >
          <img
            src="/azmielectricals.png"
            alt="Azmi Electricals Website"
            className="
              w-full h-52 object-cover
              group-hover:scale-105 transition-transform duration-300
            "
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold text-zinc-400">
              Azmi Electricals — Shop & Services Website
            </h3>

            <p className="mt-2 text-sm text-zinc-600">
              Built a responsive multi-page shop website including Home, About,
              and Contact sections for a local business to establish an online
              presence.
            </p>

            <p className="mt-3 text-sm text-zinc-300">
              <span className="font-medium">Tech:</span>{" "}
              Next.js, Tailwind CSS
            </p>
          </div>
        </a>

        {/* PROJECT 3 */}
        <a
          href="https://altajeer.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="
            group block border rounded-2xl overflow-hidden
            hover:shadow-lg transition
          "
        >
          <img
            src="/altajeer.png"
            alt="E-commerce Platform"
            className="
              w-full h-52 object-cover
              group-hover:scale-105 transition-transform duration-300
            "
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold text-zinc-400">
              Full E-commerce Platform — Admin Dashboard
            </h3>

            <p className="mt-2 text-sm text-zinc-600">
              Developed a complete e-commerce platform with product management,
              authentication, and an admin dashboard to manage orders and
              inventory.
            </p>

            <p className="mt-3 text-sm text-zinc-300">
              <span className="font-medium">Tech:</span>{" "}
              React, Node.js, MongoDB, Admin Panel
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}
