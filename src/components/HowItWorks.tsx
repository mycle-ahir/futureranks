export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Track",
      description: "See how your brand appears across all major LLMs."
    },
    {
      number: "02",
      title: "Analyze",
      description: "Understand which websites, pages, communities, and videos are influencing AI answers in your space."
    },
    {
      number: "03",
      title: "Find gaps",
      description: "Spot where competitors are present on cited sources and your brand is missing."
    },
    {
      number: "04",
      title: "Prioritize",
      description: "Pick the highest-impact brand mention opportunities based on citation signals."
    },
    {
      number: "05",
      title: "Get mentioned",
      description: "Get your brand mentioned on the websites and communities shaping AI answers."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-5/12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              From AI visibility tracking to <span className="text-brand-400">getting your brand mentioned.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Our end-to-end platform helps you secure the perfect placements inside the engines shaping the future of search.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative group">
                  {idx !== steps.length - 1 && (
                    <div className="absolute top-12 left-6 w-px h-full bg-brand-500/20 group-hover:bg-brand-500/50 transition-colors" />
                  )}
                  <div className="w-12 h-12 shrink-0 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center font-display font-bold text-brand-400">
                    {step.number}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-2 font-display">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
             {/* Uploaded images go here */}
             <div className="glass-panel p-2 rounded-2xl relative overflow-hidden">
                <img 
                  src="/dashboard-2.png.webp" 
                  alt="Find gaps and Prioritize" 
                  className="w-full h-auto object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                />
             </div>
             
             <div className="glass-panel p-2 rounded-2xl relative overflow-hidden">
                <img 
                  src="/dashboard-3.png.webp" 
                  alt="Get mentioned workflow" 
                  className="w-full h-auto object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
