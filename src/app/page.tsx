"use client";

import Hero from "@/view/Hero";
import Howorks from "@/view/Howorks";
import FAQ from "@/view/FAQ";
import Products from "@/view/Products";
import Contact from "@/view/contact";
import Footer from "@/view/Footer";
import { cn } from "@/lib/utils";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function page() {
  const dark = useSelector((state: RootState) => state.user.dark);

  return (
    <section
      className={cn(
        `max-h-screen overflow-x-hidden max-w-full bg-background text-foreground antialiased ${
          dark ? "dark" : "null"
        }`
      )}
    >
      <div className="flex flex-col items-center w-full max-sm:p-1">
        <Hero />
        <Howorks />
        <Products />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}
