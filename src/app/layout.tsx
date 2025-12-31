import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toko Outdoor - Perlengkapan Outdoor Terlengkap",
  description: "Toko perlengkapan outdoor terpercaya dengan berbagai produk berkualitas untuk petualangan Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        <footer className="bg-zinc-900 text-zinc-300 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">🏔️ Toko Outdoor</h3>
                <p className="text-sm">
                  Perlengkapan outdoor terpercaya untuk petualangan Anda.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Tautan</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="hover:text-green-400">Beranda</a></li>
                  <li><a href="/products" className="hover:text-green-400">Produk</a></li>
                  <li><a href="/categories" className="hover:text-green-400">Kategori</a></li>
                  <li><a href="/about" className="hover:text-green-400">Tentang</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Bantuan</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/contact" className="hover:text-green-400">Kontak</a></li>
                  <li><a href="/shipping" className="hover:text-green-400">Pengiriman</a></li>
                  <li><a href="/returns" className="hover:text-green-400">Pengembalian</a></li>
                  <li><a href="/faq" className="hover:text-green-400">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-green-400">Facebook</a></li>
                  <li><a href="#" className="hover:text-green-400">Instagram</a></li>
                  <li><a href="#" className="hover:text-green-400">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Toko Outdoor. All rights reserved.</p>
            </div>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}
