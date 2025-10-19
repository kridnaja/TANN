'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import { Product } from '@/types/product';

export default function AdminPage() {
  const [productList, setProductList] = useState<Product[]>(products);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    stock: 0,
    benefits: [],
    ingredients: []
  });

  const handleEdit = (product: Product) => {
    setIsEditing(true);
    setEditingProduct(product);
    setFormData(product);
  };

  const handleDelete = (productId: string) => {
    if (confirm('คุณต้องการลบสินค้านี้หรือไม่?')) {
      setProductList(productList.filter(p => p.id !== productId));
      alert('ลบสินค้าเรียบร้อยแล้ว');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      // แก้ไขสินค้า
      setProductList(productList.map(p => 
        p.id === editingProduct.id ? { ...formData as Product } : p
      ));
      alert('แก้ไขสินค้าเรียบร้อยแล้ว');
    } else {
      // เพิ่มสินค้าใหม่
      const newProduct: Product = {
        ...(formData as Product),
        id: `${Date.now()}`
      };
      setProductList([...productList, newProduct]);
      alert('เพิ่มสินค้าเรียบร้อยแล้ว');
    }

    setIsEditing(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      price: 0,
      image: '',
      category: '',
      stock: 0,
      benefits: [],
      ingredients: []
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      price: 0,
      image: '',
      category: '',
      stock: 0,
      benefits: [],
      ingredients: []
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          จัดการสินค้า <span className="text-lg md:text-2xl text-gray-600">(Admin)</span>
        </h1>
        <button
          onClick={() => setIsEditing(true)}
          className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-4 md:px-6 py-3 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg"
        >
          + เพิ่มสินค้าใหม่
        </button>
      </div>

      {/* แบบฟอร์มเพิ่ม/แก้ไขสินค้า */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg p-4 md:p-8 max-w-2xl w-full my-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
              {editingProduct ? 'แก้ไขสินค้า' : 'เพิ่มสินค้าใหม่'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">ชื่อสินค้า *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">คำอธิบาย *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">ราคา (บาท) *</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    required
                    min="0"
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">คงเหลือ *</label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                    required
                    min="0"
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">หมวดหมู่ *</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="เช่น ผงงาดำ, เครื่องดื่ม"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">URL รูปภาพ *</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">
                  ประโยชน์ (แยกด้วย | )
                </label>
                <input
                  type="text"
                  value={formData.benefits?.join(' | ')}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value.split(' | ') })}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="ประโยชน์ 1 | ประโยชน์ 2"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm md:text-base">
                  ส่วนประกอบ (แยกด้วย | )
                </label>
                <input
                  type="text"
                  value={formData.ingredients?.join(' | ')}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value.split(' | ') })}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="ส่วนประกอบ 1 | ส่วนประกอบ 2"
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition"
                >
                  {editingProduct ? 'บันทึก' : 'เพิ่มสินค้า'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-gray-300 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-400 transition"
                >
                  ยกเลิก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* รายการสินค้า - Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">รูปภาพ</th>
                <th className="px-4 py-3 text-left">ชื่อสินค้า</th>
                <th className="px-4 py-3 text-left">หมวดหมู่</th>
                <th className="px-4 py-3 text-right">ราคา</th>
                <th className="px-4 py-3 text-center">คงเหลือ</th>
                <th className="px-4 py-3 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product, index) => (
                <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3">
                    <div className="relative w-16 h-16">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 font-bold text-gray-900">{product.name}</td>
                  <td className="px-4 py-3 text-gray-600">{product.category}</td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">฿{product.price}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-sm font-bold ${
                      product.stock > 20 ? 'bg-green-100 text-green-700' :
                      product.stock > 0 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-bold"
                      >
                        แก้ไข
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-bold"
                      >
                        ลบ
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* รายการสินค้า - Mobile Card View */}
      <div className="md:hidden space-y-4">
        {productList.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex p-4">
              {/* รูปภาพ */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* ข้อมูลสินค้า */}
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-gray-900">฿{product.price}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    product.stock > 20 ? 'bg-green-100 text-green-700' :
                    product.stock > 0 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    คงเหลือ {product.stock}
                  </span>
                </div>
              </div>
            </div>

            {/* ปุ่มจัดการ */}
            <div className="flex border-t border-gray-200">
              <button
                onClick={() => handleEdit(product)}
                className="flex-1 bg-blue-500 text-white py-3 font-bold hover:bg-blue-600 transition flex items-center justify-center space-x-2"
              >
                <span>✏️</span>
                <span>แก้ไข</span>
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="flex-1 bg-red-500 text-white py-3 font-bold hover:bg-red-600 transition flex items-center justify-center space-x-2 border-l border-red-600"
              >
                <span>🗑️</span>
                <span>ลบ</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* หมายเหตุ */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-xs md:text-sm text-gray-700">
          <strong>หมายเหตุ:</strong> นี่เป็นหน้า Admin สำหรับจัดการสินค้า ในระบบจริงควรมีการยืนยันตัวตนก่อนเข้าถึง
          และข้อมูลควรถูกเก็บในฐานข้อมูล
        </p>
      </div>
    </div>
  );
}
