import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-white/5 bg-surface-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Let's build your <span className="text-brand-400">AI growth engine.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Schedule a strategy call with our AI engineers and marketing experts. We'll audit your current setup and identify the biggest opportunities for automation and organic scaling.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-surface-700 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Our Office</h4>
                <p className="text-slate-400">SCO 206, D Block, Phase 7<br/>Mohali 160055</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-surface-700 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Email Us</h4>
                <p className="text-slate-400"><a href="mailto:contact@futureranks.agency" className="hover:text-brand-400 transition-colors">contact@futureranks.agency</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border-brand-500/20">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Request Received!</h3>
              <p className="text-slate-400">Our team will be in touch within 24 hours to schedule your consultation.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-brand-400 hover:text-white font-medium text-sm transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Book your consultation</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-400">First Name</label>
                  <input required type="text" id="firstName" className="w-full bg-surface-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-400">Last Name</label>
                  <input required type="text" id="lastName" className="w-full bg-surface-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-slate-400">Work Email</label>
                <input required type="email" id="email" className="w-full bg-surface-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-1">
                <label htmlFor="company" className="text-sm font-medium text-slate-400">Company Name</label>
                <input type="text" id="company" className="w-full bg-surface-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Acme Corp" />
              </div>

              <div className="space-y-1 pb-4">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">How can we help?</label>
                <textarea required id="message" rows={4} className="w-full bg-surface-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Tell us about your current challenges..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg py-4 rounded-xl transition-all disabled:opacity-70 flex items-center justify-center"
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
