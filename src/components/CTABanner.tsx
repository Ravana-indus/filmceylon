import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'light' | 'dark';
}

export default function CTABanner({
  headline,
  description,
  buttonText,
  buttonHref,
  variant = 'light',
}: CTABannerProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`py-32 px-6 md:px-12 text-center flex flex-col items-center ${
        isDark ? 'bg-neutral-950 text-[#F4F4F0]' : 'bg-[#F4F4F0] text-neutral-950'
      }`}
    >
      <h2 className="text-[12vw] md:text-[7vw] font-black uppercase tracking-tighter leading-[0.85] mb-8">
        {headline}
      </h2>

      <p
        className={`max-w-2xl text-xl md:text-2xl font-medium mb-12 ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}
      >
        {description}
      </p>

      <Link
        to={buttonHref}
        className={`inline-flex items-center gap-2 rounded-full px-10 md:px-12 py-5 md:py-6 text-xl font-black uppercase tracking-tighter transition-colors ${
          isDark
            ? 'bg-[#FF4A00] text-white hover:bg-white hover:text-neutral-950'
            : 'bg-neutral-950 text-white hover:bg-[#FF4A00]'
        }`}
      >
        {buttonText}
        <ArrowUpRight className="size-6" />
      </Link>
    </section>
  );
}
