export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        เกี่ยวกับเรา
      </h1>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-12 mb-12 text-center">
        <div className="text-6xl mb-4">🖤</div>
        <h2 className="text-3xl font-bold mb-4">งาดำออนไลน์</h2>
        <p className="text-xl text-gray-300">
          ผู้นำด้านอาหารเสริมงาดำคุณภาพสูงในประเทศไทย
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">เรื่องราวของเรา</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            งาดำออนไลน์ เกิดจากความตั้งใจที่จะนำเสนออาหารเสริมงาดำคุณภาพสูง
            เพื่อสุขภาพที่ดีและผมดำสวยงามให้กับคนไทย
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            เราคัดสรรเฉพาะงาดำคุณภาพดีที่สุด ผ่านกระบวนการผลิตที่ได้มาตรฐาน
            และตรวจสอบคุณภาพอย่างเข้มงวด
          </p>
          <p className="text-gray-700 leading-relaxed">
            ด้วยประสบการณ์กว่า 10 ปี เรามุ่งมั่นที่จะเป็นผู้นำในการส่งเสริม
            การบริโภคงาดำเพื่อสุขภาพที่ดีขึ้น
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">วิสัยทัศน์และค่านิยม</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-2xl mr-3">🎯</span>
              <div>
                <h4 className="font-bold text-gray-900">คุณภาพเป็นหนึ่ง</h4>
                <p className="text-gray-600">คัดสรรสินค้าคุณภาพสูงเท่านั้น</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">❤️</span>
              <div>
                <h4 className="font-bold text-gray-900">ใส่ใจลูกค้า</h4>
                <p className="text-gray-600">บริการด้วยใจ รวดเร็ว ปลอดภัย</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🌱</span>
              <div>
                <h4 className="font-bold text-gray-900">เป็นมิตรต่อสิ่งแวดล้อม</h4>
                <p className="text-gray-600">ใช้บรรจุภัณฑ์รีไซเคิล</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Benefits of Black Sesame */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          ทำไมต้องงาดำ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">💇</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">บำรุงผมดำ</h3>
            <p className="text-gray-600">
              อุดมด้วยเมลานิน ช่วยให้ผมดกดำสวยงาม ลดผมหงอกก่อนวัย
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🦴</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">แคลเซียมสูง</h3>
            <p className="text-gray-600">
              มีแคลเซียมสูงกว่านมถึง 6 เท่า เสริมสร้างกระดูกและฟันให้แข็งแรง
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">💪</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">โปรตีนเต็มร้อย</h3>
            <p className="text-gray-600">
              โปรตีนจากพืช ช่วยสร้างและซ่อมแซมกล้ามเนื้อ
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">บำรุงหัวใจ</h3>
            <p className="text-gray-600">
              มีไขมันดี โอเมก้า 3 และ 6 ช่วยลดคอเลสเตอรอล
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">บำรุงสมอง</h3>
            <p className="text-gray-600">
              เพิ่มความจำ กระตุ้นการทำงานของสมอง
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">ต่อต้านอนุมูลอิสระ</h3>
            <p className="text-gray-600">
              อุดมด้วยสารต้านอนุมูลอิสระ ชะลอวัย
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">ติดต่อเรา</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-xl mb-2">โทรศัพท์</h3>
            <p className="text-gray-300">02-xxx-xxxx</p>
            <p className="text-gray-300">08x-xxx-xxxx</p>
          </div>

          <div>
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-xl mb-2">อีเมล</h3>
            <p className="text-gray-300">info@ngadam.com</p>
            <p className="text-gray-300">support@ngadam.com</p>
          </div>

          <div>
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-xl mb-2">สำนักงาน</h3>
            <p className="text-gray-300">กรุงเทพมหานคร</p>
            <p className="text-gray-300">ประเทศไทย 10xxx</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">เวลาทำการ: จันทร์ - เสาร์ 9:00 - 18:00 น.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition">
              Facebook
            </a>
            <a href="#" className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg transition">
              Instagram
            </a>
            <a href="#" className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg transition">
              LINE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

