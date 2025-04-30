import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 px-4 bg-[#0a0a1f]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Products</h2>
          <div className="h-1 w-20 bg-[#00bcd4] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            From everyday banking to international investments, we provide comprehensive financial solutions in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;