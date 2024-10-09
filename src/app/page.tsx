import Hero from "@/view/Hero";
import Howorks from "@/view/Howorks";
import FAQ from "@/view/FAQ";

export default function page() {
  return (
    <div className="flex flex-col items-center w-full max-sm:p-1">
      <section>
        <Hero />
        <Howorks />
        <FAQ />
      </section>
    </div>
  );
}
