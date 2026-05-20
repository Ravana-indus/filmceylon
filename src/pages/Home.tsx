import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MapPin, Shield, Globe, Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const ease = [0.76, 0, 0.24, 1] as const;
const showcaseVideo =
  'https://player.vimeo.com/external/403847748.sd.mp4?s=d04e57813a1a9e5db4d5fa3f044bb4f590b14643&profile_id=165&oauth2_token_id=57447761';
const showcasePoster =
  'https://images.pexels.com/photos/32398208/pexels-photo-32398208.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600';

const audienceDesks = [
  {
    title: 'Indian Cinema',
    market: 'Kollywood, Bollywood, Tollywood',
    link: '/indian-film-desk',
    image: 'https://images.pexels.com/photos/36847090/pexels-photo-36847090.jpeg',
    intro: 'Fast-moving overseas schedules, song shoots, action inserts and star-led logistics.',
    shoots: ['Songs & montages', 'Second unit', 'Action inserts'],
    support: ['Tamil-speaking coordination', 'Crowd & permit handling', 'Hotels, vehicles, extras'],
  },
  {
    title: 'Hollywood',
    market: 'US studios, streamers',
    link: '/hollywood',
    image: 'https://images.pexels.com/photos/8088386/pexels-photo-8088386.jpeg',
    intro: 'Structured line production, second-unit support and controlled compliance workflows.',
    shoots: ['Second unit', 'Scenic plates', 'Studio-backed documentary work'],
    support: ['Risk & release paperwork', 'Secure logistics', 'Crew and vendor oversight'],
  },
  {
    title: 'Europe',
    market: 'Docs, campaigns, factual TV',
    link: '/europe',
    image: 'https://images.pexels.com/photos/11677392/pexels-photo-11677392.jpeg',
    intro: 'Transparent budgeting, documentary access, and field-ready local coordination.',
    shoots: ['Public broadcast docs', 'Commercials', 'Art-house features'],
    support: ['Research & interview access', 'Auditable accounting', 'Trilingual field crews'],
  },
  {
    title: 'North America',
    market: 'Indies, streamers, diaspora stories',
    link: '/europe',
    image: 'https://images.pexels.com/photos/32398194/pexels-photo-32398194.jpeg',
    intro: 'Sri Lanka execution for compact crews that still need high communication standards.',
    shoots: ['Streaming docs', 'Music videos', 'Independent features'],
    support: ['Remote producer support', 'Location packs', 'Daily reporting & safety'],
  },
];

