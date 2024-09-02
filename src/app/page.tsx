import Hero from '@/view/Hero';
import Navbar from '@/view/Navbar';
import Pricing from '@/view/Pricing';
import Newsletter from '@/view/newsletter';
import Footer from "@/view/Footer"

export default function page() {
  return (
    <div className='flex flex-col items-center w-full'>
      <Navbar />
      <main className='flex flex-col items-center justify-center py-20 h-full'>
        <Hero />
        <Pricing />
        <Newsletter />
        <Footer/>
      </main>
    </div>
  );
}
