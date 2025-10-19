'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl">🖤</div>
            <div>
              <h1 className="text-2xl font-bold">TANN</h1>
              <p className="text-xs text-gray-300">สุขภาพดี ผมดำสวย</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition">
              หน้าแรก
            </Link>
            <Link href="/products" className="hover:text-yellow-400 transition">
              สินค้า
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition">
              เกี่ยวกับเรา
            </Link>
            <Link href="/admin" className="hover:text-yellow-400 transition">
              Admin
            </Link>
            <Link 
              href="/cart" 
              className="relative hover:text-yellow-400 transition flex items-center space-x-1"
            >
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

