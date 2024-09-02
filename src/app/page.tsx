import Hero from '@/view/Hero';
import Navbar from '@/view/Navbar';
import Pricing from '@/view/Pricing';
import Newsletter from '@/view/Newsletter';
import Footer from '@/view/Footer';
import Review from '@/view/Review';

export default function page() {
  return (
    <div className='flex flex-col items-center w-full'>
      <Navbar />
      <main className='flex flex-col items-center justify-center py-20 h-full'>
        <Hero />
        <Pricing />
        <Newsletter />
        <Review />
        <Footer />
      </main>
    </div>
  );
}
