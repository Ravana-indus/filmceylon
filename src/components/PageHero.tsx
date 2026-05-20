import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, accent, eyebrow }: PageHeroProps) {
  const words = title.split(' ');
  const lastWord = words.pop();
  const leadingWords = words.join(' ');

  return (
    <section className="min-h-[42svh] md:min-h-[50svh] pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 flex flex-col justify-end bg-[#F4F4F0]">
      {eyebrow && (
        <span className="mb-5 text-xs md:text-sm font-bold uppercase tracking-[0.24em] text-[#FF4A00]">
          {eyebrow}
        </span>
      )}
      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="max-w-6xl text-[clamp(3rem,11vw,7rem)] font-black uppercase tracking-tighter leading-[0.9]"
      >
        {accent ? (
          <>
            {leadingWords}{leadingWords ? ' ' : ''}
            <span className="text-[#FF4A00]">{lastWord}</span>
          </>
        ) : (
          title
        )}
      </motion.h1>

      {subtitle && (
        <p className="max-w-3xl text-base md:text-xl font-medium leading-snug mt-5 md:mt-7 text-neutral-600">
          {subtitle}
        </p>
      )}
    </section>
  );
}
