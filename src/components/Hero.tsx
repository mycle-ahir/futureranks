import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageSquare, Megaphone, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          The Next Generation AI Agency
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Dominate your market with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-200">
            AI-powered solutions.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          FutureRanks.agency delivers cutting-edge AI SEO, custom AI development, and data-driven marketing solutions to scale your business faster than ever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium text-lg transition-all flex items-center justify-center gap-2 group">
            Book a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/5 transition-all">
            See Our Work
          </a>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-500"
        >
           <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-500" /> Enterprise-grade Solutions</div>
           <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-500" /> Advanced Proprietary LLMs</div>
           <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-500" /> Dedicated Technical Team</div>
        </motion.div>
      </div>

      {/* App Mockup Illustration / First Uploaded Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-20 max-w-5xl mx-auto px-6 relative"
      >
        <div className="rounded-2xl border border-white/10 bg-surface-800 p-2 md:p-4 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent z-10 rounded-2xl pointer-events-none h-full" style={{ top: '60%' }} />
          <div className="rounded-xl border border-white/5 bg-surface-900 overflow-hidden flex flex-col items-center justify-center">
               <img 
                 src="/dashboard-1.png.png" 
                 alt="AI Visibility Tracking Dashboard" 
                 className="w-full h-auto object-cover opacity-90"
               />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
