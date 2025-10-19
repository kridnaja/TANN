export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              🖤 งาดำออนไลน์
            </h3>
            <p className="text-gray-400">
              ร้านขายอาหารเสริมงาดำคุณภาพสูง เพื่อสุขภาพที่ดีและผมดำสวยงาม
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 โทร: 02-xxx-xxxx</li>
              <li>📧 อีเมล: info@ngadam.com</li>
              <li>📍 ที่อยู่: กรุงเทพฯ ประเทศไทย</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">เมนู</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400">หน้าแรก</a></li>
              <li><a href="/products" className="hover:text-yellow-400">สินค้า</a></li>
              <li><a href="/about" className="hover:text-yellow-400">เกี่ยวกับเรา</a></li>
              <li><a href="/cart" className="hover:text-yellow-400">ตะกร้าสินค้า</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 งาดำออนไลน์. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  );
}

