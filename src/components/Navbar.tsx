import { useState, useEffect } from 'react';
import { Menu, X, BarChart, Zap } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="scale-75 origin-left md:scale-100">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Book Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t-0 p-6 flex flex-col gap-4">
          <a href="#features" className="text-slate-300 font-medium py-2 hover:text-white">Features</a>
          <a href="#how-it-works" className="text-slate-300 font-medium py-2 hover:text-white">How it Works</a>
          <a href="#pricing" className="text-slate-300 font-medium py-2 hover:text-white">Pricing</a>
          <hr className="border-slate-800 my-2" />
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-brand-600 text-white text-center py-3 rounded-xl font-medium mt-2">
            Book Call
          </a>
        </div>
      )}
    </header>
  );
}
