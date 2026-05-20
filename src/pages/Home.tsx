import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MapPin, Shield, Globe, Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const ease = [0.76, 0, 0.24, 1] as const;
const showcaseVideo =
  'https://player.vimeo.com/external/403847748.sd.mp4?s=d04e57813a1a9e5db4d5fa3f044bb4f590b14643&profile_id=165&oauth2_token_id=57447761';
const showcasePoster =
  'https://images.pexels.com/photos/32398208/pexels-photo-32398208.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600';

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
    <div ref={container} className="relative h-[220vh] bg-[#F4F4F0]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <WhySriLankaContent />
      </div>
      <motion.div
        style={{ opacity: clipOpacity, y: clipY, scale: clipScale }}
        className="sticky top-0 -mt-[100vh] h-screen w-full z-30 overflow-hidden bg-neutral-950"
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
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      {/* ── Hero ── */}
      <section className="relative min-h-[100svh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-end overflow-hidden bg-neutral-950 text-white rounded-b-[3rem] md:rounded-b-[5rem]">
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

        <div className="relative z-10 text-[15vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter uppercase">
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}>
              Local
            </motion.div>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease }}>
              Access
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="w-[15vw] h-[7vw] rounded-full overflow-hidden shrink-0 mt-4 md:mt-8 bg-neutral-900 border border-neutral-800"
            >
              <img
                src="https://images.pexels.com/photos/32398208/pexels-photo-32398208.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800"
                className="w-full h-full object-cover grayscale brightness-90"
                alt="Sri Lanka aerial coastline"
              />
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}>
              Inter
            </motion.div>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease }}
              className="hidden md:block w-[15vw] h-[7vw] rounded-full overflow-hidden shrink-0 mt-8 bg-neutral-900 border border-neutral-800"
            >
              <img
                src="https://images.pexels.com/photos/19224452/pexels-photo-19224452.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800"
                className="w-full h-full object-cover grayscale brightness-90"
                alt="Film crew on set"
              />
            </motion.div>
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }}>
              National
            </motion.div>
          </div>
          <div className="overflow-hidden text-[#FF4A00]">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }}>
              Standards
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <p className="max-w-md text-lg md:text-xl font-medium leading-snug text-neutral-300">
            Line Production Services in Sri Lanka for Indian, European, North American and Hollywood Productions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-[#FF4A00] text-white rounded-full px-8 py-4 font-bold uppercase tracking-tight hover:bg-white hover:text-neutral-950 transition-colors flex items-center gap-3 group shrink-0"
            >
              Get an Estimate <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/locations"
              className="border-2 border-white text-white rounded-full px-8 py-4 font-bold uppercase tracking-tight hover:bg-white hover:text-neutral-950 transition-colors shrink-0"
            >
              Explore Locations
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="py-6 bg-[#FF4A00] text-neutral-950 flex overflow-hidden whitespace-nowrap border-y-4 border-neutral-950">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex gap-8 items-center shrink-0"
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Sri Lanka on screen •{' '}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Intro / Short Intro ── */}
      <section className="py-32 px-6 md:px-12 bg-[#F4F4F0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            We help global <br />
            crews <span className="text-[#FF4A00]">shoot in Sri Lanka</span>
          </h2>
          <div className="text-xl md:text-2xl font-medium leading-relaxed flex flex-col gap-8">
            <p>
              Sri Lanka offers beaches, colonial cities, railways, tea estates, jungles, temples, luxury resorts,
              fishing villages, urban skylines and South Asian cultural depth within one compact island.
            </p>
            <p>
              Film Ceylon provides complete line production and fixer support for international crews
              filming in Sri Lanka — from permits and location scouting to crew, casting, transport, equipment,
              accommodation, security and production accounting.
            </p>
          </div>
        </div>

        {/* Visual grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh] md:h-[80vh]">
          <div className="col-span-1 md:col-span-2 relative rounded-[2rem] overflow-hidden group bg-neutral-200">
            <img
              src="https://images.pexels.com/photos/8390627/pexels-photo-8390627.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Behind the scenes camera rig"
            />
          </div>
          <div className="relative rounded-[2rem] overflow-hidden group hidden md:block bg-neutral-200">
            <img
              src="https://images.pexels.com/photos/4769075/pexels-photo-4769075.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Nine Arch Bridge Sri Lanka"
            />
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="bg-neutral-950 text-[#F4F4F0] py-32 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Who we <br /> <span className="text-[#FF4A00]">Serve</span>
          </h2>
          <p className="max-w-md text-xl text-neutral-400 font-medium pb-2">
            We understand the distinct workflows, speed, and compliance needs of different global markets.
          </p>
        </div>

        <div className="space-y-0 border-b border-neutral-800">
          {[
            {
              title: 'Indian Cinema',
              for: 'Kollywood, Bollywood, Tollywood',
              link: '/indian-film-desk',
              img: 'https://images.pexels.com/photos/36847090/pexels-photo-36847090.jpeg',
              desc: 'Film productions looking for song shoots, overseas schedules, second-unit filming, action inserts, romantic locations and Sri Lankan cultural access.',
            },
            {
              title: 'Europe',
              for: 'Docs, Commercials, Factual TV',
              link: '/europe',
              img: 'https://images.pexels.com/photos/11677392/pexels-photo-11677392.jpeg',
              desc: 'Documentary crews, public broadcasters, art-house productions, commercials, factual TV, branded content requiring reliable Sri Lanka-based support.',
            },
            {
              title: 'North America',
              for: 'Indie Producers, Streamers',
              link: '/europe',
              img: 'https://images.pexels.com/photos/32398194/pexels-photo-32398194.jpeg',
              desc: 'Canadian and US independent producers, diaspora filmmakers, factual TV teams, streaming documentaries, music videos and commercials.',
            },
            {
              title: 'Hollywood',
              for: 'US Studios, Streamers',
              link: '/hollywood',
              img: 'https://images.pexels.com/photos/8088386/pexels-photo-8088386.jpeg',
              desc: 'US studios, streamers, production companies and second-unit teams looking for South Asian, tropical, island, jungle, colonial and coastal locations.',
            },
          ].map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className="group relative border-t border-neutral-800 pt-8 pb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer overflow-hidden block"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-[#FF4A00] transition-colors">
                  {item.title}
                </h3>
                <div className="text-neutral-500 font-medium text-lg md:text-xl uppercase tracking-tight leading-tight">
                  for <br className="hidden md:block" /> {item.for}
                </div>
                <p className="md:ml-auto max-w-sm text-neutral-400 font-medium leading-snug">{item.desc}</p>
                <ArrowUpRight className="w-8 h-8 text-neutral-600 group-hover:text-[#FF4A00] transition-colors shrink-0 hidden md:block" />
              </div>

              {/* Hover image */}
              <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full h-[250px] md:w-[450px] md:h-[280px] rounded-2xl overflow-hidden mt-6 md:mt-0 md:opacity-0 md:group-hover:opacity-100 md:scale-95 md:group-hover:scale-100 transition-all duration-500 z-0 pointer-events-none bg-neutral-900">
                <img
                  src={`${item.img}?auto=compress&cs=tinysrgb&fit=crop&w=800`}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </div>
            </Link>
          ))}
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
            View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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
          Request Support <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
