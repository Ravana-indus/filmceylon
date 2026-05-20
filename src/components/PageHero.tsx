import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export default function PageHero({ title, subtitle, accent }: PageHeroProps) {
  const words = title.split(' ');
  const lastWord = words.pop();
  const leadingWords = words.join(' ');

  return (
    <section className="min-h-[60svh] pt-40 pb-20 px-6 md:px-12 flex flex-col justify-end bg-[#F4F4F0]">
      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="text-[13vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85]"
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
        <p className="max-w-2xl text-xl md:text-2xl font-medium leading-snug mt-8 text-neutral-600">
          {subtitle}
        </p>
      )}
    </section>
  );
}
