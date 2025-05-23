interface EventData {
  bandName: string;       // Fitur baru: nama band (contoh: "nopeace")
  tourTitle: string;      // Fitur baru: judul tour (contoh: "Taste The Dirt Tour '25")
  presenter: string;
  posterUrl?: string;
  ticketPrice?: string;
  ctaText?: string;
}

export default function EventHero({
  bandName = "No Peace",
  tourTitle = "Taste The Dirt Tour '25",
  presenter = "Making Gigs",
  posterUrl,
  ticketPrice,
  ctaText = "BELI TIKET SEKARANG"
}: EventData) {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Bagian Teks + CTA */}
        <div className="text-center md:text-left flex-1 space-y-6">
          <div>
            {/* Nama Band */}
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-1 
                  font-grunge tracking-tighter uppercase 
                  bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 
                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              {bandName}
            </h2>
            {/* Judul Tour */}
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {tourTitle}
            </h1>
            {/* Presenter */}
            <p className="text-xl md:text-2xl opacity-90">
              Presented by <span className="font-bold text-yellow-400">{presenter}</span>
            </p>
          </div>

          {/* Harga Tiket */}
          {ticketPrice && (
            <div className="space-y-2">
              <p className="text-lg">Harga Tiket Mulai Dari:</p>
              <p className="text-3xl font-bold text-yellow-400">{ticketPrice}</p>
            </div>
          )}

          {/* Tombol CTA */}
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-bold transition-colors duration-300">
            {ctaText}
          </button>
        </div>

        {/* Bagian Poster */}
        {posterUrl && (
          <div className="flex-1 max-w-md relative group">
            <img
              src={posterUrl}
              alt={`Poster ${bandName} - ${tourTitle}`}
              className="w-full h-auto rounded-xl shadow-2xl border-4 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-500"
            />
            {/* Efek Hover */}
            <div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-transparent transition-colors duration-300 rounded-xl" />
          </div>
        )}
      </div>
    </section>
  );
}