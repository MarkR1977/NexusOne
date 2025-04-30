import React from 'react';
import { services } from '../data/services';
import { Check, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-[#0a0a1f] to-[#001a29]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Financial Advice, Built Around You</h2>
          <div className="h-1 w-20 bg-[#00bcd4] mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-300 leading-relaxed mb-8">
              At NexusOne, we don't just offer products — we help you make the most of them. Our expert advisors work with you to create clear, practical strategies for your money, your business, and your future.
            </p>
            
            <ul className="space-y-4 mb-8">
              {services.map((service) => (
                <li key={service.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={18} className="text-[#00bcd4]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">{service.title}</h3>
                    <p className="text-gray-400 mt-1">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="px-6 py-3 bg-[#00bcd4] hover:bg-[#0288d1] text-white rounded-lg font-medium transition-all duration-300 flex items-center group">
              Talk to an Advisor
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/7821587/pexels-photo-7821587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Financial advisor with client" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-[#00324e]/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Personalized Guidance</h3>
                  <p className="text-gray-200">Our advisors create tailored financial strategies based on your unique needs and goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;