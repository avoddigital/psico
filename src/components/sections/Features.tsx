import { motion } from 'framer-motion';
import { FileSpreadsheet, BarChart3, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Diagnóstico Inteligente',
    description: 'Abandone formulários manuais. Use protocolos validados para mapear riscos com rapidez e precisão.',
    icon: FileSpreadsheet,
    color: 'bg-blue-500',
    features: [
      {
        id: 1,
        title: 'Multi-Protocolo Nativo',
        description: 'Já vem com COPSOQ II, Dimensão, HSE-II e PROART prontos para uso.',
      },
      {
        id: 2,
        title: 'Importação Simplificada',
        description: 'Sem integrações complexas. Importe sua planilha de colaboradores e comece imediatamente.',
      },
      {
        id: 3,
        title: 'Coleta Automatizada',
        description: 'Envio de links seguros para os colaboradores via e-mail ou WhatsApp corporativo.',
      },
    ],
    mockup: (
      <div className="relative mx-auto max-w-[500px]">
        {/* Laptop Base */}
        <div className="relative z-10 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden aspect-video">
           <div className="absolute top-0 w-full h-6 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
           </div>
           <div className="p-6 mt-6 grid gap-4">
              <div className="h-4 w-1/3 bg-gray-700 rounded animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-24 bg-gray-800/50 rounded border border-gray-700 p-3">
                    <div className="w-8 h-8 bg-primary/20 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-700 rounded"></div>
                 </div>
                 <div className="h-24 bg-gray-800/50 rounded border border-gray-700 p-3">
                    <div className="w-8 h-8 bg-primary/20 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-700 rounded"></div>
                 </div>
              </div>
              <div className="h-32 bg-gray-800/50 rounded border border-gray-700 flex items-center justify-center text-gray-600 text-xs">
                 Painel Administrativo
              </div>
           </div>
        </div>
        
        {/* Phone Overlay */}
        <div className="absolute -right-8 -bottom-12 z-20 w-[140px] h-[280px] bg-black rounded-4xl border-4 border-gray-800 shadow-2xl flex flex-col overflow-hidden">
           <div className="h-6 bg-black flex justify-center items-center">
              <div className="w-16 h-4 bg-black rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-30"></div>
           </div>
           <div className="flex-1 bg-white p-3 flex flex-col gap-3">
              <div className="h-8 w-8 bg-primary rounded-lg self-center mt-4"></div>
              <div className="h-2 w-20 bg-gray-200 rounded self-center"></div>
              <div className="mt-4 space-y-2">
                 <div className="h-10 bg-gray-100 rounded-lg"></div>
                 <div className="h-10 bg-gray-100 rounded-lg"></div>
              </div>
              <div className="mt-auto h-10 bg-primary/20 rounded-lg w-full"></div>
           </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Ação e Monitoramento',
    description: 'Transforme dados subjetivos em planos de ação objetivos para reduzir o adoecimento.',
    icon: BarChart3,
    color: 'bg-purple-500',
    features: [
      {
        id: 4,
        title: 'Planos de Ação Sugeridos',
        description: 'O sistema recomenda intervenções baseadas nos riscos identificados em cada setor.',
      },
      {
        id: 5,
        title: 'Workflow de Aprovação',
        description: 'Gerencie o status de cada ação (A Fazer, Em Andamento, Concluído) com rastreabilidade.',
      },
      {
        id: 6,
        title: 'Dashboards Executivos',
        description: 'Acompanhe a evolução dos indicadores de saúde mental e clima em tempo real.',
      },
    ],
    mockup: (
      <div className="relative mx-auto max-w-[500px]">
         <div className="relative z-10 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden aspect-video transform rotate-1 hover:rotate-0 transition-transform duration-500">
           <div className="absolute top-0 w-full h-6 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4">
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              </div>
              <div className="text-[10px] text-gray-500">Dashboard Executivo</div>
           </div>
           <div className="p-6 grid grid-cols-3 gap-4 h-full content-center">
              {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="h-2 w-10 bg-gray-700 rounded"></div>
                 </div>
              ))}
              <div className="col-span-3 h-24 bg-gray-800/30 rounded-lg border border-gray-700 mt-2 flex items-end justify-around px-4 pb-2">
                 {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-6 bg-purple-500/50 rounded-t hover:bg-purple-500 transition-colors"></div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Compliance e Evidências',
    description: 'Blindagem jurídica para sua empresa. Gere as evidências técnicas exigidas pela NR-1 e eSocial.',
    icon: ShieldCheck,
    color: 'bg-emerald-500',
    features: [
      {
        id: 7,
        title: 'Anonimato Técnico Garantido',
        description: 'Bloqueio automático de identificação individual, garantindo adesão e conformidade LGPD.',
      },
      {
        id: 8,
        title: 'Relatórios para o PGR',
        description: 'Documentação técnica formatada, pronta para anexar ao seu Programa de Gerenciamento de Riscos.',
      },
      {
        id: 9,
        title: 'Histórico Imutável',
        description: 'Registro seguro de todos os ciclos de avaliação para eventuais auditorias ou fiscalizações.',
      },
    ],
    mockup: (
      <div className="relative mx-auto max-w-[500px]">
         <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden aspect-4/3 p-8 border border-gray-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col gap-4">
               <div className="w-20 h-20 bg-emerald-100 rounded-full self-center flex items-center justify-center text-emerald-600 mb-2">
                  <ShieldCheck className="w-10 h-10" />
               </div>
               <div className="h-6 w-3/4 bg-gray-100 rounded self-center"></div>
               <div className="h-4 w-1/2 bg-gray-50 rounded self-center"></div>
               
               <div className="mt-auto flex justify-between items-center pt-6 border-t border-gray-100">
                  <div className="flex gap-2">
                     <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                     <div className="space-y-1">
                        <div className="w-16 h-2 bg-gray-200 rounded"></div>
                        <div className="w-10 h-2 bg-gray-100 rounded"></div>
                     </div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-100">
                     VALIDADO
                  </div>
               </div>
            </div>
         </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-background">
      {/* Dashed Center Line (Desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/5 -translate-x-1/2 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Recursos Avançados
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que o <span className="text-primary">Psicossocial</span> faz?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ferramentas profissionais para mapear, documentar e otimizar a gestão de fatores psicossociais da sua empresa.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative">
                {/* Step Number Badge */}
                <div className={`absolute top-0 ${index % 2 === 0 ? '-left-4 md:-right-12' : '-left-4 md:-left-12'} z-20 w-12 h-12 rounded-full bg-white text-gray-900 font-bold flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] text-xl border-4 border-background`}>
                   {step.id}
                </div>
                
                {step.mockup}
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                   <div className={`p-3 rounded-2xl ${step.color} bg-opacity-20 text-white`}>
                      <step.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                </div>

                <div className="space-y-6 pl-4">
                  {step.features.map((feature) => (
                    <div key={feature.id} className="flex gap-4 group">
                      <div className={`w-8 h-8 rounded-full ${step.color} bg-opacity-10 flex items-center justify-center shrink-0 mt-1 font-bold text-sm ${step.color.replace('bg-', 'text-')} border border-${step.color.replace('bg-', '')}/20`}>
                        {feature.id}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
