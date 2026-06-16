import { Code2, BarChart3, Megaphone, Bot, Zap, Globe2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Globe2 className="w-6 h-6 text-brand-400" />,
      title: "AI-Powered SEO",
      description: "Harness programmatic SEO, topical authority maps, and AI content generation to dominate search rankings at scale."
    },
    {
      icon: <Code2 className="w-6 h-6 text-brand-400" />,
      title: "Custom AI Development",
      description: "Build proprietary AI agents, internal tooling, and custom RAG applications tailored perfectly to your agency workflows."
    },
    {
      icon: <Megaphone className="w-6 h-6 text-brand-400" />,
      title: "Data-Driven Marketing",
      description: "Deploy advanced predictive marketing, automated outreach, and AI social listening to capture every high-intent lead."
    },
    {
      icon: <Bot className="w-6 h-6 text-brand-400" />,
      title: "Automated Lead Gen",
      description: "Set up 24/7 AI-driven conversational bots and intent triggers that convert top-of-funnel traffic into booked meetings."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-brand-400" />,
      title: "Marketing Analytics",
      description: "Uncover hidden patterns in your customer data with machine learning to optimize CAC and maximize lifetime value."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-400" />,
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks. We map your agency processes and implement AI systems that run them automatically."
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Everything you need to <span className="text-brand-400">scale with AI.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Stop relying on outdated marketing tactics. FutureRanks.agency equips you with the enterprise-grade AI infrastructure you need to outpace the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-2xl hover:bg-white/[0.02] transition-colors border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
