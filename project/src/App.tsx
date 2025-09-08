import React from 'react';
import { 
  Truck, 
  Building, 
  Calendar, 
  Brush, 
  Fuel, 
  Smartphone,
  ExternalLink
} from 'lucide-react';

const services = [
  {
    title: "Transportes",
    icon: Truck,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdH4QmZNNBJ5pInXNNFukZM3D08Ate9saLJUkFSbiG5VPngbw/viewform"
  },
  {
    title: "Ampliação Pátio",
    icon: Building,
    url: "https://docs.google.com/forms/d/e/1FAIpQLScNmhZ9cxE55qaJvXMfO76iaE8fuhfzR7GnwpqjJfdprawxZw/viewform"
  },
  {
    title: "Sábado, Domingo e Feriado",
    icon: Calendar,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSffUdHyef7GdQtiXrS6UGGnlYiuSxfVPdrNgK4euiDunxU4mg/viewform"
  },
  {
    title: "Pintura e Lavagens",
    icon: Brush,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeDFxLN9Cvr6w-z_Oar7ZURzItVq5OFarGdHe_a_S6T5vE_ug/viewform?usp=send_form"
  },
  {
    title: "Entregas Comboio de Diesel",
    icon: Fuel,
    url: "https://forms.gle/iJqatdwQ6FGA1b4S7"
  },
  {
    title: "Aplicativo Gontijo Atualizado",
    icon: Smartphone,
    url: "https://drive.google.com/file/d/1DSa7nH3qGah5Sc38bCcsrfoWGIP-fqYu/view?usp=sharing"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] md:w-full md:h-full bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-full animate-pulse opacity-10 transform rotate-45"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] md:w-full md:h-full bg-gradient-to-tl from-red-600 via-red-400 to-red-800 rounded-full animate-pulse opacity-10 transform -rotate-45 animation-delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-4 md:h-4 bg-red-500 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 md:w-6 md:h-6 bg-red-600 rounded-full animate-bounce opacity-20 animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full animate-bounce opacity-40 animation-delay-1500"></div>
        <div className="absolute top-1/6 right-1/4 w-3 h-3 md:w-5 md:h-5 bg-red-700 rounded-full animate-bounce opacity-25 animation-delay-2000"></div>
        
        {/* Moving waves */}
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-red-50 to-transparent opacity-50">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path 
              d="M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,60C960,70,1056,80,1152,75C1248,70,1344,50,1392,40L1440,30V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V60Z" 
              fill="rgba(239, 68, 68, 0.1)"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-8 md:py-12 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-red-600 mb-4 animate-fade-in leading-tight">
            Portal de Serviços
          </h1>
          <div className="w-20 md:w-32 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-base md:text-xl text-gray-700 mt-4 md:mt-6 max-w-2xl mx-auto px-2">
            Acesse todos os nossos serviços de forma rápida e prática
          </p>
        </header>

        {/* Services Grid */}
        <main className="px-4 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-100 overflow-hidden"
                >
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-red-50 rounded-lg md:rounded-xl mb-4 md:mb-6 group-hover:bg-red-100 transition-colors duration-300">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <button
                      onClick={() => window.open(service.url, '_blank')}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4 text-sm md:text-base"
                    >
                      Acessar Serviço
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                  
                  <div className="h-1.5 md:h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 md:py-8 px-4 border-t border-red-100">
          <p className="text-gray-600 text-sm md:text-base">
            © 2025 Portal de Serviços - Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;