import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/config/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace('#', ''));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ivory/95 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? 'border-b border-charcoal/10 shadow-[0_8px_30px_-12px_rgba(36,36,36,0.12)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-editorial items-center px-6 lg:px-10">
        {/* Logo — left */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="group flex flex-col justify-center"
          aria-label="Medhstudio — Home"
        >
          <span className="font-serif text-2xl font-bold tracking-tight text-charcoal">
            MEDH<span className="text-taupe">STUDIO</span>
          </span>
          <span className="text-[0.62rem] font-sans font-semibold uppercase tracking-[0.22em] text-taupe-dark">
            Interiors · Architecture
          </span>
        </a>

        {/* Nav — centered on desktop */}
        <nav className="mx-auto hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.href);
              }}
              className={`relative text-xs font-semibold uppercase tracking-wider transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-charcoal after:transition-all after:duration-500 ${
                active === item.href
                  ? 'text-charcoal after:w-full'
                  : 'text-charcoal/60 hover:text-charcoal after:w-0 hover:after:w-full'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA — right */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('#contact')}
            className="border border-charcoal/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-ivory"
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="ml-auto p-2 text-charcoal lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-charcoal/5 bg-ivory transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[calc(100vh-76px)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex max-h-[calc(100vh-76px)] flex-col overflow-y-auto px-6 pb-8 pt-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.href);
              }}
              className="border-b border-charcoal/8 py-4 font-serif text-2xl font-medium text-charcoal transition-colors hover:text-taupe"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-6 w-full bg-charcoal py-4 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-charcoal-soft"
          >
            Book a Consultation
          </button>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-taupe-dark">
            Instagram: {siteConfig.instagram.handle}
          </p>
        </nav>
      </div>
    </header>
  );
}
