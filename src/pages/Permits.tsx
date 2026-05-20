import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

const permitAssistanceList = [
  "National Filming Permission Coordination",
  "Application & Script Document Preparation",
  "Script & Treatment Submission Review",
  "Ministry & Department Liaison",
  "Certified Drone & Aerial Filming Approvals",
  "Police, Security & Traffic Management approvals",
  "Public Space & Highway Filming Clearances",
  "Sensitive Religious & Cultural Site Permissions",
  "Wildlife sanctuaries & Protected Area Coordination",
  "Active Railway & Carriage Filming Approvals"
];

export default function Permits() {
  return (
    <>
      <PageHero
        title="Film Permits"
        accent="last"
        eyebrow="Regulatory support"
        subtitle="Smooth, compliant, and structured governmental coordination. We navigate the complete Sri Lankan filming approval process on behalf of your production."
      />

      {/* Permits Content */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-[#F4F4F0] rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
                Regulatory Clearance
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Authorized Access, <span className="text-[#FF4A00]">Zero Red Tape.</span>
              </h2>
              <p className="text-neutral-400 font-medium leading-relaxed mb-8">
                Every foreign production filming in Sri Lanka requires an official national permit. Depending on the locations, timeline, equipment list (especially drones), and public impact, supplementary clearances are required from localized municipal, cultural, or security bodies.
              </p>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex gap-4">
                <ShieldCheck className="text-[#FF4A00] w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-white">
                    Official Liaison Office
                  </h4>
                  <p className="text-neutral-400 text-sm font-medium mt-1">
                    We maintain robust, everyday communication lines with the National Film Corporation (NFC) of Sri Lanka and key defense, cultural, and environmental ministries.
                  </p>
                </div>
              </div>
            </div>

            {/* List of clearances we help with */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-8">
                We Manage & Coordinate:
              </h3>
              <div className="space-y-4">
                {permitAssistanceList.map((permit) => (
                  <div
                    key={permit}
                    className="flex items-center justify-between border-b border-neutral-800 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-neutral-300">
                      {permit}
                    </span>
                    <CheckCircle2 className="text-[#FF4A00] w-5 h-5 shrink-0 ml-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Legal Disclaimer */}
      <section className="py-20 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900 text-[#F4F4F0] relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FF4A00]/10 border-2 border-[#FF4A00] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
            <Scale className="text-[#FF4A00] w-12 h-12 shrink-0" />
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-[#FF4A00] mb-4">
                Legal Notice & Disclaimer
              </h4>
              <p className="text-neutral-300 font-medium leading-relaxed">
                Film Ceylon does not guarantee clearances or approvals. All filming permissions remain subject to the sole discretion of the relevant government ministries, local authorities, specific heritage location owners, and current applicable national regulations. Our responsibility is to professionally prepare, organize, coordinate, and expedite the submission process to avoid unnecessary delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Secure Your Permits"
        description="Plan ahead. Official national filming approvals require structured script submissions and processing timelines."
        buttonText="Discuss Permit Requirements"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
