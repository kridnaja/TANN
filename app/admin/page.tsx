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
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">จัดการสินค้า (Admin)</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg"
        >
          + เพิ่มสินค้าใหม่
        </button>
      </div>

      {/* แบบฟอร์มเพิ่ม/แก้ไขสินค้า */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full my-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              {editingProduct ? 'แก้ไขสินค้า' : 'เพิ่มสินค้าใหม่'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">ชื่อสินค้า *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">คำอธิบาย *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">ราคา (บาท) *</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">จำนวนคงเหลือ *</label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">หมวดหมู่ *</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="เช่น ผงงาดำ, เครื่องดื่ม"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">URL รูปภาพ *</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  ประโยชน์ (แยกด้วยเครื่องหมาย | )
                </label>
                <input
                  type="text"
                  value={formData.benefits?.join(' | ')}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value.split(' | ') })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="ประโยชน์ 1 | ประโยชน์ 2 | ประโยชน์ 3"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  ส่วนประกอบ (แยกด้วยเครื่องหมาย | )
                </label>
                <input
                  type="text"
                  value={formData.ingredients?.join(' | ')}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value.split(' | ') })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="ส่วนประกอบ 1 | ส่วนประกอบ 2"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition"
                >
                  {editingProduct ? 'บันทึกการแก้ไข' : 'เพิ่มสินค้า'}
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

      {/* รายการสินค้า */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-sm text-gray-700">
          <strong>หมายเหตุ:</strong> นี่เป็นหน้า Admin สำหรับจัดการสินค้า ในระบบจริงควรมีการยืนยันตัวตนก่อนเข้าถึง
          และข้อมูลควรถูกเก็บในฐานข้อมูล
        </p>
      </div>
    </div>
  );
}

