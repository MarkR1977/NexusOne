import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, Phone, Mail, MapPin, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear the error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 800);
    }
  };
  
  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0a1f]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="h-1 w-20 bg-[#00bcd4] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have a question? Need help getting started? We're here.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-[#00324e] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              {isSubmitted ? (
                <div className="bg-[#00bcd4]/10 border border-[#00bcd4] rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-[#00bcd4]/20 p-3">
                      <Check size={24} className="text-[#00bcd4]" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-gray-300">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#001a29] border ${
                        errors.name ? 'border-red-500' : 'border-[#00324e]'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-white`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#001a29] border ${
                        errors.email ? 'border-red-500' : 'border-[#00324e]'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-white`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-[#001a29] border ${
                        errors.message ? 'border-red-500' : 'border-[#00324e]'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-white resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#00bcd4] hover:bg-[#0288d1] text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
                  >
                    <Send size={18} className="mr-2" />
                    Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-[#00324e] p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00bcd4]/20 p-3 rounded-full">
                    <Mail size={20} className="text-[#00bcd4]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-300 mt-1">support@nexusone.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00bcd4]/20 p-3 rounded-full">
                    <Phone size={20} className="text-[#00bcd4]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-gray-300 mt-1">+27 87 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00bcd4]/20 p-3 rounded-full">
                    <MapPin size={20} className="text-[#00bcd4]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Visit Us</h4>
                    <p className="text-gray-300 mt-1">
                      NexusOne Head Office<br />
                      123 Nexus Boulevard<br />
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-white mb-4">Business Hours</h4>
                  <div className="bg-[#001a29] rounded-lg p-4">
                    <div className="flex justify-between py-2 border-b border-[#00324e]">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white">08:00 - 17:00 (SAST)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#00324e]">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white">09:00 - 13:00 (SAST)</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-300">Sunday & Holidays</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;