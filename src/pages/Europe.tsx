import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { Leaf, CheckCircle } from 'lucide-react';

const focusSegments = [
  {
    title: "Documentaries & Factual TV",
    desc: "Catering to public broadcasters and independent documentary teams requiring sensitive-topic access, deep research support, and authentic storytellers."
  },
  {
    title: "Independent & Art-House Films",
    desc: "Understanding creative integrity, flexible schedules, and boutique crews that require personalized, creative line production partnerships."
  },
  {
    title: "Branded Content & Campaigns",
    desc: "Fast, highly aesthetic commercial campaigns coordinating local location beauty, rapid talent casting, and modern luxury hospitality."
  },
  {
    title: "Diaspora Cinema",
    desc: "Supporting South Asian and Tamil diaspora filmmakers returning to capture authentic family narratives, cultural heritage, and diaspora stories."
  }
];

const europeServices = [
  "Trilingual Local Fixer Coordination",
  "Deep Cultural & Documentary Research",
  "Key Subject & Interview Facilitation",
  "Official Foreign Filming Permits",
  "Tailored Location Scouting Packs",
  "Custom Crew Booking & Logistics",
  "Sustainability-Aware Production Workflows",
  "Fully Auditable Production Accounting",
  "Talent Casting & Diaspora Outreach Support",
  "Drone Approvals & Specialized Operations"
];

const targetCountries = [
  "Germany", "France", "United Kingdom", "Netherlands",
  "Switzerland", "Austria", "Norway", "Sweden",
  "Denmark", "Italy", "Spain", "United States", "Canada"
];

export default function Europe() {
  return (
    <>
      <PageHero
        title="Europe & North America"
        accent="last"
        subtitle="Dedicated line production, fixer services, and documentary support for European and North American producers shooting in Sri Lanka."
      />

      {/* Intro Context */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
                Reliable Partners
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Trustworthy. Clear. <span className="text-[#FF4A00]">Compliant.</span>
              </h2>
            </div>
            <div className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed space-y-6">
              <p>
                European and North American producers expect flawless communication, transparent budgeting, proper legal documentation, and deep cultural sensitivity. We ensure your production operates smoothly on the ground while respecting safety protocols and editorial standards.
              </p>
              <p>
                Whether you are a public broadcaster filming a complex wildlife documentary, an agency producing a high-fashion campaign, or an independent director making a diaspora feature, Film Ceylon provides reliable and structured support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] border-t border-neutral-900 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Who We Serve
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Target Segments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusSegments.map((segment) => (
              <div
                key={segment.title}
                className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-12 hover:border-[#FF4A00] transition-colors"
              >
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4">
                  {segment.title}
                </h4>
                <p className="text-neutral-400 font-medium leading-relaxed">
                  {segment.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F4F0] text-neutral-950 rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
                What We Provide
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
                Fixer & Line Services
              </h2>
              <p className="text-neutral-600 font-medium leading-relaxed mb-8">
                We manage the local intricacies of your shoot. With trilingual coordinators (Sinhala, Tamil, English) and deep local community relationships, we unlock access while maintaining institutional compliance.
              </p>
              <div className="bg-white border-2 border-neutral-200 rounded-2xl p-6 flex items-start gap-4">
                <Leaf className="text-[#FF4A00] w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-neutral-900">
                    Sustainability-Aware Production
                  </h4>
                  <p className="text-neutral-600 text-sm font-medium mt-2">
                    We practice eco-conscious production coordination, ensuring minimal environmental impact on fragile Sri Lankan ecosystems.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {europeServices.map((service, idx) => (
                <div
                  key={service}
                  className="bg-white border-2 border-neutral-200 rounded-2xl p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-300 font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-bold uppercase tracking-tight text-neutral-950">
                      {service}
                    </span>
                  </div>
                  <CheckCircle className="text-[#FF4A00] w-5 h-5 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Countries Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F4F0] -mt-12 pt-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Global Access
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Coordinated Markets & Countries
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {targetCountries.map((country) => (
              <span
                key={country}
                className="border-2 border-neutral-300 rounded-full px-6 py-3 font-bold uppercase tracking-tight text-sm hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors cursor-default"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Plan Your Shoot"
        description="Send us your treatment, outline, commercial concept or NGO brief. Let's build a practical Sri Lankan schedule."
        buttonText="Contact International Desk"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
