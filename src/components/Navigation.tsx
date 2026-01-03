'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, User, Mountain } from 'lucide-react';
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
              className="md:hidden p-2 text-zinc-700 dark:text-zinc-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <Link
              href="/categories"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Kategori
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

