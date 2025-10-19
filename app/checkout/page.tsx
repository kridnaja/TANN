'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('transfer');

  if (cart.length === 0) {
    router.push('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // สร้างคำสั่งซื้อ
    const orderId = `ORD${Date.now()}`;
    
    alert(`คำสั่งซื้อของคุณเสร็จสิ้น!\n\nหมายเลขคำสั่งซื้อ: ${orderId}\n\nเราจะติดต่อกลับภายใน 24 ชั่วโมง`);
    
    clearCart();
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">ชำระเงิน</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {/* ข้อมูลผู้สั่งซื้อ */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">ข้อมูลผู้สั่งซื้อ</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    ชื่อ-นามสกุล *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="กรอกชื่อ-นามสกุล"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    อีเมล *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    เบอร์โทรศัพท์ *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="0xx-xxx-xxxx"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    ที่อยู่จัดส่ง *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="กรอกที่อยู่สำหรับจัดส่งสินค้า"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    หมายเหตุ (ถ้ามี)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="ข้อความเพิ่มเติม"
                  />
                </div>
              </div>
            </div>

            {/* วิธีการชำระเงิน */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">วิธีการชำระเงิน</h2>
              
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={paymentMethod === 'transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-yellow-400"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">โอนเงินผ่านธนาคาร</p>
                    <p className="text-sm text-gray-600">โอนเงินและส่งหลักฐานการโอน</p>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-yellow-400"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">เก็บเงินปลายทาง (COD)</p>
                    <p className="text-sm text-gray-600">ชำระเงินเมื่อได้รับสินค้า</p>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="promptpay"
                    checked={paymentMethod === 'promptpay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-yellow-400"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">พร้อมเพย์</p>
                    <p className="text-sm text-gray-600">สแกน QR Code พร้อมเพย์</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">สรุปคำสั่งซื้อ</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-bold text-gray-900">
                      ฿{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>ราคารวม:</span>
                  <span>฿{getCartTotal()}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>ค่าจัดส่ง:</span>
                  <span className="text-green-600 font-bold">ฟรี!</span>
                </div>
                
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t">
                  <span>ยอดรวมทั้งหมด:</span>
                  <span className="text-yellow-600">฿{getCartTotal()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 rounded-lg text-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition shadow-lg hover:shadow-xl mt-6"
              >
                ยืนยันคำสั่งซื้อ
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300 transition mt-3"
              >
                ย้อนกลับ
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

