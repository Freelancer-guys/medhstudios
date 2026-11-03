import { useState, type FormEvent } from 'react';
import { ArrowRight, MessageCircle, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/ui/Button';
import { siteConfig, whatsappLink } from '@/config/site';

const propertyTypes = ['Apartment', 'Independent House', 'Villa', 'Penthouse', 'Commercial Space'];
const serviceTypes = [
  'Full Home Interior',
  'Living & Bedroom',
  'Modular Kitchen',
  'Custom Furniture & Storage',
  'Commercial Interior',
];
const budgets = ['Under 10L', '10L – 25L', '25L – 50L', '50L+', 'Not sure yet'];

const fields = [
  { name: 'fullName', label: 'Your Full Name', type: 'text', placeholder: 'e.g. Rahul Sharma', required: true, full: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true, full: false },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@example.com', required: true, full: false },
  { name: 'location', label: 'City / Neighborhood', type: 'text', placeholder: 'e.g. Bangalore, Indiranagar', required: false, full: false },
  { name: 'propertyType', label: 'Property Type', type: 'select', placeholder: 'Select Property', required: false, full: false, options: propertyTypes },
  { name: 'service', label: 'Primary Service', type: 'select', placeholder: 'Select Service', required: false, full: false, options: serviceTypes },
  { name: 'budget', label: 'Expected Budget Range', type: 'select', placeholder: 'Select Budget', required: false, full: false, options: budgets },
] as const;

type FormState = Record<string, string>;

export function Contact() {
  const [form, setForm] = useState<FormState>({});
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const update = (name: string, value: string) => setForm((f) => ({ ...f, [name]: value }));

  const buildWhatsAppMessage = () => {
    const parts = [
      `Hello Medhstudio, I'd like to enquire about an interior design project.`,
      form.fullName ? `Name: ${form.fullName}` : '',
      form.phone ? `Phone: ${form.phone}` : '',
      form.email ? `Email: ${form.email}` : '',
      form.propertyType ? `Property: ${form.propertyType}` : '',
      form.service ? `Service: ${form.service}` : '',
      form.budget ? `Budget: ${form.budget}` : '',
      form.location ? `Location: ${form.location}` : '',
      form.description ? `Notes: ${form.description}` : '',
    ].filter(Boolean);
    return parts.join('\n');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <section id="contact" className="bg-ivory py-24 lg:py-36 scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        {/* Magazine-style heading */}
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <Eyebrow index="06" className="mb-4">
              Direct Enquiry
            </Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] text-charcoal text-balance">
              Let&apos;s Create Something That Truly Feels Like Home.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/70">
              Share details of your space, timeline and expectations. Our senior design team will prepare initial recommendations and schedule a consultation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-8 rounded-xs bg-white/70 p-7 sm:p-10 border border-charcoal/10 shadow-xs">
            <h3 className="font-serif text-2xl font-medium text-charcoal mb-6 border-b border-charcoal/10 pb-4">
              Project Brief
            </h3>
            <form onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/70"
                    >
                      {field.label}
                      {field.required && <span className="text-taupe-dark"> *</span>}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={form[field.name] ?? ''}
                        onChange={(e) => update(field.name, e.target.value)}
                        className="w-full border-b-2 border-charcoal/20 bg-transparent py-3 text-base text-charcoal outline-hidden transition-colors focus:border-charcoal"
                      >
                        <option value="">{field.placeholder}</option>
                        {('options' in field ? field.options : []).map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={form[field.name] ?? ''}
                        onChange={(e) => update(field.name, e.target.value)}
                        className="w-full border-b-2 border-charcoal/20 bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/40 outline-hidden transition-colors focus:border-charcoal"
                      />
                    )}
                  </div>
                ))}

                {/* Project description */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/70"
                  >
                    Project Vision & Timelines
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="Tell us about the property, floor area, design inspirations, and desired handover date."
                    value={form['description'] ?? ''}
                    onChange={(e) => update('description', e.target.value)}
                    className="w-full resize-none border-b-2 border-charcoal/20 bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/40 outline-hidden transition-colors focus:border-charcoal"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-charcoal px-9 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ivory transition-all duration-500 hover:bg-charcoal-soft shadow-md"
                >
                  Submit Consultation Request
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              </div>

              {status === 'submitted' && (
                <div className="mt-6 rounded-xs bg-[#1f7a4d]/10 border border-[#1f7a4d]/30 p-4 text-sm text-[#14532d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-[#1f7a4d] shrink-0" />
                    <span>Thank you! Your project details have been noted.</span>
                  </div>
                  <a
                    href={whatsappLink(buildWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs bg-[#1f7a4d] text-white px-4 py-2 rounded-xs shadow-xs hover:bg-[#17643d]"
                  >
                    <MessageCircle size={14} /> Send via WhatsApp →
                  </a>
                </div>
              )}
            </form>
          </div>

          {/* Contact details + WhatsApp */}
          <div className="lg:col-span-4">
            <div className="rounded-xs bg-beige/40 p-7 sm:p-8 border border-charcoal/10">
              <span className="text-xs font-semibold uppercase tracking-widest text-taupe-dark">Direct Studio Channels</span>
              <div className="mt-6 space-y-6">
                <ContactRow icon={<Phone size={18} strokeWidth={1.8} />} label="Call Us">
                  {siteConfig.contact.phone}
                </ContactRow>
                <ContactRow icon={<Mail size={18} strokeWidth={1.8} />} label="Official Email">
                  {siteConfig.contact.email}
                </ContactRow>
                {siteConfig.contact.address && (
                  <ContactRow icon={<MapPin size={18} strokeWidth={1.8} />} label="Studio Location">
                    {siteConfig.contact.address}
                  </ContactRow>
                )}
              </div>

              <div className="mt-8 border-t border-charcoal/10 pt-6">
                <p className="text-xs text-charcoal/70 mb-3">
                  Prefer instant messaging? Chat directly with Principal Designer Venkat:
                </p>
                <a
                  href={whatsappLink("Hello Medhstudio, I'd like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 bg-[#1f7a4d] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-500 hover:bg-[#17643d] shadow-sm"
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  Instant WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory border border-charcoal/15 text-charcoal shadow-xs">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-taupe-dark">{label}</p>
        <p className="mt-0.5 text-sm sm:text-base font-medium text-charcoal">{children}</p>
      </div>
    </div>
  );
}
