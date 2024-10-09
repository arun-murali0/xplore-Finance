import Hero from "@/view/Hero";
import Footer from "@/view/Footer";
import FAQ from "@/view/FAQ";

export default function page() {
  return (
    <div className="flex flex-col items-center w-full max-sm:p-1">
      <main className="flex flex-col items-center justify-center py-20 h-full max-md:m-auto">
        <Hero />
        {/* <FAQ /> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
