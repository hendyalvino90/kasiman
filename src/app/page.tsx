'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Leaf, Users, Award, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="KASIMAN Logo" className="h-10 w-10 mr-3 rounded-lg" />
              <span className="text-2xl font-bold text-green-800">KASIMAN</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</a>
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
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              KASIMAN
            </h1>
            <p className="text-2xl text-green-600 mb-8">Pertanian Padi Berkualitas</p>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Menghadirkan beras berkualitas premium dari lahan pertanian terbaik di Lampung Selatan. 
              Dengan pengalaman bertahun-tahun, kami berkomitmen untuk menyediakan produk pertanian 
              yang segar dan bergizi untuk masyarakat Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Hubungi Kami
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Tentang KASIMAN</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan pertanian padi terpercaya yang berbasis di Lampung Selatan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Misi Kami</h3>
              <p className="text-gray-600 mb-6">
                KASIMAN berdedikasi untuk menghasilkan produk pertanian padi berkualitas tinggi 
                dengan menggunakan metode pertanian modern yang berkelanjutan. Kami memastikan 
                setiap butir beras yang kami hasilkan memenuhi standar kualitas terbaik.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan lokasi strategis di Berundung, Ketapang, Lampung Selatan, kami memanfaatkan 
                kondisi tanah dan iklim yang ideal untuk pertanian padi yang optimal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Award className="text-green-600 w-5 h-5" />
                  <span className="text-gray-700">Kualitas Premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="text-green-600 w-5 h-5" />
                  <span className="text-gray-700">100% Alami</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sprout className="text-green-600 w-5 h-5" />
                  <span className="text-gray-700">Berhasilitan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-green-600 w-5 h-5" />
                  <span className="text-gray-700">Terpercaya</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-green-800 mb-4">Informasi Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-green-600 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Alamat</p>
                    <p className="text-gray-600">BERUNDUNG, Desa/Kelurahan Berundung, Kec. Ketapang, Kab. Lampung Selatan, Provinsi Lampung</p>
                    <p className="text-gray-600">Kode Pos: 35596</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-gray-800">Telepon</p>
                    <p className="text-gray-600">0823-1204-4648</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@kasiman.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi pertanian komprehensif untuk kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Budidaya Padi</h3>
                <p className="text-gray-600">
                  Menggunakan teknologi pertanian modern untuk hasil panen yang optimal dan berkualitas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Produk Berkualitas</h3>
                <p className="text-gray-600">
                  Beras premium dengan kualitas terbaik, diproses dengan standar keamanan pangan yang tinggi.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Konsultasi</h3>
                <p className="text-gray-600">
                  Layanan konsultasi pertanian untuk mitra kerja sama dan petani lokal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Tertarik dengan Produk Pertanian Kami?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Hubungi kami hari ini untuk mendapatkan produk pertanian berkualitas terbaik
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <Phone className="w-4 h-4 mr-2" />
            Hubungi Sekarang
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="KASIMAN Logo" className="h-8 w-8 mr-2 rounded-lg" />
                <span className="text-xl font-bold text-green-400">KASIMAN</span>
              </div>
              <p className="text-gray-400">
                Perusahaan pertanian padi terpercaya yang berkomitmen pada kualitas dan keberlanjutan.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Budidaya Padi</li>
                <li>Produk Beras</li>
                <li>Konsultasi Pertanian</li>
                <li>Kerjasama Mitra</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-green-400">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-green-400">Terms & Conditions</a></li>
                <li>Tentang Kami</li>
                <li>Kontak</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Berundung, Ketapang, Lampung Selatan
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  0823-1204-4648
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@kasiman.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KASIMAN. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}