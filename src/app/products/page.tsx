'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mountain, Search, Filter } from 'lucide-react';
import { products } from '@/lib/products';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Semua Produk
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Temukan perlengkapan outdoor terbaik untuk petualangan Anda
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400">Tidak ada produk yang ditemukan.</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square bg-zinc-200 dark:bg-zinc-700 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="w-full h-full flex items-center justify-center text-zinc-400 absolute inset-0 bg-zinc-200 dark:bg-zinc-700 pointer-events-none">
                  <Mountain className="w-20 h-20" />
                </div>
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                    <span className="bg-red-500 text-white px-4 py-2 rounded">Habis</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                  {product.category}
                </p>
                <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>
                {product.stock > 0 && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    Stok: {product.stock}
                  </p>
                )}
              </div>
            </Link>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            Sebelumnya
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            1
          </button>
          <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            3
          </button>
          <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}

