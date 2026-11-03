import { Instagram, MessageCircle } from 'lucide-react';
import { navItems, siteConfig, whatsappLink } from '@/config/site';

const footerServices = [
  'Full Residential Interiors',
  'Living & Bedroom Sanctuaries',
  'Modular Kitchens & Pantries',
  'Custom Furniture & Millwork',
  'Commercial & Studio Spaces',
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-editorial px-6 py-16 lg:px-10 lg:py-20">
        {/* Top — large brand statement */}
        <div className="border-b border-ivory/15 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="font-serif text-3xl sm:text-4xl font-bold tracking-tight"
            >
              MEDH<span className="text-taupe">STUDIO</span>
            </a>
            <p className="mt-3 font-serif text-xl sm:text-2xl font-light italic text-ivory/80">
              Thoughtful architecture. Meaningful living.
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest text-ivory/60 font-sans">
            Bangalore · Hyderabad · Chennai
          </div>
        </div>

        {/* Middle — links */}
        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-taupe-light">
              Navigate
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="text-sm sm:text-base text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-taupe-light">
              Design Practice
            </p>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#services');
                    }}
                    className="text-sm sm:text-base text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-taupe-light">
              Direct Channels
            </p>
            <div className="space-y-3">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm sm:text-base text-ivory/70 transition-colors hover:text-ivory"
              >
                <Instagram size={18} strokeWidth={1.8} />
                <span>{siteConfig.instagram.handle}</span>
              </a>
              <a
                href={whatsappLink("Hello Medhstudio, I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm sm:text-base text-ivory/70 transition-colors hover:text-ivory"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs sm:text-sm tracking-wide text-ivory/50">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm tracking-wide text-ivory/50">
            Bespoke Architecture & Interiors · Founded by {siteConfig.founder}
          </p>
        </div>
      </div>
    </footer>
  );
}
