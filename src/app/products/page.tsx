import Link from 'next/link';
import { Mountain, Search, Filter } from 'lucide-react';

export default async function ProductsPage() {
  // In a real app, you would fetch from database
  // const products = await prisma.product.findMany({ include: { category: true } });
  
  const products = [
    {
      id: 1,
      name: 'Tenda Dome 4 Orang',
      price: 1500000,
      image: '/api/placeholder/300/300',
      category: 'Tenda & Shelter',
      stock: 10,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Ransel Hiking 50L',
      price: 800000,
      image: '/api/placeholder/300/300',
      category: 'Tas & Ransel',
      stock: 15,
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Sleeping Bag -10°C',
      price: 600000,
      image: '/api/placeholder/300/300',
      category: 'Peralatan Tidur',
      stock: 20,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Kompor Portable',
      price: 350000,
      image: '/api/placeholder/300/300',
      category: 'Peralatan Masak',
      stock: 25,
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Headlamp LED',
      price: 150000,
      image: '/api/placeholder/300/300',
      category: 'Penerangan',
      stock: 30,
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Trekking Pole',
      price: 400000,
      image: '/api/placeholder/300/300',
      category: 'Peralatan Gunung',
      stock: 18,
      rating: 4.8,
    },
    {
      id: 7,
      name: 'Water Bottle 1L',
      price: 120000,
      image: '/api/placeholder/300/300',
      category: 'Aksesoris',
      stock: 40,
      rating: 4.4,
    },
    {
      id: 8,
      name: 'Jaket Hiking',
      price: 750000,
      image: '/api/placeholder/300/300',
      category: 'Pakaian',
      stock: 12,
      rating: 4.9,
    },
  ];

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
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square bg-zinc-200 dark:bg-zinc-700 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-zinc-400">
                  <Mountain className="w-20 h-20" />
                </div>
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
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
          ))}
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

