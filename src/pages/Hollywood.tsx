import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { CheckCircle } from 'lucide-react';

const bestFitProductions = [
  "Second-Unit Shoots & Plates",
  "Establishing Shots & Drone B-Roll",
  "Premium Streaming Documentaries",
  "Factual TV & Travel Series",
  "Commercials & Branded Content",
  "Music Videos & Visual Albums",
  "Independent Feature Films",
  "South Asia-Based Storylines",
  "Remote Crew & Producer Support"
];

const complianceChecklist = [
  {
    title: "NDA & Confidentiality",
    desc: "Strict protocols for script details, star-cast movements, and intellectual property. All crews and vendors sign rigorous NDAs."
  },
  {
    title: "Production Service Agreements",
    desc: "Legally robust contracts compliant with European and North American entertainment business standards."
  },
  {
    title: "Risk & Safety Assessment",
    desc: "Detailed safety reports, reliable medical support plans, marine safety crews, and specialized stunt coordinators."
  },
  {
    title: "Transparent Accounting",
    desc: "Clear budgeting templates, multi-currency accounting, comprehensive cost reports, and immediate wrap wrap-up folders."
  },
  {
    title: "Standard Releases & Paperwork",
    desc: "Complete documentation including location releases, talent releases, crowd notices, and child talent approvals."
  },
  {
    title: "Remote Director Support",
    desc: "Live digital feed monitor links and direct Zoom audio/video interfaces so producers can direct crews in real time."
  }
];

export default function Hollywood() {
  return (
    <>
      <PageHero
        title="Hollywood & Streamers"
        accent="last"
        subtitle="Professional local production services, robust compliance, and line production oversight built for US studios, streaming platforms, and independent features."
      />

      {/* Intro section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
                Studio Standards
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Global Standards, <span className="text-[#FF4A00]">Tropical Realities.</span>
              </h2>
            </div>
            <div className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed space-y-6">
              <p>
                Sri Lanka offers US and international studios an extraordinary, cost-effective alternative to generic South Asian backdrops. Within a single day, teams can capture pristine beaches, mist-shrouded tea mountains, ancient colonial architecture, and deep wilderness.
              </p>
              <p>
                Film Ceylon bridges the gap between local field execution and rigorous international compliance. We deliver precise daily production reports, comprehensive cost audits, risk assessments, and standard legal releases expected by Hollywood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best-Fit Productions */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] border-t border-neutral-900 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Capabilities
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Best-Fit Production Formats
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestFitProductions.map((production) => (
              <div
                key={production}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex items-center gap-4 hover:border-[#FF4A00] transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF4A00] shrink-0" />
                <span className="font-bold uppercase tracking-tight text-white">
                  {production}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance / Support Checklist */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F4F0] text-neutral-950 rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Risk Management & Safety
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-3xl leading-tight">
              Hollywood-Ready Infrastructure & Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceChecklist.map((item) => (
              <div
                key={item.title}
                className="bg-white border-2 border-neutral-200 rounded-[2rem] p-8 hover:border-[#FF4A00] transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-neutral-900 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                  <CheckCircle className="text-[#FF4A00] w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Start the Partnership"
        description="Looking for an experienced South Asian production partner? Let's discuss your project parameters under strict confidentiality."
        buttonText="Contact Hollywood Desk"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
