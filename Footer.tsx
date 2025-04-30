import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#00324e] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">NexusOne</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your comprehensive financial services platform, offering banking, insurance, investing, rewards, 
              mobile data, and expert advice — all in one place.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">News & Media</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Licensing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00bcd4] transition-colors">FAIS Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#002a40] text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} NexusOne (Pty) Ltd. All rights reserved. Registered Financial Services Provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;