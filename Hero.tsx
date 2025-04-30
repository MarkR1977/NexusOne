import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onButtonClick: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-4 text-center bg-gradient-to-br from-[#0a0a1f] via-[#0a0a2f] to-[#00324e]">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-transparent to-[#0a0a1f] opacity-80"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
          <span className="block">One Platform.</span>
          <span className="block text-[#00bcd4]">Every Financial Solution.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed animate-fadeIn animation-delay-300">
          From everyday banking to global investing — NexusOne is your trusted financial partner.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-600">
          <button 
            onClick={() => onButtonClick('products')}
            className="px-8 py-4 bg-[#00bcd4] hover:bg-[#0288d1] text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
          >
            Explore Our Products
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button 
            onClick={() => onButtonClick('services')}
            className="px-8 py-4 bg-transparent border-2 border-[#00bcd4] hover:bg-[#00bcd4]/10 text-white rounded-lg font-medium transition-all duration-300"
          >
            Book Free Advice
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-[#00bcd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;