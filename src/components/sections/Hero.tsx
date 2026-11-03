import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { heroImage, heroInset } from '@/data/projects';

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen w-full overflow-hidden bg-charcoal">
      {/* Background photograph with zoom effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern living space with bespoke finishes and warm natural lighting"
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        {/* Layered cinematic gradients for flawless contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[95vh] lg:min-h-screen max-w-editorial flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-24">
        {/* Editorial Pill & Studio Tag */}
        <div className="flex flex-wrap items-center gap-3 animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-ivory backdrop-blur-md border border-white/15">
            <Sparkles size={13} className="text-taupe-light" />
            Bespoke Architecture & Interiors
          </span>
          <span className="hidden sm:inline text-xs font-semibold uppercase tracking-widest text-ivory/70">
            Founded by Venkat
          </span>
        </div>

        {/* Headline — High impact, luxury editorial Cormorant Garamond */}
        <h1
          className="mt-6 max-w-5xl animate-fade-up font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.04] text-ivory text-balance"
          style={{ animationDelay: '0.12s' }}
        >
          Spaces That <span className="italic font-normal text-taupe-light">Feel Like You.</span>
        </h1>

        {/* Supporting text + CTAs */}
        <div
          className="mt-8 flex max-w-2xl animate-fade-up flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          style={{ animationDelay: '0.24s' }}
        >
          <p className="max-w-md text-base sm:text-lg text-ivory/85 leading-relaxed font-light">
            Beyond beautiful interiors, we orchestrate light, proportion and tactile natural materials shaped around how you actually live.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full sm:w-auto">
            <button
              onClick={() => scrollTo('#projects')}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-ivory px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal transition-all duration-500 hover:bg-white shadow-lg"
            >
              Explore Our Work
              <ArrowRight size={16} strokeWidth={2} />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 border border-ivory/40 bg-white/5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ivory backdrop-blur-xs transition-all duration-500 hover:border-ivory hover:bg-ivory hover:text-charcoal"
            >
              Discuss Your Project
            </button>
          </div>
        </div>

        {/* Signature Architecture Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-ivory/15 pt-8 sm:grid-cols-4 lg:max-w-4xl">
          <div>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-ivory">150+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ivory/60 font-sans">Bespoke Homes Crafted</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-ivory">10+ Yrs</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ivory/60 font-sans">Design & Execution</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-ivory">100%</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ivory/60 font-sans">Custom Millwork</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-ivory">45 Days</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ivory/60 font-sans">Precision Delivery</p>
          </div>
        </div>
      </div>

      {/* Secondary inset photograph — architectural detail, bottom-right */}
      <div className="absolute bottom-12 right-10 z-10 hidden w-52 overflow-hidden rounded-sm border border-ivory/20 shadow-2xl shadow-black/50 lg:block xl:w-60">
        <img
          src={heroInset}
          alt="Interior design material samples — wood, marble and textile finishes"
          className="aspect-[3/4] w-full object-cover img-lift"
          loading="lazy"
        />
        <div className="bg-charcoal/85 p-3 text-center backdrop-blur-xs">
          <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-ivory">
            Raw Material Palette
          </p>
        </div>
      </div>

      {/* Scroll indicator — bottom-left */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('#about');
        }}
        className="absolute bottom-8 left-1/2 z-10 hidden sm:flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/60 transition-colors hover:text-ivory"
        aria-label="Scroll to About"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <Compass size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
