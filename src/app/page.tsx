import Hero from "@/view/Hero";
import Navbar from "@/view/Navbar";
import Pricing from "@/view/Pricing";
import Newsletter from "@/view/Newsletter";
import Footer from "@/view/Footer";
import Review from "@/view/Review";
import FAQ from "@/view/FAQ";
import Products from "@/view/Product";

export default function page() {
  return (
    <div className="flex flex-col items-center w-full max-sm:p-1">
      <main className="flex flex-col items-center justify-center py-20 h-full max-md:m-auto">
        <Hero />
        <Products />
        <Pricing />
        <FAQ />
        <Review />
        {/* <Newsletter /> */}
        <Footer />
      </main>
    </div>
  );
}
