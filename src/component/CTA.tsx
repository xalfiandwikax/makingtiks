import { useState, useEffect } from 'react';

declare global {
  interface Window {
    snap: {
      pay: (snapToken: string) => void;
    };
  }
}

export default function CTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1
  });

  // 1. Load Midtrans Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute('data-client-key', 'SB-Mid-client-VraUPqaaigMsmheG'); // Ganti dengan client key Anda
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 2. Handle Pembayaran
  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerDetails: {
            first_name: form.name,
            email: form.email,
            phone: form.phone
          },
          itemDetails: [
            {
              id: 'TICKET1',
              name: 'Tiket Event',
              price: 100000,
              quantity: form.quantity
            }
          ]
        })
      });

      const data = await res.json();

      if (data.success && data.token) {
        window.snap.pay(data.token);
      } else {
        alert('Gagal memproses pembayaran');
        console.error('Midtrans error:', data);
      }
    } catch (error) {
      alert('Terjadi kesalahan!');
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Beli Tiket</h2>
      
      <form onSubmit={handlePay} className="space-y-3">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="tel"
          placeholder="Nomor HP"
          value={form.phone}
          onChange={(e) => setForm({...form, phone: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          placeholder="Jumlah Tiket"
          min="1"
          max="5"
          value={form.quantity}
          onChange={(e) => setForm({...form, quantity: +e.target.value})}
          className="w-full p-2 border rounded"
          required
        />

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Bayar dengan Midtrans
        </button>
      </form>
    </div>
  );
}
