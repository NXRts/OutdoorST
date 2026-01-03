'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, User, Mountain, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="w-8 h-8 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              Toko Outdoor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/products"
              className="text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Produk
            </Link>
            <Link
              href="/categories"
              className="text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Kategori
            </Link>
            <Link
              href="/about"
              className="text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Tentang
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              href="/login"
              className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <User className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 right-0 h-[calc(100vh-64px)] w-full sm:w-80 bg-white dark:bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out border-l border-zinc-200 dark:border-zinc-800 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            <Link
              href="/"
              className="text-lg font-medium text-zinc-900 dark:text-zinc-100 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/products"
              className="text-lg font-medium text-zinc-900 dark:text-zinc-100 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <Link
              href="/categories"
              className="text-lg font-medium text-zinc-900 dark:text-zinc-100 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kategori
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-zinc-900 dark:text-zinc-100 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </Link>
            <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 gap-4">
              <Link
                href="/cart"
                className="flex flex-col items-center justify-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-6 h-6 mb-2" />
                <span className="text-sm">Keranjang</span>
              </Link>
              <Link
                href="/login"
                className="flex flex-col items-center justify-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-6 h-6 mb-2" />
                <span className="text-sm">Akun</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

