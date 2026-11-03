import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Images, MapPin } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/ui/Button';
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from '@/data/projects';

function spanClass(span: Project['span']): string {
  switch (span) {
    case 'feature':
      return 'sm:col-span-2 sm:row-span-2';
    case 'tall':
      return 'sm:row-span-2';
    case 'wide':
      return 'sm:col-span-2';
    default:
      return '';
  }
}

function aspectClass(span: Project['span']): string {
  switch (span) {
    case 'feature':
      return 'aspect-[4/3] sm:aspect-auto sm:h-full';
    case 'tall':
      return 'aspect-[3/4] sm:aspect-auto sm:h-full';
    case 'wide':
      return 'aspect-[16/9] sm:aspect-[2/1]';
    default:
      return 'aspect-[4/3]';
  }
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  // Compute item counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projectCategories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <section id="projects" className="bg-ivory pt-28 pb-24 lg:pt-36 lg:pb-36 scroll-mt-20 sm:scroll-mt-24 border-b border-charcoal/5">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        {/* Heading row */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow index="02" className="mb-4">
                Curated Portfolio
              </Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-serif text-3xl font-medium leading-[1.08] text-charcoal text-balance sm:text-5xl lg:text-6xl">
                Every Space Tells a Story.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-base sm:text-lg leading-relaxed text-charcoal/70">
              A curated selection of private residences, penthouse suites and creative commercial spaces crafted with uncompromising architectural detail.
            </p>
          </Reveal>
        </div>

        {/* Filter row — High-end luxury pill badges with horizontal scroll on mobile */}
        <div className="mb-10 overflow-x-auto hide-scrollbar py-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-max">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? 'bg-charcoal text-ivory shadow-md shadow-charcoal/20 scale-[1.02]'
                    : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10 hover:text-charcoal'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[0.7rem] px-2 py-0.5 rounded-full font-medium ${
                    filter === cat
                      ? 'bg-white/20 text-ivory'
                      : 'bg-charcoal/10 text-charcoal/60'
                  }`}
                >
                  {categoryCounts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial asymmetric grid — 100% visible on filter change */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:auto-rows-[320px] lg:grid-cols-3 lg:gap-6">
          {filtered.map((project) => (
            <div
              key={`${filter}-${project.id}`}
              className={`${spanClass(project.span)} animate-fade-in group relative block h-full w-full overflow-hidden rounded-xs text-left bg-charcoal/5 shadow-sm`}
            >
              <button
                onClick={() => setActiveProject(project)}
                className="relative block h-full w-full overflow-hidden text-left focus:outline-hidden"
                aria-label={`View ${project.title} — ${project.category}`}
              >
                <div className={`overflow-hidden ${aspectClass(project.span)} h-full w-full`}>
                  <img
                    src={project.images[0]}
                    alt={`${project.category} — ${project.title} interior design by Medhstudio`}
                    className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>

                {/* Layered high-contrast gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Top badges: photo count & location */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ivory backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                  {project.location && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-charcoal/60 px-3 py-1 text-xs font-medium text-ivory/90 backdrop-blur-md border border-white/10">
                      <MapPin size={12} className="text-taupe-light" />
                      {project.location}
                    </span>
                  )}
                </div>

                {/* Bottom title & Action Button */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-taupe-light font-sans font-medium">
                        {project.images.length} Curated Photographs
                      </p>
                      <h3 className="mt-1 font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-ivory leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/40 bg-charcoal/40 text-ivory backdrop-blur-xs transition-all duration-500 group-hover:border-ivory group-hover:bg-ivory group-hover:text-charcoal group-hover:scale-105">
                      <ArrowUpRight size={18} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-3 sm:p-6 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
    >
      <button
        className="absolute right-3 top-3 sm:right-6 sm:top-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/80 text-ivory border border-white/20 transition-all hover:bg-white hover:text-charcoal"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X size={24} strokeWidth={2} />
      </button>

      <div
        className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xs bg-black/40">
          <img
            src={project.images[index]}
            alt={`${project.category} interior — view ${index + 1} of ${total}`}
            className="max-h-[55vh] sm:max-h-[72vh] w-full object-contain sm:object-cover"
          />
          {total > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/70 text-ivory border border-white/15 transition-all hover:bg-white hover:text-charcoal"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/70 text-ivory border border-white/15 transition-all hover:bg-white hover:text-charcoal"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-1">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-taupe-light font-semibold">
                {project.category}
              </span>
              {project.location && (
                <span className="text-xs uppercase tracking-widest text-ivory/60">
                  · {project.location}
                </span>
              )}
            </div>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-medium text-ivory">{project.title}</h3>
          </div>
          {total > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-12 w-16 sm:h-14 sm:w-20 shrink-0 overflow-hidden rounded-xs border-2 transition-all ${
                    i === index ? 'border-taupe scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
