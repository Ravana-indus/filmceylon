import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    title: "Film Permits and Official Coordination",
    description: "We guide international producers through the official filming approval process in Sri Lanka and coordinate with the relevant authorities based on the nature of the production and locations involved.",
    items: [
      "National filming permission guidance",
      "Location-specific approvals",
      "Police and local authority coordination",
      "Drone and special filming support",
      "Religious, cultural and heritage site coordination",
      "Wildlife, railway, road and public-space filming support"
    ]
  },
  {
    title: "Location Scouting",
    description: "Sri Lanka can represent many visual worlds. We help productions find locations that match the script, mood, budget and logistical needs.",
    items: [
      "Beach and coastal locations",
      "Tea estates & hill country",
      "Railways & historic bridges",
      "Colonial & heritage architecture",
      "Luxury resorts & villas",
      "Traditional villages & communities",
      "Temples, kovils & churches",
      "Jungles & national wildlife parks",
      "Urban Colombo & Port City",
      "Northern & Eastern Provinces"
    ]
  },
  {
    title: "Line Production",
    description: "We manage the local production operation so your team can focus on the creative work.",
    items: [
      "Local budgeting & scheduling",
      "Vendor & rates negotiation",
      "Local crew hiring",
      "Production management & coordination",
      "Daily cost tracking & reporting",
      "Transparent cash handling",
      "Local procurement & rentals",
      "Detailed wrap & cost reports"
    ]
  },
  {
    title: "Crew and Equipment",
    description: "We source local technical crew and equipment based on the scale of your production.",
    items: [
      "Camera & sound teams",
      "Gaffer, lighting & grip crews",
      "Production assistants & runners",
      "Certified drone operators",
      "Art department & props",
      "Makeup, hair & wardrobe",
      "Stunt & marine safety coordination",
      "State-of-the-art equipment hire"
    ]
  },
  {
    title: "Casting and Extras",
    description: "We coordinate actors, models, dancers, extras and local faces for film, commercial and music video productions.",
    items: [
      "Local casting directors & studios",
      "Extras & crowd coordination",
      "Traditional & modern dancers",
      "Multicultural talent databases",
      "Release forms & legal compliance",
      "On-set talent management"
    ]
  },
  {
    title: "Transport, Hotels and Logistics",
    description: "We handle the practical movement of people, equipment and production units across Sri Lanka.",
    items: [
      "Airport VIP & custom handling",
      "Production & utility vehicles",
      "Premium/Star accommodation booking",
      "Professional unit catering",
      "Unit base setup & power supply",
      "Long-distance travel coordination",
      "Security & crowd control teams"
    ]
  },
  {
    title: "Fixers, Translators and Researchers",
    description: "For documentaries, journalism, factual TV and cultural stories, we provide trusted local access and translation.",
    items: [
      "Trilingual fixers (Tamil, Sinhala, English)",
      "In-depth research support",
      "Key interview coordination",
      "Local community access & trust",
      "Sensitive-topic guidance",
      "Field & expedition support"
    ]
  },
  {
    title: "Remote and Second-Unit Production",
    description: "Your international team does not always need to travel with a full crew. We can execute second-unit shoots, plates, drone footage, establishing shots and documentary inserts locally.",
    items: [
      "Remote direction & monitoring support",
      "Live high-definition video feeds",
      "Same-day digital rushes delivery",
      "VFX plate filming & B-Roll",
      "Establishing shots & scenic plates",
      "Local pickup interviews"
    ]
  }
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Complete Production Services"
        accent="last"
        subtitle="From the first location idea to the final wrap report, we manage the Sri Lankan side of your shoot with precision and international standard execution."
      />

      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] rounded-[3rem] md:rounded-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              Comprehensive Solutions
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-3xl leading-tight">
              End-to-End Line Production & Fixer Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index + 1}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Shoot?"
        description="Send us your script, scene brief, song concept or documentary outline. We will help you build a practical Sri Lanka production plan."
        buttonText="Request Production Support"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
