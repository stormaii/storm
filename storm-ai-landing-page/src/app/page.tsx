import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import CallToAction from '@/components/ui/CallToAction';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
