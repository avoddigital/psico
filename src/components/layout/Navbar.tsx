import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Vantagens', href: '#differentials' },
    { name: 'Planos', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
       <div
         className={cn(
           'rounded-full border transition-all duration-300 px-6 py-3 flex items-center justify-between',
           isScrolled 
             ? 'bg-[#0f172a]/80 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
             : 'bg-[#0f172a]/40 backdrop-blur-sm border-white/5'
         )}
       >
         {/* Logo */}
         <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
           <img src="/logo.png" alt="Psicossocial Logo" className="w-8 h-8 object-contain" />
           <span className="text-lg font-bold tracking-tight text-white">
             Avod Psico
           </span>
         </a>

         {/* Desktop Nav */}
         <nav className="hidden md:flex items-center gap-8">
           {navLinks.map((link) => (
             <a
               key={link.name}
               href={link.href}
               className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
             >
               {link.name}
             </a>
           ))}
         </nav>

         {/* Actions */}
         <div className="hidden md:flex items-center gap-6">
           <a 
             href="https://app.psico.avoddigital.com.br" 
             target="_blank"
             rel="noopener noreferrer"
             className="text-sm font-medium text-white hover:text-primary transition-colors"
           >
             Entrar
           </a>
           <Button size="sm" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-primary/20 px-6">
             Começar Agora
           </Button>
         </div>

         {/* Mobile Toggle */}
         <button
           className="md:hidden p-2 text-gray-300 hover:text-white"
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
         >
           {isMobileMenuOpen ? <X /> : <Menu />}
         </button>
       </div>

       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, scale: 0.95, y: -10 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: -10 }}
             className="absolute top-full left-0 right-0 mt-2 p-4 rounded-3xl bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4 overflow-hidden"
           >
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-sm font-medium text-gray-300 hover:text-white p-3 rounded-xl hover:bg-white/5 transition-all"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
             ))}
             <div className="h-px bg-white/10 my-2"></div>
             <a 
               href="https://app.psico.avoddigital.com.br" 
               target="_blank"
               rel="noopener noreferrer"
               className="text-center text-sm font-medium text-gray-300 hover:text-white p-3"
             >
               Entrar
             </a>
             <Button className="w-full rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
               Começar Agora
             </Button>
           </motion.div>
         )}
       </AnimatePresence>
    </header>
  );
}
