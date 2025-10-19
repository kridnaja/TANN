'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  
  const categories = ['ทั้งหมด', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'ทั้งหมด' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        สินค้าทั้งหมด
      </h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-bold transition ${
              selectedCategory === category
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">ไม่พบสินค้าในหมวดหมู่นี้</p>
        </div>
      )}
    </div>
  );
}

