import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Quais protocolos de avaliação estão disponíveis?',
    answer: 'O sistema conta nativamente com COPSOQ II, COPSOQ - Dimensão, HSE-II e PROART. Você tem liberdade para escolher qual metodologia aplicar em cada ciclo.',
  },
  {
    question: 'O sistema emite o PGR automaticamente?',
    answer: 'Ele gera os relatórios técnicos e evidências necessárias para compor o capítulo de riscos psicossociais do seu PGR, facilitando a assinatura do engenheiro ou médico responsável.',
  },
  {
    question: 'A implementação demora?',
    answer: 'Não. O acesso é liberado imediatamente após a assinatura. Basta importar sua planilha de usuários e disparar as avaliações.',
  },
  {
    question: 'O sistema integra com meu ERP?',
    answer: 'Trabalhamos com importação direta de dados (planilhas .csv/.xlsx), o que garante compatibilidade universal e agilidade, sem depender da TI para integrações complexas.',
  },
  {
    question: 'Os dados são seguros e anônimos?',
    answer: 'Sim. Seguimos a LGPD à risca. O sistema impede a identificação individual em relatórios de grupo, garantindo a confiança do colaborador para responder.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black/20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Dúvidas Frequentes</h2>
          <p className="text-gray-500">Tudo o que você precisa saber para começar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary/50 bg-white/5' : 'border-white/5 bg-transparent hover:border-white/10'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium pr-8 transition-colors ${openIndex === index ? 'text-primary' : 'text-gray-300'}`}>{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
