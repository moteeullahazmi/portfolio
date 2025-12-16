import { Header } from "@/Components/Header";
import { Github } from "@/Components/Github";
import { Work } from "@/Components/Work";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      {/* SINGLE PROFESSIONAL BOX */}
      <div
        className="
          w-full max-w-xl
          border border-zinc-800
          px-5 py-6
        "
      >
        <Header />
        <Github />
        <Work />
        <Footer />
      </div>
    </main>
  );
}
