import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Thai Tech Spirit
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            อาหารเสริมงาดำคุณภาพสูง เพื่อสุขภาพที่ดีและผมดำสวยงาม
          </p>
          <Link 
            href="/products"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition inline-block shadow-lg hover:shadow-xl"
          >
            เลือกซื้อสินค้า 🛒
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ประโยชน์ของงาดำ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2">บำรุงร่างกาย</h3>
              <p className="text-gray-600">อุดมด้วยโปรตีนและแร่ธาตุ</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💇</div>
              <h3 className="text-xl font-bold mb-2">บำรุงผม</h3>
              <p className="text-gray-600">ทำให้ผมดกดำสวยงาม</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🦴</div>
              <h3 className="text-xl font-bold mb-2">แข็งแรง</h3>
              <p className="text-gray-600">เสริมกระดูกและฟัน</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">หัวใจ</h3>
              <p className="text-gray-600">ดีต่อหัวใจและหลอดเลือด</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            สินค้าแนะนำ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/products"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition inline-block font-bold"
            >
              ดูสินค้าทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ทำไมต้องเลือกเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">คุณภาพสูง</h3>
              <p className="text-gray-600">
                สินค้าทุกชิ้นผ่านการคัดสรรอย่างพิถีพิถัน
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">จัดส่งรวดเร็ว</h3>
              <p className="text-gray-600">
                จัดส่งทั่วไทย ได้รับสินค้าภายใน 2-3 วัน
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">ราคาย่อมเยา</h3>
              <p className="text-gray-600">
                ราคาที่คุ้มค่า พร้อมโปรโมชั่นดีๆ
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
