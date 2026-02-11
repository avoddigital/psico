import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Shield, 
  Users, 
  History, 
  Share2 
} from 'lucide-react';

const differentials = [
  {
    icon: LayoutDashboard,
    title: "Dashboards Interativos",
    description: "Visualize dados demográficos, cruzamentos de risco e indicadores em tempo real com filtros avançados."
  },
  {
    icon: FileText,
    title: "Relatórios Automáticos",
    description: "Gere o documento oficial da avaliação em PDF com um clique, pronto para auditorias e fiscalizações."
  },
  {
    icon: Users,
    title: "Gestão de Acessos",
    description: "Controle total sobre quem acessa os dados e relatórios com perfis de permissão personalizados."
  },
  {
    icon: Share2,
    title: "Distribuição Flexível",
    description: "Envie os links de avaliação para os colaboradores via E-mail, WhatsApp ou Gere QRCodes para murais."
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Mantenha o registro de todas as avaliações passadas e acompanhe a evolução dos indicadores."
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Ambiente seguro com criptografia de ponta e total conformidade com a LGPD para dados sensíveis."
  }
];

export function Differentials() {
  return (
    <section id="differentials" className="py-24 bg-[#0b1121] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mais do que apenas questionários
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma plataforma completa pensada para a realidade do RH e da Segurança do Trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0F172A]/50 border border-white/5 hover:border-primary/20 hover:bg-[#0F172A] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
