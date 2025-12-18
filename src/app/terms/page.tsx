'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel, Users, Package, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Terms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="KASIMAN Logo" className="h-10 w-10 mr-3 rounded-lg" />
              <span className="text-2xl font-bold text-green-800">KASIMAN</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-green-600 font-semibold">Terms</Link>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-green-600 font-semibold">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Terms and Conditions Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Gavel className="text-green-600 w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Syarat dan Ketentuan KASIMAN</h1>
          </div>

          <div className="prose prose-green max-w-none">
            <p className="text-gray-600 mb-6">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-gray-600 mb-6">
              Selamat datang di KASIMAN. Syarat dan Ketentuan ini mengatur penggunaan layanan pertanian 
              dan produk yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi 
              syarat dan ketentuan yang tercantum di bawah ini.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
              <div className="flex items-center mb-2">
                <AlertCircle className="text-red-600 w-5 h-5 mr-2" />
                <h3 className="font-semibold text-gray-900">Penting Dibaca</h3>
              </div>
              <p className="text-gray-600">
                Harap baca Syarat dan Ketentuan ini dengan cermat sebelum menggunakan layanan KASIMAN. 
                Penggunaan layanan kami menunjukkan persetujuan Anda terhadap ketentuan ini.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <Users className="text-green-600 w-6 h-6 mr-2" />
              Definisi
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-gray-600">
                <li><strong>"KASIMAN"</strong> - Merujuk pada perusahaan pertanian padi yang beralamat di Berundung, Ketapang, Lampung Selatan.</li>
                <li><strong>"Pelanggan"</strong> - Individu atau entitas yang menggunakan layanan atau membeli produk dari KASIMAN.</li>
                <li><strong>"Produk"</strong> - Hasil pertanian padi dan produk turunannya yang dijual oleh KASIMAN.</li>
                <li><strong>"Layanan"</strong> - Semua layanan pertanian yang disediakan oleh KASIMAN.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <Package className="text-green-600 w-6 h-6 mr-2" />
              Ketentuan Produk dan Layanan
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900">Kualitas Produk</h3>
                <p className="text-gray-600">
                  KASIMAN berkomitmen untuk menyediakan produk pertanian berkualitas tinggi yang memenuhi 
                  standar keamanan pangan yang berlaku di Indonesia.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900">Ketersediaan Produk</h3>
                <p className="text-gray-600">
                  Ketersediaan produk dapat berubah tergantung pada musim panen dan kondisi pertanian. 
                  Kami akan berusaha memberikan informasi yang akurat tentang ketersediaan produk.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900">Spesifikasi Produk</h3>
                <p className="text-gray-600">
                  Semua produk dijual sesuai dengan spesifikasi yang tercantum pada saat transaksi. 
                  Perubahan spesifikasi akan diberitahukan sebelumnya.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <CreditCard className="text-green-600 w-6 h-6 mr-2" />
              Pembayaran dan Harga
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Ketentuan Pembayaran:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                <li>Pembayaran dapat dilakukan melalui metode yang disediakan oleh KASIMAN</li>
                <li>Pembayaran harus diselesaikan sebelum produk dikirim</li>
                <li>Biaya pengiriman ditanggung oleh pembeli kecuali disepakati lain</li>
                <li>Pajak yang berlaku akan ditambahkan ke harga produk</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pengiriman dan Pengembalian</h2>
            
            <div className="space-y-4 mb-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Pengiriman</h3>
                <p className="text-gray-600">
                  Produk akan dikirim ke alamat yang ditentukan oleh pelanggan. Waktu pengiriman 
                  dapat bervariasi tergantung pada lokasi dan ketersediaan produk.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Pengembalian</h3>
                <p className="text-gray-600">
                  Pengembalian produk hanya diperbolehkan jika ada cacat produk atau kesalahan pengiriman. 
                  Klaim harus diajukan dalam waktu 24 jam setelah penerimaan produk.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kewajiban Pelanggan</h2>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Memberikan informasi yang akurat dan lengkap saat pemesanan</li>
              <li>Melakukan pembayaran sesuai dengan ketentuan yang berlaku</li>
              <li>Memeriksa produk saat diterima dan melaporkan masalah segera</li>
              <li>Menyimpan produk dengan benar sesuai petunjuk</li>
              <li>Tidak menggunakan produk untuk tujuan ilegal</li>
              <li>Mematuhi semua peraturan yang berlaku terkait produk pertanian</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Batasan Tanggung Jawab</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-6">
              <p className="text-gray-600 mb-3">
                KASIMAN tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian tidak langsung atau konsekuensial yang timbul dari penggunaan produk</li>
                <li>Keterlambatan pengiriman yang disebabkan oleh faktor di luar kendali kami</li>
                <li>Kerusakan produk akibat penanganan yang salah oleh pelanggan</li>
                <li>Klaim yang melebihi nilai pembelian produk</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kebijakan Privasi</h2>
            
            <p className="text-gray-600 mb-6">
              Penggunaan layanan KASIMAN juga tunduk pada Kebijakan Privasi kami. Dengan menggunakan 
              layanan kami, Anda setuju dengan pengumpulan dan penggunaan informasi sesuai dengan 
              kebijakan privasi yang berlaku.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Perubahan Syarat dan Ketentuan</h2>
            
            <p className="text-gray-600 mb-6">
              KASIMAN berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan 
              diberlakukan segera setelah dipublikasikan di website kami. Penggunaan lanjutan 
              layanan kami setelah perubahan menunjukkan persetujuan Anda terhadap syarat yang diperbarui.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hukum yang Berlaku</h2>
            
            <p className="text-gray-600 mb-6">
              Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa 
              yang timbul dari penggunaan layanan kami akan diselesaikan melalui perundingan 
              terlebih dahulu, dan jika tidak mencapai kesepakatan, akan diselesaikan melalui 
              pengadilan yang berwenang di Lampung Selatan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontak Kami</h2>
            
            <p className="text-gray-600 mb-6">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Nama:</strong> KASIMAN</p>
              <p className="text-gray-700 mb-2"><strong>Alamat:</strong> BERUNDUNG, Desa/Kelurahan Berundung, Kec. Ketapang, Kab. Lampung Selatan, Provinsi Lampung 35596</p>
              <p className="text-gray-700 mb-2"><strong>Telepon:</strong> 0823-1204-4648</p>
              <p className="text-gray-700"><strong>Email:</strong> legal@kasiman.com</p>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600 text-sm">
                Dengan menggunakan layanan KASIMAN, Anda menyatakan telah membaca, memahami, 
                dan menyetujui Syarat dan Ketentuan ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}