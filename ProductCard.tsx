import React from 'react';
import { Product } from '../types';
import * as LucideIcons from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as Record<string, React.FC<{ size?: number }>>)[
    product.icon.charAt(0).toUpperCase() + product.icon.slice(1)
  ] || LucideIcons.CircleDot;

  return (
    <div 
      className="bg-gradient-to-br from-[#00324e] to-[#002a40] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00bcd4]/10 hover:-translate-y-1 cursor-pointer group"
    >
      <div className="mb-4 bg-[#00bcd4]/20 p-3 rounded-full inline-block">
        <IconComponent size={28} className="text-[#00bcd4]" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00bcd4] transition-colors duration-300">
        {product.title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {product.description}
      </p>
      
      <div className="mt-4 flex justify-end">
        <button className="text-[#00bcd4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline">
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;