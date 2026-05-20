import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { MapPin, AlertCircle } from 'lucide-react';

const locationCategories = [
  {
    title: "Beaches & Coastal Locations",
    description: "Pristine white sand, dramatic rocky cliffs, and vibrant fishing villages. Ideal for song shoots, tropical inserts, and coastal drone footage.",
    highlights: ["Mirissa", "Galle", "Bentota", "Trincomalee", "Pasikudah", "Arugam Bay", "Kalpitiya", "Mannar"],
    image: "https://images.pexels.com/photos/32398208/pexels-photo-32398208.jpeg"
  },
  {
    title: "Colonial & Heritage Sites",
    description: "Preserved 16th to 19th-century architecture blending Dutch, Portuguese, British, and South Asian visual elements.",
    highlights: ["Galle Fort", "Colombo Fort", "Nuwara Eliya Town", "Kandy Heritage Zone", "Jaffna Fort", "Old Railway Stations"],
    image: "https://images.pexels.com/photos/11677392/pexels-photo-11677392.jpeg"
  },
  {
    title: "Hill Country & Tea Estates",
    description: "Lush green rolling hills, manicured tea plantations, winding mountain roads, and misty pine forests. Looks stunning in cinema.",
    highlights: ["Ella & Nine Arch Bridge", "Haputale Viewpoints", "Nuwara Eliya Hills", "Hatton Estates", "Kandy Lake Region", "Badulla Railway Line"],
    image: "https://images.pexels.com/photos/4769075/pexels-photo-4769075.jpeg"
  },
  {
    title: "Urban & Modern Sri Lanka",
    description: "Sleek glass skylines, colonial business districts, massive port cities, luxury apartments, and busy marketplaces.",
    highlights: ["Colombo Skylines", "Colombo Port City", "Pettah Market Chaos", "Historic Colombo Fort", "Luxury Penthouses", "Modern High-Rises"],
    image: "https://images.pexels.com/photos/19224452/pexels-photo-19224452.jpeg"
  },
  {
    title: "North & East Sri Lanka",
    description: "Dry landscapes, crystal-clear lagoons, colourful temples, remote islands, and authentic coastal Tamil villages.",
    highlights: ["Jaffna Peninsula", "Batticaloa Lagoon", "Trincomalee Harbours", "Mannar Salt Pans", "Kilinochchi Plains", "Traditional Kovils"],
    image: "https://images.pexels.com/photos/36847090/pexels-photo-36847090.jpeg"
  },
  {
    title: "Jungle & National Parks",
    description: "Thick tropical rainforests, winding forest dirt roads, dry-zone scrublands, and abundant wildlife for close-up b-roll.",
    highlights: ["Yala National Park", "Wilpattu Lakes", "Minneriya Elephant Gathering", "Sinharaja Rainforest", "Udawalawe Sanctuary", "Scenic Forest Corridors"],
    image: "https://images.pexels.com/photos/8088386/pexels-photo-8088386.jpeg"
  },
  {
    title: "Religious & Cultural Locations",
    description: "Ancient Buddhist temples, towering Hindu kovils, historical churches, and traditional villages reflecting deep spiritual diversity.",
    highlights: ["Buddhist Temples", "Hindu Kovils", "Colonial Churches", "Mosques", "Traditional Ritual Spaces", "Cultural Festival Backdrops"],
    image: "https://images.pexels.com/photos/8390627/pexels-photo-8390627.jpeg"
  }
];

export default function Locations() {
  return (
    <>
      <PageHero
        title="Film Locations"
        accent="last"
        subtitle="Explore the incredible geographical diversity of Sri Lanka. From mist-covered mountains to coastal dunes, all within a few hours' drive."
      />

      {/* Locations Gallery Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
              The Visual Spectrum
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Cinematic Worlds <span className="text-[#FF4A00]">in One Country</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {locationCategories.map((category) => (
              <div
                key={category.title}
                className="bg-neutral-900 border border-neutral-800 rounded-[2.5rem] overflow-hidden group hover:border-[#FF4A00] transition-all flex flex-col"
              >
                <div className="h-[300px] w-full overflow-hidden bg-neutral-800 relative">
                  <img
                    src={`${category.image}?auto=compress&cs=tinysrgb&fit=crop&w=800`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={category.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-neutral-400 font-medium leading-relaxed mb-8">
                      {category.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-[#FF4A00] font-bold uppercase tracking-tight text-xs block mb-4">
                      Key Filming Locations
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {category.highlights.map((item) => (
                        <span
                          key={item}
                          className="bg-neutral-800 border border-neutral-700 text-neutral-300 font-bold uppercase tracking-tight text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                        >
                          <MapPin className="w-3 h-3 text-[#FF4A00]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permissions Warning Block */}
      <section className="py-20 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900 text-[#F4F4F0] relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-900 border-2 border-[#FF4A00] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
            <AlertCircle className="text-[#FF4A00] w-12 h-12 shrink-0" />
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
                Special Permission Guidelines
              </h4>
              <p className="text-neutral-400 font-medium leading-relaxed">
                Filming at religious sites, heritage monuments, wild sanctuaries, active railway tracks, and public/military spaces requires specialized governmental permits and community liaison. Film Ceylon coordinates directly with all relevant Sri Lankan ministries and departments to secure authorized clearances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Request Location Pack"
        description="Looking for specific aesthetic parameters? Let our experienced scouting team prepare a customized location portfolio for your project."
        buttonText="Contact Location Scout"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
