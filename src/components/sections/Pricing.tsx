import { Button } from '@/components/ui/Button';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'MENSAL',
    strikethrough: 'De R$ 1.500,00',
    price: 'R$ 3,90',
    subtitle: 'Valor por avaliação unitária',
    features: [
      '300 avaliações por mês',
      'Total: R$ 1.170,00/mês à vista',
      'Ideal para quem quer começar.'
    ],
    cta: 'Contratar Agora',
    popular: false,
    highlight: false,
  },
  {
    name: 'SEMESTRAL',
    badge: 'POPULAR',
    strikethrough: 'De R$ 6.000,00',
    price: 'R$ 1,80',
    subtitle: 'Valor por avaliação unitária',
    features: [
      'Até 3000 avaliações no semestre',
      'Total: R$ 5.400,00 à vista',
      'ou 6x de R$ 999,90',
      'Economize 43% e tenha previsibilidade.'
    ],
    cta: 'Contratar Agora',
    popular: true,
    highlight: false,
  },
  {
    name: 'ANUAL REDUZIDO',
    badge: 'RECOMENDADO PELOS ESPECIALISTAS',
    strikethrough: 'De R$ 12.000,00',
    price: 'R$ 0,70',
    subtitle: 'Valor por avaliação unitária',
    features: [
      'Até 12.000 avaliações no ano',
      'Total: R$ 8.400,00 à vista',
      'ou 12x de R$ 868,75',
      'O menor custo por avaliação. Lucro máximo.'
    ],
    cta: 'QUERO ECONOMIZAR',
    popular: false,
    highlight: true,
    footer: '⚡ OFERTA POR TEMPO LIMITADO'
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
       {/* Background */}
       <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
       
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Investimento <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">Estratégico</span>
          </h2>
          <p className="text-lg text-gray-400">
            Planos escaláveis que crescem com sua operação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 backdrop-blur-md transition-all duration-300 flex flex-col h-full ${
                plan.highlight 
                  ? 'bg-[#0f172a] border-2 border-primary shadow-[0_0_40px_rgba(14,165,233,0.3)] scale-105 z-10' 
                  : 'bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/8'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg tracking-wider uppercase flex items-center gap-1 w-max ${
                  plan.highlight 
                    ? 'bg-linear-to-r from-primary to-accent text-white' 
                    : 'bg-white/10 text-gray-300 border border-white/10'
                }`}>
                  {plan.highlight && <Zap className="w-3 h-3 fill-current" />}
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-6 mt-2">
                <h3 className={`text-lg font-bold mb-2 ${plan.highlight ? 'text-primary' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm line-through">{plan.strikethrough}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">{plan.subtitle}</p>
              </div>
              
              <div className="h-px bg-white/10 w-full mb-6"></div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.highlight ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'
                    }`}>
                        <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 text-base ${
                  plan.highlight 
                    ? 'bg-linear-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg shadow-primary/25 font-bold' 
                    : 'bg-transparent hover:bg-white/5 text-white border border-white/20'
                }`}
              >
                {plan.cta}
              </Button>

              {plan.footer && (
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-gray-400 flex items-center justify-center gap-1">
                     {plan.footer}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Banner */}
        <div className="rounded-3xl p-px bg-linear-to-r from-primary/50 via-white/10 to-primary/50 mx-auto max-w-5xl">
            <div className="bg-background rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise Custom</h3>
                    <p className="text-gray-400">Soluções arquitetadas para operações complexas e alto volume de dados.</p>
                </div>
                <div className="relative z-10">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:border-primary/50 transition-colors">
                        Falar com Engenharia
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
