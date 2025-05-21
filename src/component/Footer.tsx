export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-500">TASTE THE DIRT TOUR</h3>
            <p className="text-gray-400">
              Presented by SET THE FIRE RECORDS
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06-4.123 0-2.43-.013-2.784-.06-3.808-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.772-1.153c-.636-.247-1.363-.416-2.427-.465-1.024-.047-1.379-.06-3.808-.06s-2.784.013-3.808.06c-1.064.049-1.791.218-2.427.465A4.902 4.902 0 01.45 8.282a4.902 4.902 0 01-1.153-1.772A6.042 6.042 0 010 4.005C.013 2.98 0 2.626 0 .315z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">NAVIGASI</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition">Lineup</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition">Venue</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">KONTAK</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@tastedirt.com</p>
              <p>Telp: (021) 1234-5678</p>
              <p>SET THE FIRE RECORDS</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} TASTE THE DIRT TOUR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}