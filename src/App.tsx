import { MessageCircle } from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { whatsappLink } from '@/config/site';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Philosophy } from '@/components/sections/Philosophy';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello Medhstudio, I'd like to enquire about an interior design project.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-lg shadow-black/20 transition-all duration-500 hover:scale-110 hover:bg-[#17643d] animate-fade-in"
      aria-label="Chat with Medhstudio on WhatsApp"
      style={{ animationDelay: '1s' }}
    >
      <MessageCircle size={24} strokeWidth={1.6} />
    </a>
  );
}

function App() {
  useRevealOnScroll();

  return (
    <div className="relative min-h-screen bg-ivory overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Philosophy />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
