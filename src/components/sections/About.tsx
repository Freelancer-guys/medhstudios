import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/ui/Button';
import { aboutImage } from '@/data/projects';

const principles = [
  {
    num: '01',
    title: 'Personal by nature',
    description: 'Bespoke layouts derived from your daily routines, rituals and lifestyle.',
  },
  {
    num: '02',
    title: 'Functional by design',
    description: 'Smart ergonomic circulation, intuitive storage and effortless maintenance.',
  },
  {
    num: '03',
    title: 'Timeless in detail',
    description: 'Authentic stone, warm timber and brass that age gracefully over time.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-ivory py-24 lg:py-36 border-b border-charcoal/5">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        {/* Eyebrow */}
        <Reveal>
          <Eyebrow index="01" className="mb-10">
            About Medhstudio
          </Eyebrow>
        </Reveal>

        {/* Editorial two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Large photograph */}
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xs shadow-xl shadow-black/5">
              <img
                src={aboutImage}
                alt="Bright, composed living room with bespoke furniture and natural light"
                className="aspect-[4/5] w-full object-cover img-lift"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xs bg-ivory/90 p-4 backdrop-blur-md">
                <p className="font-serif text-lg font-medium text-charcoal italic">
                  &ldquo;A space should feel like quiet luxury — never loud, always deeply personal.&rdquo;
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-taupe-dark">
                  Venkat · Founder & Principal Designer
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-taupe-dark">
              Medhstudio · Crafted for contemporary living
            </p>
          </Reveal>

          {/* Expressive typography */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal delay={80}>
              <h2 className="font-serif text-3xl font-medium leading-[1.12] text-charcoal text-balance sm:text-5xl lg:text-5xl">
                A home is more than a space. It&apos;s a physical reflection of the life within it.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-charcoal/80 font-normal">
                At Medhstudio Interiors, we believe design begins with empathy — listening to how you live, how you gather, and how you rest. We discard cookie-cutter catalog trends to engineer spaces that elevate your everyday rituals.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/70">
                From residential penthouses to boutique commercial studios across South India, every layout, finish, and custom joinery detail is orchestrated with architectural rigor and artisanal precision.
              </p>
            </Reveal>

            {/* Three principles — elegant horizontal composition */}
            <Reveal delay={240}>
              <div className="mt-12 grid grid-cols-1 overflow-hidden border-y border-charcoal/15 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/15">
                {principles.map((p) => (
                  <div key={p.num} className="group py-6 sm:px-6">
                    <span className="font-serif text-3xl font-semibold text-taupe transition-colors duration-500 group-hover:text-charcoal">
                      {p.num}
                    </span>
                    <h3 className="mt-2 text-base font-bold uppercase tracking-wider text-charcoal">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
