'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { href: '/', label: 'หน้าแรก', icon: '🏠' },
    { href: '/products', label: 'สินค้า', icon: '🛍️' },
    { href: '/about', label: 'เกี่ยวกับเรา', icon: 'ℹ️' },
    { href: '/admin', label: 'Admin', icon: '⚙️' },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-2xl md:text-3xl">🖤</div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold">TANN</h1>
              <p className="text-xs text-gray-300">สุขภาพดี ผมดำสวย</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold">TANN</h1>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-yellow-400 transition ${
                  isActive(item.href) ? 'text-yellow-400 font-bold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/cart" 
              className="relative hover:text-yellow-400 transition"
            >
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Cart Icon for Mobile */}
            <Link 
              href="/cart" 
              className="relative hover:text-yellow-400 transition"
            >
              <span className="text-3xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition ${
                    isActive(item.href) ? 'bg-gray-700 text-yellow-400 font-bold' : ''
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg">{item.label}</span>
                </Link>
              ))}
              <Link
                href="/cart"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition relative ${
                  isActive('/cart') ? 'bg-gray-700 text-yellow-400 font-bold' : ''
                }`}
              >
                <span className="text-2xl">🛒</span>
                <span className="text-lg">ตะกร้าสินค้า</span>
                {cartCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-sm rounded-full h-7 w-7 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
