import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "SEO Accelerator",
      price: "$2,500",
      description: "For startups needing to establish rapid organic market presence.",
      features: [
        "AI Programmatic SEO Setup",
        "Topical Authority Map",
        "Technical SEO Audit",
        "Automated Content Pipeline",
        "Monthly Performance Review"
      ],
      popular: false
    },
    {
      name: "Growth Partner",
      price: "$6,500",
      description: "Comprehensive marketing and AI Dev for scaling companies.",
      features: [
        "Everything in SEO Accelerator",
        "Custom Lead Gen AI Agents",
        "Predictive Marketing Models",
        "Omnichannel Social Automation",
        "Dedicated Engineering Support",
        "Weekly Strategy Calls"
      ],
      popular: true
    },
    {
      name: "Enterprise Dev",
      price: "Custom",
      description: "Full-scale custom AI infrastructure for established enterprises.",
      features: [
        "Proprietary LLM Fine-Tuning",
        "Custom Internal RAG Systems",
        "Complex Workflow Automation",
        "Enterprise Security & Compliance",
        "White-Glove Integration"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Transparent pricing for <span className="text-brand-400">serious growth.</span>
          </h2>
          <p className="text-lg text-slate-400">
            We partner with ambitious teams to deliver compounding ROI through AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-brand-900/40 to-surface-900 border border-brand-500/50 shadow-2xl shadow-brand-500/10 scale-105 z-10' 
                  : 'glass-panel border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-display font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-400 h-10 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-400">/mo</span>}
              </div>
              
              <a href="#contact" className={`w-full block text-center py-3 px-6 rounded-xl font-medium transition-all mb-8 ${
                plan.popular
                  ? 'bg-brand-600 hover:bg-brand-500 text-white'
                  : 'bg-white/5 hover:bg-white/10 text-white'
              }`}>
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </a>
              
              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex flex-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-brand-400' : 'text-slate-500'}`} />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
