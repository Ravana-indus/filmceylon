import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';


const industrySegments = [
  {
    name: "Kollywood (Tamil Cinema)",
    description: "Sri Lanka shares deep linguistic and cultural ties with Tamil Nadu. We offer seamless Tamil-speaking local coordination, authentic Sri Lankan Tamil cultural access, and direct relationships in Jaffna, Trincomalee, and the Eastern Province.",
    focus: ["Tamil-speaking crew & coordinators", "Jaffna, Batticaloa & coastal Tamil locations", "Local temple (Kovils) & cultural approvals", "Quick turnaround crew hiring"]
  },
  {
    name: "Bollywood (Hindi Cinema)",
    description: "Premium island locations, ultra-luxury resort tie-ups, elite VIP handling, and total privacy for high-profile star casts. We specialize in producing grand aesthetics that match modern Bollywood visual expectations.",
    focus: ["High-end star hospitality & security", "Luxury Colombo & Port City backdrops", "Bespoke beach villas & premium hotels", "Confidentiality & NDA management"]
  },
  {
    name: "Tollywood (Telugu Cinema)",
    description: "High-energy song shoots and large-unit action sequences demand flawless logistics. We coordinate massive dance troupes, complex stunt teams, extensive vehicle movements, and rapid-fire daily production schedules.",
    focus: ["Large-scale choreography & extras coordination", "Action unit permit & safety logistics", "Heavy equipment procurement", "Fast-paced production schedules"]
  },
  {
    name: "Malayalam Cinema",
    description: "Grounded storytelling, realistic locations, and artistic integrity. Sri Lanka offers coastal fishing villages, ancient interior heritage houses, and raw natural wilderness that perfectly match Malayalam cinema's realistic aesthetics.",
    focus: ["Cost-effective line production", "Organic, realistic rural & coastal locations", "Art house & indie-friendly schedules", "Flexible crew sizes"]
  }
];

const deskServices = [
  "Song Shoot Packages (End-to-End)",
  "Overseas Schedule Management",
  "A-List Star Hospitality & Security",
  "Custom Location Scouting & Mapping",
  "Dance Crews, Extras & Junior Artistes",
  "Luxury Vehicles & Caravans",
  "Crowd Control & High-Security Sets",
  "Police, Military & Traffic Approvals",
  "Premium Resort & Hotel Negotiations",
  "Airport VIP Fast-Track & Reception",
  "Local PR & Media Liaison",
  "Multilingual Crew (Tamil / Hindi / Sinhala / English)"
];

export default function IndianFilmDesk() {
  return (
    <>
      <PageHero
        title="Indian Film Desk"
        accent="last"
        eyebrow="Regional desk"
        subtitle="Dedicated line production and fast-track coordination for Kollywood, Bollywood, Tollywood, and Malayalam film schedules in Sri Lanka."
      />

      {/* Intro section with brand copy */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
                The Preferred Gateway
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Your Overseas Schedule, <span className="text-[#FF4A00]">Made Simple.</span>
              </h2>
            </div>
            <div className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed space-y-6">
              <p>
                Sri Lanka is the ultimate close-to-home international filming destination for Indian cinema. With only an hour's flight time from major hubs, the island presents an astonishing array of visuals within brief driving distances.
              </p>
              <p>
                From highly choreographed song shoots in luxurious tea estates to massive action inserts on coastal highways, Film Ceylon delivers speed, transparency, and deep cultural familiarity to Indian producers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Segments Grid */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] relative z-20 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#FF4A00]">
              Customized Cinema Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industrySegments.map((segment, idx) => (
              <div
                key={segment.name}
                className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-12 hover:border-[#FF4A00] transition-colors"
              >
                <span className="text-neutral-500 font-bold text-lg block mb-4">
                  0{idx + 1}
                </span>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4">
                  {segment.name}
                </h4>
                <p className="text-neutral-400 font-medium leading-relaxed mb-8">
                  {segment.description}
                </p>
                <div className="space-y-3">
                  <span className="text-[#FF4A00] font-bold uppercase tracking-tight text-xs block">
                    Key Strengths
                  </span>
                  <ul className="grid grid-cols-1 gap-2">
                    {segment.focus.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A00]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Block */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F4F0] text-neutral-950 rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Dedicated Services
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Indian Production Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deskServices.map((service, idx) => (
              <div
                key={service}
                className="bg-white border-2 border-neutral-200 rounded-2xl p-6 flex items-start gap-4 hover:border-[#FF4A00] transition-colors"
              >
                <span className="text-neutral-300 font-black text-xl leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-bold uppercase tracking-tight text-neutral-900 leading-tight">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Plan Your Schedule"
        description="Send us your song concept, scene requirement, script brief or tentative shooting dates. We will suggest locations and provide a detailed estimate."
        buttonText="Contact Indian Film Desk"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
