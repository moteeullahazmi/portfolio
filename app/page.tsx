import { Header } from "@/Components/Header";
import { Github } from "@/Components/Github";
import { Work } from "@/Components/Work";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        rounded-2xl px-6 py-8 space-y-14">
        <Header />
        <Github />
        <Work />
        <Footer />
      </div>
    </main>
  );
}
