export function Footer() {
  return (
    <footer className="bg-black/40 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Psicossocial Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold tracking-tight text-white">
                Psicossocial
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Redefinindo os padrões de segurança ocupacional com inteligência e design.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-primary transition-colors">Tecnologia</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Companhia</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Psicossocial. Engineered for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
