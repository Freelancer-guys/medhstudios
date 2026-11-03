import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/ui/Button';

const steps = [
  {
    num: '01',
    title: 'Discovery & Vision',
    timeline: 'Week 1–2',
    body: 'In-depth lifestyle briefing, architectural site audit, aesthetic alignment and spatial zoning.',
  },
  {
    num: '02',
    title: 'Concept & 3D Flow',
    timeline: 'Week 3–4',
    body: 'Detailed 3D visualizations, photometric lighting simulations and mood board approvals.',
  },
  {
    num: '03',
    title: 'Material Engineering',
    timeline: 'Week 5–6',
    body: 'Sourcing natural stones, veneer selections, custom hardware specs and final cost schedule.',
  },
  {
    num: '04',
    title: 'Turnkey Handover',
    timeline: 'Execution',
    body: 'Precision on-site carpentry, quality assurance check, professional deep cleaning and styling handover.',
  },
];

export function Process() {
  return (
    <section className="bg-beige/60 py-24 lg:py-36 border-b border-charcoal/5 scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="mb-14">
          <Reveal>
            <Eyebrow index="05" className="mb-4">
              Our 4-Stage Execution
            </Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="max-w-3xl font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] text-charcoal text-balance">
              From First Sketch to Turnkey Handover.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-charcoal/70 leading-relaxed">
              Transparent, milestone-driven execution designed to keep you informed without the stress of managing contractors.
            </p>
          </Reveal>
        </div>

        {/* Horizontal timeline cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative rounded-xs bg-ivory/80 p-6 sm:p-7 shadow-xs border border-charcoal/10 transition-all duration-300 hover:shadow-md hover:bg-ivory"
            >
              <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
                <span className="font-serif text-2xl font-bold text-taupe group-hover:text-charcoal transition-colors">
                  {step.num}
                </span>
                <span className="rounded-full bg-charcoal/5 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                  {step.timeline}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl sm:text-2xl font-medium text-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
