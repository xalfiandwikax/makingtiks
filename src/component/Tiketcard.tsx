export default function Tiketcard() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">🎫 Harga Tiket</h2>
        <div className="max-w-md mx-auto bg-gray-900 text-white p-8 rounded-xl">
          <p className="text-2xl mb-2">Early Bird</p>
          <p className="text-5xl font-bold mb-4">Rp 100.000</p>
          <p className="text-gray-300">*Harga belum termasuk pajak</p>
        </div>
      </div>
    </section>
  );
}