'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">ตะกร้าสินค้าว่างเปล่า</h1>
        <p className="text-gray-600 mb-8">ยังไม่มีสินค้าในตะกร้าของคุณ</p>
        <Link
          href="/products"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition inline-block"
        >
          เลือกซื้อสินค้า
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">ตะกร้าสินค้า</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b last:border-b-0 p-4 hover:bg-gray-50">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.category}</p>
                  <p className="text-yellow-600 font-bold mt-1">฿{item.price}</p>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="w-24 text-right">
                    <p className="font-bold text-gray-900">฿{item.price * item.quantity}</p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-bold w-8 h-8"
                    title="ลบสินค้า"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">สรุปคำสั่งซื้อ</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>จำนวนสินค้า:</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} ชิ้น</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>ราคารวม:</span>
                <span>฿{getCartTotal()}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>ค่าจัดส่ง:</span>
                <span className="text-green-600 font-bold">ฟรี!</span>
              </div>
              
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>ยอดรวมทั้งหมด:</span>
                  <span className="text-yellow-600">฿{getCartTotal()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push('/checkout')}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 rounded-lg text-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition shadow-lg hover:shadow-xl mb-4"
            >
              ดำเนินการชำระเงิน
            </button>

            <Link
              href="/products"
              className="block w-full text-center bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
            >
              เลือกซื้อสินค้าต่อ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

