import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/ui/Button';
import { serviceImages } from '@/data/projects';

interface Service {
  num: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
}

const services: Service[] = [
  {
    num: '01',
    title: 'Full Residential Interiors',
    description:
      'Complete turnkey interior design for luxury apartments, villas and penthouses — from spatial restructuring and bespoke joinery to curated soft furnishings.',
    deliverables: ['3D Photorealistic Visuals', 'Bespoke Millwork', 'Turnkey Project Execution'],
    image: serviceImages[0],
  },
  {
    num: '02',
    title: 'Living & Bedroom Sanctuaries',
    description:
      'Harmonious, quiet-luxury spaces tailored for daily comfort, ambient lighting scenarios, acoustic warmth and timeless elegance.',
    deliverables: ['Custom Wardrobes', 'Acoustic Wall Paneling', 'Mood Lighting Engineering'],
    image: serviceImages[1],
  },
  {
    num: '03',
    title: 'German & Italian Modular Kitchens',
    description:
      'High-performance culinary studios pairing European hardware and Blum motion fittings with heat-resistant sintered stone surfaces and concealed pantries.',
    deliverables: ['Quartz / Sintered Stone', 'Integrated Appliances', 'Lifetime Hardware Warranty'],
    image: serviceImages[2],
  },
  {
    num: '04',
    title: 'Custom Furniture & Joinery',
    description:
      'Artisanal furniture, fluted timber dividers, architectural credenzas and vanity units hand-crafted to fit every millimeter of your floor plan.',
    deliverables: ['Hand-picked Veneers', 'Solid Hardwood Detailing', 'Brushed Brass Inlays'],
    image: serviceImages[3],
  },
  {
    num: '05',
    title: 'Boutique Commercial & Studio Spaces',
    description:
      'High-impact executive lounges, boutique offices, experience centers and cafes designed to inspire productivity and convey brand prestige.',
    deliverables: ['Brand Spatial Identity', 'Ergonomic Zoning', 'Commercial Grade Finishes'],
    image: serviceImages[4],
  },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-charcoal py-24 text-ivory lg:py-36 scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14">
          <Reveal>
            <Eyebrow index="03" className="mb-4 text-taupe-light">
              Design Capabilities
            </Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="max-w-3xl font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] text-ivory text-balance">
              Engineered With Precision. Styled With Restraint.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-ivory/70 leading-relaxed">
              We manage the entire lifecycle from early blueprints and material sourcing through on-site carpentry, finishing and white-glove handover.
            </p>
          </Reveal>
        </div>

        {/* Interactive list + image */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Numbered list */}
          <div className="lg:col-span-7">
            <div className="border-t border-ivory/15 divide-y divide-ivory/15">
              {services.map((service, i) => (
                <div key={service.num}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-start gap-6 py-6 text-left transition-all duration-300 ${
                      active === i ? 'text-ivory' : 'text-ivory/50 hover:text-ivory/80'
                    }`}
                    aria-label={service.title}
                  >
                    <span
                      className={`font-serif text-3xl font-semibold transition-colors duration-300 ${
                        active === i ? 'text-taupe-light' : 'text-ivory/30'
                      }`}
                    >
                      {service.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium">
                          {service.title}
                        </h3>
                        <ArrowRight
                          size={20}
                          className={`shrink-0 transition-transform duration-300 ${
                            active === i ? 'translate-x-0 text-taupe-light opacity-100' : '-translate-x-2 text-ivory/20 opacity-0 lg:opacity-50'
                          }`}
                        />
                      </div>
                      <p
                        className={`mt-3 text-base sm:text-lg leading-relaxed text-ivory/75 transition-all duration-300 ${
                          active === i ? 'block' : 'hidden lg:block lg:opacity-60'
                        }`}
                      >
                        {service.description}
                      </p>
                      {active === i && (
                        <div className="mt-4 flex flex-wrap gap-2 animate-fade-in">
                          {service.deliverables.map((del) => (
                            <span
                              key={del}
                              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-ivory/90 border border-white/10"
                            >
                              <CheckCircle2 size={13} className="text-taupe-light" />
                              {del}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-ivory px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal transition-all duration-500 hover:bg-white shadow-lg"
              >
                Discuss Scope & Estimates
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Hover image panel — sticky on desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-xs shadow-2xl border border-ivory/10">
                {services.map((service, i) => (
                  <img
                    key={service.num}
                    src={service.image}
                    alt={`${service.title} — interior by Medhstudio`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                      active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                    loading="lazy"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-taupe-light">
                    Featured Capability
                  </span>
                  <p className="mt-1 font-serif text-xl sm:text-2xl font-medium text-ivory">
                    {services[active].num} · {services[active].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
