import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/ui/Button';
import { philosophyImages } from '@/data/projects';

interface Principle {
  label: string;
  tagline: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}

const principles: Principle[] = [
  {
    label: 'Personality',
    tagline: 'Authentic Expression',
    title: 'Spaces must mirror the soul and rhythm of the people within them.',
    body: 'We begin with how you live — your morning tea ritual, your unwinding hours, how daylight enters your rooms. Design that ignores human habit is mere showroom staging.',
    image: philosophyImages.personality,
    alt: 'Warm, inviting corner with armchairs and architectural reading lamp',
  },
  {
    label: 'Function',
    tagline: 'Effortless Living',
    title: 'Every design choice must solve an everyday friction point.',
    body: 'A visually breathtaking room that fails in everyday storage, circulation or acoustic balance is an architectural failure. We engineer simplicity into the background so life feels calm.',
    image: philosophyImages.function,
    alt: 'Open-plan kitchen with clean ergonomic lines and seamless flow',
  },
  {
    label: 'Detail',
    tagline: 'Artisanal Tactility',
    title: 'Materials, lighting temperature and tactile finishes define endurance.',
    body: 'The timelessness of an interior lives in its micro-choices — the soft curve of an oak handrail, the thermal warmth of lime-wash plaster, the muted gleam of unlacquered brass.',
    image: philosophyImages.detail,
    alt: 'Curated architectural material samples including Italian marble and Belgian linen swatches',
  },
];

export function Philosophy() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ivory py-24 lg:py-36 border-b border-charcoal/5">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <Eyebrow index="04" className="mb-4">
              Our Core Philosophy
            </Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] text-charcoal text-balance">
              Beauty Is Only The Beginning.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-base sm:text-lg text-charcoal/70 leading-relaxed">
              We design homes as living sanctuaries — balancing visual restraint with deep tactile comfort.
            </p>
          </Reveal>
        </div>

        {/* Principle tabs */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Labels column */}
          <div className="lg:col-span-5">
            <div className="flex flex-col border-t border-charcoal/15 divide-y divide-charcoal/15">
              {principles.map((p, i) => (
                <button
                  key={p.label}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group py-6 text-left transition-all duration-300 ${
                    active === i ? 'pl-4 border-l-4 border-l-charcoal bg-charcoal/5 -ml-1 sm:ml-0' : 'hover:pl-2'
                  }`}
                  aria-label={p.label}
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-serif text-lg font-bold transition-colors duration-300 ${
                            active === i ? 'text-charcoal' : 'text-taupe'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-taupe-dark font-semibold">
                          {p.tagline}
                        </span>
                      </div>
                      <h3
                        className={`mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-medium transition-colors duration-300 ${
                          active === i ? 'text-charcoal' : 'text-charcoal/40 group-hover:text-charcoal/70'
                        }`}
                      >
                        {p.label}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider transition-opacity duration-300 ${
                        active === i ? 'text-charcoal opacity-100' : 'opacity-0'
                      }`}
                    >
                      Active →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active principle content */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[460px] rounded-xs overflow-hidden">
              {principles.map((p, i) => (
                <div
                  key={p.label}
                  className={`transition-all duration-500 ${
                    active === i
                      ? 'relative opacity-100 translate-y-0'
                      : 'pointer-events-none absolute inset-0 opacity-0 translate-y-4'
                  }`}
                >
                  <div className="overflow-hidden rounded-xs shadow-lg">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="aspect-[16/10] w-full object-cover img-lift"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-taupe-dark">
                      Pillar 0{i + 1} · {p.tagline}
                    </span>
                    <h4 className="mt-2 font-serif text-2xl sm:text-3xl font-medium leading-snug text-charcoal">
                      {p.title}
                    </h4>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/75">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
