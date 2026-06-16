import { LinkedinIcon } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 relative">
             <div className="col-span-2 md:col-span-1">
                 <div className="block mb-6 scale-[0.6] origin-left -ml-4 md:scale-[0.8] md:ml-0">
                     <Logo />
                 </div>
                 <p className="mt-4 text-sm text-slate-400">
                    Delivering cutting-edge AI SEO, development, and data-driven marketing solutions.
                 </p>
                 <div className="mt-6 space-y-2 text-sm text-slate-400">
                    <p>SCO 206, D Block, Phase 7</p>
                    <p>Mohali 160055</p>
                    <p className="pt-2"><a href="mailto:contact@futureranks.agency" className="hover:text-brand-400 transition-colors">contact@futureranks.agency</a></p>
                 </div>
             </div>
             <div>
                <h4 className="text-white font-medium mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-white font-medium mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                </ul>
             </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} FutureRanks.agency. All rights reserved.
            </p>
            <div className="flex gap-4">
                <a href="https://linkedin.com/company/futureranks" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0A66C2] transition-colors"><span className="sr-only">LinkedIn</span><LinkedinIcon className="w-5 h-5"/></a>
            </div>
        </div>
      </div>
    </footer>
  );
}
