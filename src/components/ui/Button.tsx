import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'ghost-light' | 'whatsapp';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-wide uppercase transition-all duration-500 ease-out will-change-transform';

const variants: Record<Variant, string> = {
  solid: 'bg-charcoal text-ivory hover:bg-charcoal-soft shadow-sm',
  outline:
    'border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory',
  'ghost-light':
    'border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal backdrop-blur-xs',
  whatsapp: 'bg-[#1f7a4d] text-white hover:bg-[#17643d] shadow-sm',
};

const sizes: Record<Size, string> = {
  md: 'px-7 py-3.5 text-xs sm:text-sm',
  lg: 'px-9 py-4 text-sm sm:text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ variant = 'solid', size = 'md', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = 'solid', size = 'md', className = '', children, ...rest }: LinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

/** Editorial section eyebrow label with clean contrast and readable font size. */
export function Eyebrow({
  children,
  index,
  className = '',
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest text-taupe-dark ${className}`}
    >
      {index && <span className="font-serif text-lg font-bold text-taupe">{index}</span>}
      <span className="h-px w-8 bg-taupe/60" />
      <span>{children}</span>
    </span>
  );
}

/** Inline editorial link with an animated underline. */
export function LinkLine({
  href,
  onClick,
  children,
  className = '',
}: {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-charcoal ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-charcoal transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}
