'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Lock, UserCheck, Cookie, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Privacy() {
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
              <Link href="/privacy" className="text-green-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-green-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Shield className="text-green-600 w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Kebijakan Privasi KASIMAN</h1>
          </div>

          <div className="prose prose-green max-w-none">
            <p className="text-gray-600 mb-6">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-gray-600 mb-6">
              Di KASIMAN, kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi 
              informasi Anda ketika Anda menggunakan layanan pertanian kami.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <Eye className="text-green-600 w-6 h-6 mr-2" />
              Informasi yang Kami Kumpulkan
            </h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Nama lengkap dan informasi kontak (nomor telepon, email)</li>
                <li>Alamat lengkap untuk pengiriman produk</li>
                <li>Informasi rekening bank untuk transaksi pembayaran</li>
                <li>Informasi usaha pertanian (jika berlaku)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Alamat IP dan informasi perangkat</li>
                <li>Data penggunaan website</li>
                <li>Cookie dan teknologi pelacakan lainnya</li>
                <li>Informasi lokasi (dengan persetujuan Anda)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <Database className="text-green-600 w-6 h-6 mr-2" />
              Penggunaan Informasi
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900">Untuk Layanan Pertanian</h3>
                <p className="text-gray-600">
                  Memproses pesanan produk pertanian, mengatur pengiriman, dan menyediakan layanan pelanggan.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900">Untuk Komunikasi</h3>
                <p className="text-gray-600">
                  Mengirimkan informasi produk, update layanan, dan komunikasi terkait transaksi.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900">Untuk Peningkatan Layanan</h3>
                <p className="text-gray-600">
                  Menganalisis penggunaan untuk meningkatkan kualitas produk dan layanan pertanian kami.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <Lock className="text-green-600 w-6 h-6 mr-2" />
              Keamanan Data
            </h2>
            
            <p className="text-gray-600 mb-6">
              KASIMAN menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi data pribadi Anda:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Enkripsi data selama transmisi dan penyimpanan</li>
              <li>Akses terbatas ke informasi pribadi</li>
              <li>Keamanan fisik dan digital di fasilitas kami</li>
              <li>Audit keamanan reguler</li>
              <li>Kepatuhan terhadap regulasi perlindungan data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <Cookie className="text-green-600 w-6 h-6 mr-2" />
              Kebijakan Cookie
            </h2>
            
            <p className="text-gray-600 mb-6">
              Kami menggunakan cookie untuk meningkatkan pengalaman pengguna website kami:
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Jenis Cookie yang Kami Gunakan:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookie Performa:</strong> Membantu kami memahami bagaimana pengguna menggunakan website</li>
                <li><strong>Cookie Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
              <UserCheck className="text-green-600 w-6 h-6 mr-2" />
              Hak Anda sebagai Pengguna
            </h2>
            
            <p className="text-gray-600 mb-6">
              Sebagai pengguna layanan KASIMAN, Anda memiliki hak-hak berikut terkait data pribadi Anda:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Hak untuk mengakses data pribadi Anda</li>
              <li>Hak untuk memperbaiki data yang tidak akurat</li>
              <li>Hak untuk menghapus data pribadi Anda</li>
              <li>Hak untuk membatasi pemrosesan data</li>
              <li>Hak untuk menarik persetujuan</li>
              <li>Hak untuk memindahkan data Anda</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Perubahan Kebijakan Privasi</h2>
            
            <p className="text-gray-600 mb-6">
              KASIMAN dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan 
              diberitahukan melalui website kami atau email terdaftar. Penggunaan lanjutan layanan kami 
              setelah perubahan menunjukkan persetujuan Anda terhadap kebijakan yang diperbarui.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hubungi Kami</h2>
            
            <p className="text-gray-600 mb-6">
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, 
              silakan hubungi kami:
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Nama:</strong> KASIMAN</p>
              <p className="text-gray-700 mb-2"><strong>Alamat:</strong> BERUNDUNG, Desa/Kelurahan Berundung, Kec. Ketapang, Kab. Lampung Selatan, Provinsi Lampung 35596</p>
              <p className="text-gray-700 mb-2"><strong>Telepon:</strong> 0823-1204-4648</p>
              <p className="text-gray-700"><strong>Email:</strong> privacy@kasiman.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}