import Hero from "@/view/Hero";
import Howorks from "@/view/Howorks";
import FAQ from "@/view/FAQ";
import Products from "@/view/Products";
import Contact from "@/view/contact";

export default function page() {
  return (
    <div className="flex flex-col items-center w-full max-sm:p-1">
      <Hero />
      <Howorks />
      <Products />
      <FAQ />
      <Contact />
    </div>
  );
}
