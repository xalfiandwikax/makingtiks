export default function CTA() {
   const cities = [
    "Jakarta",
    "Bandung",
    "Tangerang",
    "Bekasi",
    "Depok"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">🛒 Beli Tiket Sekarang!</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Nama Lengkap</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Masukkan nama"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600"
              placeholder="email@contoh.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Pilih Kota</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600">
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
          >
            Pesan Tiket
          </button>
        </form>
      </div>
    </section>
  );
}