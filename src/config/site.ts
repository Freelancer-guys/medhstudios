/**
 * Central site configuration.
 * Replace the placeholder contact details below with the studio's verified
 * information. Every component reads from this object, so updates only need to
 * happen in one place.
 */
export const siteConfig = {
  name: 'MEDHSTUDIO',
  fullName: 'MEDHSTUDIO INTERIORS',
  founder: 'Venkat',
  tagline: 'The Art of Living',
  subtitle: 'Spaces That Feel Like You.',
  positioning:
    'Beyond beautiful interiors, we create thoughtful spaces shaped around the way you live.',
  instagram: {
    handle: '@medhstudiinteriors',
    url: 'https://www.instagram.com/medhstudiinteriors/',
  },
  contact: {
    phone: '+91 00000 00000',
    whatsapp: '910000000000', // digits only, country code prefix
    email: 'hello@medhstudiointeriors.com',
    address: '',
  },
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

/** Build a WhatsApp click-to-chat URL with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
