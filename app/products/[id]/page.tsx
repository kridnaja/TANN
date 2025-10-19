'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">ไม่พบสินค้า</h1>
        <button 
          onClick={() => router.push('/products')}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          กลับไปหน้าสินค้า
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`เพิ่ม ${product.name} ${quantity} ชิ้นลงตะกร้าแล้ว!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => router.back()}
        className="mb-6 text-gray-600 hover:text-gray-900 flex items-center"
      >
        ← กลับ
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
            {product.category}
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">฿{product.price}</span>
            <p className="text-sm text-gray-500 mt-2">คงเหลือ: {product.stock} ชิ้น</p>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900">ประโยชน์:</h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-gray-900">ส่วนประกอบ:</h3>
            <p className="text-gray-700">{product.ingredients.join(', ')}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold text-gray-900">จำนวน:</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
              >
                -
              </button>
              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 rounded-lg text-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            🛒 เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  );
}

