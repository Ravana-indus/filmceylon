import PageHero from '../components/PageHero';
import { ArrowUpRight, MessageSquare, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Plan Your Shoot"
        accent="last"
        subtitle="Send us your production parameters, locations requirements, or script treatment. Let's build a practical Sri Lanka plan."
      />

      <section className="py-20 px-6 md:px-12 bg-[#F4F4F0] text-neutral-950 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <span className="text-[#FF4A00] font-bold uppercase tracking-widest text-sm block mb-4">
                Global Cinema Desks
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                Connect <span className="text-[#FF4A00]">Directly</span>
              </h2>
              <p className="text-neutral-600 font-medium leading-relaxed">
                Send us your production brief, scene drafts, or treatment outline. We respond with initial location suggestions, preliminary pricing, and logistical options.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:hello@filmceylon.com"
                className="flex items-center gap-4 group p-4 border border-neutral-300 rounded-2xl bg-white hover:border-[#FF4A00] transition-colors"
              >
                <div className="p-3 bg-[#FF4A00]/10 rounded-xl text-[#FF4A00]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider block">
                    Email Desk
                  </span>
                  <span className="font-bold text-neutral-900 group-hover:text-[#FF4A00] transition-colors">
                    hello@filmceylon.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/94770554200"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 border border-neutral-300 rounded-2xl bg-white hover:border-[#FF4A00] transition-colors"
              >
                <div className="p-3 bg-[#FF4A00]/10 rounded-xl text-[#FF4A00]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider block">
                    WhatsApp Hotdesk
                  </span>
                  <span className="font-bold text-neutral-900 group-hover:text-[#FF4A00] transition-colors">
                    +94 77 055 4200
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 border border-neutral-300 rounded-2xl bg-white">
                <div className="p-3 bg-[#FF4A00]/10 rounded-xl text-[#FF4A00] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider block mb-1">
                    HQ Coordinates
                  </span>
                  <span className="font-bold text-neutral-900 text-sm leading-snug block">
                    No 10, 30/1/1 Pamankada Ln, Colombo 00600
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6">
              <span className="text-xs text-neutral-500 font-bold uppercase tracking-widest block mb-2">
                Backing Corporation
              </span>
              <p className="font-black uppercase tracking-tight text-neutral-950">
                Powered by Ravana Industries
              </p>
            </div>
          </div>

          {/* Right Column: Detailed brutalist form */}
          <div className="lg:col-span-8 bg-white border-2 border-neutral-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-20">
                <span className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#FF4A00] mb-6">
                  Thank You.
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Brief Received Successfully
                </h3>
                <p className="max-w-md text-neutral-600 font-medium">
                  Our international coordinators will review your parameters, script, or timeline requirements and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border-2 border-neutral-950 rounded-full px-8 py-3 font-bold uppercase text-sm hover:bg-neutral-950 hover:text-white transition-all cursor-pointer"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-neutral-200 pb-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                    Production Estimate Request
                  </h3>
                  <p className="text-neutral-500 text-sm font-medium">
                    Please provide as many details as possible for a precise baseline estimate.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your full name"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Production house / Studio"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="studio@example.com"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="whatsapp" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      placeholder="+XX XXXXXXXXX"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Origin Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="e.g., India, UK, USA"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Expected Shoot Dates */}
                  <div>
                    <label htmlFor="dates" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Expected Shoot Dates
                    </label>
                    <input
                      type="text"
                      id="dates"
                      placeholder="e.g., Nov 2026, Q1 2027"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Production Type */}
                  <div>
                    <label htmlFor="type" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Production Type
                    </label>
                    <select
                      id="type"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Film">Feature Film</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Commercial">Commercial / Ad</option>
                      <option value="Music Video">Music Video</option>
                      <option value="TV">Television Series</option>
                      <option value="Streaming">Streaming Platform</option>
                      <option value="YouTube">YouTube Production</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Target Market */}
                  <div>
                    <label htmlFor="market" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Target Audience / Market
                    </label>
                    <select
                      id="market"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="India">India (Kollywood/Bollywood/Tollywood)</option>
                      <option value="Hollywood">Hollywood & Streamers</option>
                      <option value="Europe">Europe Desk</option>
                      <option value="North America">North America</option>
                      <option value="Other">Global / Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Expected Crew Size */}
                  <div>
                    <label htmlFor="crew" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Expected Crew Size
                    </label>
                    <input
                      type="text"
                      id="crew"
                      placeholder="e.g., 10-20, 50+"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label htmlFor="budget" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                      Estimated Local Budget Range
                    </label>
                    <input
                      type="text"
                      id="budget"
                      placeholder="e.g., Under $50k, $100k-$500k"
                      className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Permits Toggle */}
                  <div>
                    <label className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-4 block">
                      Do you need filming permits?
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-tight text-sm">
                        <input type="radio" name="permits" value="Yes" defaultChecked className="accent-[#FF4A00] w-4 h-4" /> Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-tight text-sm">
                        <input type="radio" name="permits" value="No" className="accent-[#FF4A00] w-4 h-4" /> No / Unsure
                      </label>
                    </div>
                  </div>

                  {/* Equipment Toggle */}
                  <div>
                    <label className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-4 block">
                      Do you need local equipment hire?
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-tight text-sm">
                        <input type="radio" name="equipment" value="Yes" defaultChecked className="accent-[#FF4A00] w-4 h-4" /> Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-tight text-sm">
                        <input type="radio" name="equipment" value="No" className="accent-[#FF4A00] w-4 h-4" /> No / Unsure
                      </label>
                    </div>
                  </div>
                </div>

                {/* Locations Needed */}
                <div>
                  <label htmlFor="locations" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                    Locations Needed / Scene Briefs
                  </label>
                  <input
                    type="text"
                    id="locations"
                    placeholder="e.g., Tea plantations, colonial streets, private beaches"
                    className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="brief" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                    Upload Script / Treatment / Moodboard
                  </label>
                  <input
                    type="file"
                    id="brief"
                    className="w-full text-neutral-500 text-sm font-bold uppercase tracking-tight file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-2 file:border-neutral-950 file:bg-transparent file:text-neutral-950 file:font-black file:uppercase hover:file:bg-neutral-950 hover:file:text-white file:transition-all cursor-pointer"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="uppercase font-bold tracking-tight text-xs text-neutral-500 mb-2 block">
                    Message / Special Requests
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe any special logistics, star casting needs, drone parameters or key timelines..."
                    className="w-full bg-transparent border-2 border-neutral-300 rounded-2xl p-4 text-lg font-medium focus:border-[#FF4A00] focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-neutral-950 text-white rounded-full py-5 text-xl font-black uppercase tracking-tighter hover:bg-[#FF4A00] transition-colors flex items-center justify-center gap-3 cursor-pointer group"
                >
                  Submit Estimate Request
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
