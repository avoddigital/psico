import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[130px] -z-10 animate-pulse-glow" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-accent text-sm font-medium mb-8 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="bg-linear-to-r from-accent to-white bg-clip-text text-transparent">
                 Nova Era da Gestão de Riscos
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-8">
              Psicossocial <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-white drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                Inteligente
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed mx-auto">
              Diagnostique o clima organizacional e monitore fatores de risco com protocolos validados (COPSOQ, HSE-II, PROART). Gere evidências técnicas para o PGR com segurança jurídica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-20 justify-center w-full">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(14,165,233,0.5)] border border-primary/20 backdrop-blur-sm px-10 h-14 text-lg">
                Comece agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Holographic Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-6xl perspective-1000 group "
          >
             {/* Glow effect behind the image */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            <div className="relative rounded-3xl bg-[#0b1121] border border-white/10 shadow-2xl overflow-hidden aspect-video md:aspect-21/9 flex flex-col">
               {/* Window Controls */}
               <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-6 gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  <div className="ml-4 h-6 w-96 bg-white/5 rounded-full border border-white/5 hidden md:block"></div>
               </div>
               
               {/* Dashboard Content */}
               <div className="p-8 md:p-12 flex items-center justify-center h-full relative z-10 bg-grid-white/[0.02] bg-size-[40px_40px]">
                  <div className="flex gap-8 w-full max-w-4xl">
                     {/* Card 1 */}
                     <div className="flex-1 h-64 rounded-2xl bg-[#0F172A]/80 border border-white/10 p-6 relative overflow-hidden backdrop-blur-sm hover:border-primary/30 transition-colors group/card">
                        <div className="flex justify-between items-start mb-4">
                           <div className="p-3 rounded-xl bg-primary/10 text-primary">
                              <Activity className="w-6 h-6" />
                           </div>
                           <span className="text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2 py-1 rounded-lg">+12.5%</span>
                        </div>
                        <div className="text-4xl font-bold text-white mb-1">98%</div>
                        <div className="text-sm text-gray-400">Índice de Saúde Mental</div>
                        
                        {/* Chart Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-50 group-hover/card:opacity-80 transition-opacity">
                           <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-primary stroke-2">
                              <path d="M0 30 Q 10 25, 20 28 T 40 20 T 60 25 T 80 10 T 100 15" />
                              <path d="M0 30 L 0 40 L 100 40 L 100 15" className="fill-primary/10 stroke-none" />
                           </svg>
                        </div>
                     </div>

                     {/* Card 2 */}
                     <div className="flex-1 h-64 rounded-2xl bg-[#0F172A]/80 border border-white/10 p-6 relative overflow-hidden backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                           <div className="flex flex-col">
                              <h3 className="text-white font-medium mb-1">Acidentes Zero</h3>
                              <p className="text-xs text-gray-500">Últimos 12 meses</p>
                           </div>
                           <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        </div>
                        <div className="flex items-end gap-2 h-32 mt-auto">
                           {[35, 60, 40, 75, 50, 85, 45, 90, 65, 80].map((h, i) => (
                              <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-linear-to-t from-emerald-500/10 to-emerald-500/40 rounded-t-sm hover:to-emerald-500 transition-all duration-300"></div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Reflection/Shine */}
               <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
            
            {/* Stats below dashboard */}
            <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/5 pt-8 max-w-3xl mx-auto">
               <div>
                  <h4 className="text-3xl font-bold text-white mb-1">10x</h4>
                  <p className="text-gray-500 text-sm">Mais Rápido na Gestão</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                  <p className="text-gray-500 text-sm">Compliance NR-01</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-white mb-1">AI</h4>
                  <p className="text-gray-500 text-sm">Análise Preditiva</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
