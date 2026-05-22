import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { Eye, Shield, Award, Users, ArrowUpRight } from 'lucide-react';

const coreAdvantages = [
  {
    title: "Production Partners, Not Just Fixers",
    desc: "We don't just book hotels and pass permits. We act as your local co-producers on the ground — optimizing budgets, handling legal paperwork, and looking out for your physical safety and creative output.",
    icon: Award
  },
  {
    title: "Multilingual & Culturally Native",
    desc: "Our team operates fluently in Tamil, Sinhala, and English. We navigate local bureaucracy, local communities, and religious bodies with profound ease and cultural respect.",
    icon: Users
  },
  {
    title: "Dual Context Understanding",
    desc: "We understand the rapid pacing of Indian cinema (Kollywood/Tollywood) alongside the meticulous legal compliance, safety, and accounting standards expected by US and European studios.",
    icon: Eye
  },
  {
    title: "Absolute Safety & Transparency",
    desc: "We maintain highly transparent budgeting processes. No hidden margins, clear digital cost reports, standard NDA protection, and bulletproof safety plans for active shoots.",
    icon: Shield
  }
];

const teamMembers = [
  {
    name: "Pathurjan Wijesekara",
    role: "CEO",
    credentials: "BA Motion Pictures - Darmstadt University of Applied Sciences, Germany",
    desc: "Pioneering cross-border production workflows and bringing rigorous European cinematic standards to South Asian film operations.",
    link: "https://www.imdb.com/name/nm9629416/?ref_=ext_shr_lnk",
    image: "https://xbnsztyfyrhrdqhbboip.supabase.co/storage/v1/object/public/PublicImg/other/PNG%20to%20WEBP%20Conversion.webp?auto=compress&cs=tinysrgb&w=800",
    tc: "01"
  },
  {
    name: "Joshua Heby",
    role: "COO",
    credentials: "Line Producer, Artist and Filmmaker in Sri Lanka",
    desc: "Expert in island scheduling, crew coordination, specialized stunt setups, and multi-scale logistics management.",
    link: "https://www.imdb.com/name/nm9629491/",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800",
    tc: "02"
  },
  {
    name: "Shopeha Pashkaran",
    role: "CFO",
    credentials: "BSc Human Resource Management & Organizational Behavior - Northampton University, UK",
    desc: "Governing rigorous multi-currency compliance, localized labor policies, transparent budgeting protocols, and corporate resources.",
    link: null,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    tc: "03"
  },
  {
    name: "King Ratnam",
    role: "Advisor & Partner",
    credentials: "Sri Lankan Actor and Film Director",
    desc: "Renowned cinematic figure guiding local talent resources, location scouting permissions, and regional industry networks.",
    link: "https://www.imdb.com/name/nm7243916/?ref_=ext_shr_lnk",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800",
    tc: "04"
  }
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Our Company"
        accent="last"
        eyebrow="Company profile"
        subtitle=" Film Ceylon is an international production gateway to Sri Lanka, powered by Ravana Industries."
      />

      {/* Main Story Content */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
                Our Genesis & Mission
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Filming in Sri Lanka, <span className="text-[#FF4A00]">Professionalized.</span>
              </h2>
            </div>
            <div className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed space-y-6">
              <p>
                Film Ceylon was established to remove the unpredictability, friction, and lack of compliance traditionally associated with foreign filming schedules in South Asia. 
              </p>
              <p>
                We serve global directors, streaming houses, public broadcasters, commercial production houses, and independent filmmakers. We serve as a trusted local proxy, managing official permits, custom equipment procurement, location scouts, casting databases, and crew accommodation.
              </p>
              <p className="text-white border-l-4 border-[#FF4A00] pl-6 py-2 italic font-semibold">
                "Our mission is simple: to help global producers shoot in Sri Lanka with complete confidence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Ravana Industries Positioning */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900 text-[#F4F4F0] relative z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[2rem] overflow-hidden bg-neutral-900 aspect-video md:aspect-square">
            <img
              src="https://images.pexels.com/photos/19224452/pexels-photo-19224452.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800"
              className="w-full h-full object-cover"
              alt="Ravana Industries & Film Crew"
            />
            <div className="absolute inset-0 bg-neutral-950/40" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[#FF4A00] font-bold uppercase tracking-tight text-xs block">
                Corporate Backing
              </span>
              <span className="text-white font-black uppercase text-xl md:text-2xl tracking-tighter block mt-2">
                Powered by Ravana Industries
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block">
              The Leadership Advantage
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Two Sides of the Camera
            </h3>
            <p className="text-neutral-400 font-medium leading-relaxed">
              Led by seasoned professionals with combined backgrounds in international business development, high-end travel logistics, media tech, and local cinema coordination. 
            </p>
            <p className="text-neutral-400 font-medium leading-relaxed">
              This diverse skill set allows us to operate on two levels: fully understanding the creative, aesthetic, and scheduling visions of international directors while seamlessly executing high-intensity logistical movements on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* ── Executive Team Section ── */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900 text-[#F4F4F0] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              The Executive <span className="text-[#FF4A00]">Team</span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-3xl">
              Meet the directors and partners combining academic excellence, global film industry experience, and strategic corporate resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-[2rem] p-6 flex flex-col justify-between group hover:border-[#FF4A00] hover:bg-neutral-900 transition-all duration-500 ease-out"
              >
                <div>
                  {/* Viewfinder Portrait Container */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-950 mb-6 border border-neutral-800 group/image">
                    {/* The Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    {/* Viewfinder Grid lines & Overlay */}
                    <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none border border-transparent group-hover/image:border-[#FF4A00]/30 transition-all duration-500">
                      {/* Focus Corners */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#FF4A00]/40 group-hover:border-[#FF4A00] transition-colors duration-500" />
                      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#FF4A00]/40 group-hover:border-[#FF4A00] transition-colors duration-500" />
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#FF4A00]/40 group-hover:border-[#FF4A00] transition-colors duration-500" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#FF4A00]/40 group-hover:border-[#FF4A00] transition-colors duration-500" />

                      {/* Center Crosshair */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-60">
                        <div className="w-2.5 h-[1px] bg-[#FF4A00]/50 group-hover:bg-[#FF4A00] transition-colors" />
                        <div className="h-2.5 w-[1px] bg-[#FF4A00]/50 group-hover:bg-[#FF4A00] transition-colors absolute" />
                      </div>

                      {/* Top Bar Indicators */}
                      <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse block" />
                          <span>REC</span>
                        </div>
                        <span>TC 00:{member.tc}:00</span>
                      </div>

                      {/* Bottom Bar Indicators */}
                      <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                        <span>24 FPS</span>
                        <span>ISO 400</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[#FF4A00] font-black uppercase tracking-widest text-[10px] block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-2 leading-none group-hover:text-[#FF4A00] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider block mb-4 border-l border-neutral-800 pl-3 leading-snug">
                    {member.credentials}
                  </span>
                  <p className="text-neutral-400 font-medium leading-relaxed text-xs md:text-[13px] mb-6">
                    {member.desc}
                  </p>
                </div>

                {member.link ? (
                  <div className="mt-auto pt-4 border-t border-neutral-800 flex justify-end">
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold uppercase tracking-tight text-[10px] text-[#FF4A00] hover:text-white transition-all duration-300"
                    >
                      IMDb Profile
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                ) : (
                  <div className="mt-auto pt-4 border-t border-neutral-800 flex justify-end">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                      Corporate Lead
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ravana Industries Corporate Box */}
          <div className="bg-neutral-900 border-2 border-neutral-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 hover:border-[#FF4A00] transition-colors">
            <div className="max-w-2xl">
              <span className="text-[#FF4A00] font-black uppercase tracking-widest text-xs block mb-2">
                Parent Company Integration
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">
                The Ravana Industries Group Family
              </h3>
              <p className="text-neutral-400 font-medium leading-relaxed">
                Film Ceylon is backed by the comprehensive corporate power, capital, and logistics networks of Ravana Industries Group. Together, we connect technology, logistics, and creativity to push Sri Lankan industry to the international stage.
              </p>
            </div>
            <a
              href="https://ravanaindustries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4A00] text-white rounded-full px-8 py-4 font-black uppercase tracking-tight hover:bg-white hover:text-neutral-950 transition-colors flex items-center gap-2 group shrink-0"
            >
              Visit ravanaindustries.com
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Advantages / Why We are Different */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F4F0] text-neutral-950 rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Our Edge
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-3xl leading-tight">
              Why We Are More Than Fixers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreAdvantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-white border-2 border-neutral-200 rounded-[2rem] p-8 md:p-12 hover:border-[#FF4A00] transition-colors flex flex-col justify-between"
              >
                <div>
                  <adv.icon className="text-[#FF4A00] w-10 h-10 mb-6" />
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-neutral-950 mb-4">
                    {adv.title}
                  </h4>
                  <p className="text-neutral-600 font-medium leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Start Your Journey"
        description="Connect with our line producers to receive a practical production blueprint for your upcoming filming schedule in Sri Lanka."
        buttonText="Start the Conversation"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
