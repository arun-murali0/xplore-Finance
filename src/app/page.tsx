import Hero from "@/view/Hero";
import Howorks from "@/view/Howorks";

export default function page() {
  return (
    <div className="flex flex-col items-center w-full max-sm:p-1">
      <section>
        <Hero />
        <Howorks />
      </section>
    </div>
  );
}