function WhySriLankaContent() {
  return (
    <section className="h-screen py-12 md:py-16 px-6 md:px-12 bg-[#F4F4F0] relative z-10 flex items-center">
      <div className="w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] break-words">
            Why <br className="sm:hidden" />
            <span className="text-[#FF4A00]">Sri Lanka?</span>
          </h2>
          <div className="text-base md:text-xl font-medium leading-relaxed flex flex-col gap-5 md:gap-6">
            <p>
              Sri Lanka is one of South Asia's most versatile filming destinations. Within a few hours, a production
              can move from beaches to tea mountains, from colonial streets to modern cityscapes, from temples to
              fishing villages, from luxury resorts to wild landscapes.
            </p>
            <p>
              For international producers, this means more visual value, shorter internal travel, strong cultural
              variety and cost-effective production possibilities.
            </p>
            <Link
              to="/locations"
              className="text-[#FF4A00] font-black uppercase tracking-tight flex items-center gap-2 group w-fit"
            >
              Explore Locations <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-wrap gap-2.5 md:gap-3">
          {[
            'Beaches', 'Tea Estates', 'Railways', 'Colonial Towns', 'Luxury Resorts',
            'Temples', 'Jungles', 'Fishing Villages', 'Urban Colombo', 'Jaffna',
            'Galle Fort', 'Ella', 'Trincomalee', 'Kandy',
          ].map((loc) => (
            <span
              key={loc}
              className="border-2 border-neutral-300 rounded-full px-4 md:px-5 py-2.5 font-bold uppercase tracking-tight text-xs hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors cursor-default flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5" /> {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxVideoReveal() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const clipOpacity = useTransform(scrollYProgress, [0, 0.55, 0.85], [1, 1, 0]);
  const clipY = useTransform(scrollYProgress, [0, 0.85], ['0%', '-100%']);
  const clipScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.05]);

  return (
    <>
      {/* Mobile Stacked Layout (Clean scrolling & fully visible content) */}
      <div className="block md:hidden px-6 mb-16">
        {/* Rounded Video Section */}
        <div className="relative h-[40vh] w-full overflow-hidden bg-neutral-950 rounded-[2rem] shadow-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={showcasePoster}
            className="absolute inset-0 w-full h-full object-cover contrast-125 brightness-75"
            aria-label="Sri Lanka production location footage"
          >
            <source src={showcaseVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-950/20" />
        </div>

        {/* Why Sri Lanka Content */}
        <div className="py-12 bg-[#F4F4F0]">
          <div className="w-full">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.85] break-words mb-6">
              Why <br />
              <span className="text-[#FF4A00]">Sri Lanka?</span>
            </h2>
            <div className="text-base font-medium leading-relaxed flex flex-col gap-5">
              <p>
                Sri Lanka is one of South Asia's most versatile filming destinations. Within a few hours, a production
                can move from beaches to tea mountains, from colonial streets to modern cityscapes, from temples to
                fishing villages, from luxury resorts to wild landscapes.
              </p>
              <p>
                For international producers, this means more visual value, shorter internal travel, strong cultural
                variety and cost-effective production possibilities.
              </p>
              <Link
                to="/locations"
                className="text-[#FF4A00] font-black uppercase tracking-tight flex items-center gap-2 group w-fit mt-2"
              >
                Explore Locations <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                'Beaches', 'Tea Estates', 'Railways', 'Colonial Towns', 'Luxury Resorts',
                'Temples', 'Jungles', 'Fishing Villages', 'Urban Colombo', 'Jaffna',
                'Galle Fort', 'Ella', 'Trincomalee', 'Kandy',
              ].map((loc) => (
                <span
                  key={loc}
                  className="border-2 border-neutral-300 rounded-full px-4 py-2 font-bold uppercase tracking-tight text-xs hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors cursor-default flex items-center gap-2 bg-white"
                >
                  <MapPin className="w-3.5 h-3.5" /> {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Parallax Layout (Beautiful full-screen reveal with rounded corners) */}
      <div ref={container} className="hidden md:block relative h-[220vh] bg-[#F4F4F0]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <WhySriLankaContent />
        </div>
        <motion.div
          style={{ opacity: clipOpacity, y: clipY, scale: clipScale }}
          className="sticky top-0 -mt-[100vh] h-screen w-full z-30 overflow-hidden bg-neutral-950 rounded-[5rem]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={showcasePoster}
            className="absolute inset-0 w-full h-full object-cover contrast-125 brightness-75"
            aria-label="Sri Lanka production location footage"
          >
            <source src={showcaseVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-950/20" />
        </motion.div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      {/* ── Hero ── */}
      <section className="relative h-[100svh] px-6 pb-8 pt-20 md:px-12 md:pb-10 md:pt-24 overflow-hidden bg-neutral-950 text-white rounded-b-[3rem] md:rounded-b-[5rem]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={showcasePoster}
            className="w-full h-full object-cover opacity-35 grayscale contrast-125 brightness-[0.4]"
          >
            <source src={showcaseVideo} type="video/mp4" />
          </video>
          {/* Subtle gradient vignette to blend top, bottom, and edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 max-w-2xl text-[11px] sm:text-sm font-bold uppercase tracking-[0.26em] text-[#FF4A00]">
              Sri Lanka line production for films, documentaries, commercials and music videos
            </p>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="max-w-4xl text-[clamp(4.2rem,12.6vw,9.45rem)] font-black uppercase tracking-tighter leading-[0.9]"
            >
              Local access.
              <br />
              International
              <br />
              <span className="text-[#FF4A00]">standards.</span>
            </motion.h1>
          </div>

          <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-6">
            <div className="max-w-xl">
              <p className="text-base md:text-xl font-medium leading-snug text-neutral-300">
                Local permits, locations, crew, logistics and budgeting for international productions filming in Sri Lanka.
              </p>
            </div>
            <div className="flex w-full md:w-auto flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-[#FF4A00] text-white rounded-full px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase tracking-tight hover:bg-white hover:text-neutral-950 transition-colors flex items-center justify-center gap-3 group shrink-0"
              >
                Request Production Estimate <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/locations"
                className="border-2 border-white text-white rounded-full px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase tracking-tight hover:bg-white hover:text-neutral-950 transition-colors shrink-0 text-center"
              >
                Scout Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10 md:h-16 bg-[#F4F4F0]" />

      {/* ── Production Desks ── */}
      <section className="bg-neutral-950 text-[#F4F4F0] pt-20 pb-24 md:pt-24 md:pb-32 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 md:mb-18 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-end">
            <div>
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.26em] text-[#FF4A00]">
                Production desks
              </span>
              <h2 className="max-w-4xl text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                Choose by <span className="text-[#FF4A00]">workflow</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg md:text-xl text-neutral-400 font-medium leading-relaxed">
              Different producers need different operating rhythms. Pick the desk that matches your market, schedule pressure, paperwork standard and shooting style.
            </p>
          </div>

          <div className="border-y border-neutral-800">
            {audienceDesks.map((item, index) => (
              <Link
                to={item.link}
                key={item.title}
                className="group grid gap-6 border-b border-neutral-800 py-7 transition-colors last:border-b-0 hover:border-[#FF4A00] md:grid-cols-[92px_minmax(0,1.1fr)_minmax(260px,0.9fr)_auto] md:items-center md:gap-8"
              >
                <div className="flex items-center gap-4 md:block">
                  <span className="block text-xl font-black text-[#FF4A00]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative h-20 w-28 overflow-hidden rounded-xl bg-neutral-900 md:mt-5 md:h-24 md:w-full">
                    <img
                      src={`${item.image}?auto=compress&cs=tinysrgb&fit=crop&w=600`}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-neutral-950/20" />
                  </div>
                </div>

                <div>
                  <span className="mb-3 inline-flex rounded-full border border-neutral-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    {item.market}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white transition-colors group-hover:text-[#FF4A00]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-neutral-400">
                    {item.intro}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF4A00]">
                      Common shoots
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.shoots.map((shoot) => (
                        <span
                          key={shoot}
                          className="rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-tight text-neutral-300"
                        >
                          {shoot}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF4A00]">
                      We handle
                    </span>
                    <ul className="space-y-2">
                      {item.support.map((support) => (
                        <li key={support} className="text-sm font-medium leading-snug text-neutral-300">
                          {support}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-white md:justify-end">
                  Open desk
                  <ArrowUpRight className="h-5 w-5 text-[#FF4A00] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-32 px-6 md:px-12 bg-neutral-950 text-white rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl relative z-20">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Main
            <br />
            <span className="text-[#FF4A00]">Services</span>
          </h2>
          <Link
            to="/services"
            className="border-2 border-white text-white rounded-full px-8 py-4 font-bold uppercase tracking-tight hover:bg-white hover:text-neutral-950 transition-colors flex items-center gap-3 group shrink-0"
          >
            Explore Service Scope <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {[
            'Film permits & official coordination',
            'Location scouting across Sri Lanka',
            'Line production & budgeting',
            'Local crew hiring & Fixers',
            'Casting, extras & talent coordination',
            'Transport, hotels & catering',
            'Equipment rental & technical crew',
            'Drone & aerial filming coordination',
            'Security, crowd control & VIP handling',
            'Production accounting & daily reports',
            'Remote production support',
          ].map((service, i) => (
            <div
              key={i}
              className="border-t-2 border-neutral-800 pt-6 flex items-start gap-6 group hover:border-[#FF4A00] transition-colors cursor-default"
            >
              <div className="text-[#FF4A00] font-black text-xl">{String(i + 1).padStart(2, '0')}</div>
              <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-[0.95] group-hover:text-[#FF4A00] transition-colors">
                {service}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <div className="h-10 md:h-16 bg-[#F4F4F0]" />

      {/* ── Full-screen Video Reveal / Why Sri Lanka ── */}
      <ParallaxVideoReveal />

      {/* ── Why Us ── */}
      <section className="py-32 px-6 md:px-12 bg-[#FF4A00] text-neutral-950 relative z-10 rounded-b-[3rem] md:rounded-b-[5rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-20 max-w-4xl">
            Faster decisions.
            <br />
            Fewer headaches.
            <br />
            Fair Budgets.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-lg md:text-xl font-medium leading-relaxed">
            {[
              {
                icon: MapPin,
                title: 'Local Access',
                desc: 'We understand the ground reality, communities, languages, locations and working culture of Sri Lanka deeply.',
              },
              {
                icon: Shield,
                title: "Int'l Standards",
                desc: 'We work with structured budgets, call sheets, production reports, release forms, contracts and transparent communication.',
              },
              {
                icon: Globe,
                title: 'Market Context',
                desc: 'We understand both Indian production speed and European/North American compliance expectations.',
              },
              {
                icon: Clapperboard,
                title: 'Multidisciplinary',
                desc: "Our team combines filmmaking, production management, travel logistics, location knowledge and int'l business.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-neutral-950 pt-6">
                <item.icon className="w-8 h-8 mb-4" />
                <h3 className="font-black uppercase tracking-tight mb-4 text-2xl">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Big CTA ── */}
      <section className="py-32 px-6 md:px-12 bg-[#F4F4F0] text-neutral-950 text-center flex flex-col items-center">
        <h2 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] mb-8">
          Let's shoot
          <br />
          <span className="text-[#FF4A00]">together</span>
        </h2>
        <p className="max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium mb-12">
          Send us your script, scene brief, song concept, documentary outline or commercial requirement. We will help
          you build a practical Sri Lanka production plan.
        </p>
        <Link
          to="/contact"
          className="bg-neutral-950 text-white rounded-full px-10 md:px-12 py-5 md:py-6 text-xl font-black uppercase tracking-tighter hover:bg-[#FF4A00] transition-colors flex items-center gap-4 group"
        >
          Request Production Plan <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
