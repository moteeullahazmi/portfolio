export function Header() {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Moteeullah Azmi
        </h1>
        <p className="mt-1 text-zinc-400">
        Full Stack Developer building ideas into scalable products.
        </p>
      </div>

      <img
        src="/me.jpeg"
        alt="Moteeullah Azmi"
        className="
          w-24 h-24
          rounded-full
          object-cover
          border border-zinc-700
          flex-shrink-0
        "
      />
    </section>
  );
}
