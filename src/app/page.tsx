import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mountain, Tent, Backpack, Compass } from 'lucide-react';
import { getFeaturedProducts, categories as mockCategories } from '@/lib/products';

export default async function Home() {
  const featuredProducts = getFeaturedProducts();
  const categories = mockCategories;

  const categoryIcons = [
    {
      name: 'Tenda & Shelter',
      icon: Tent,
      color: 'bg-blue-500',
    },
    {
      name: 'Tas & Ransel',
      icon: Backpack,
      color: 'bg-green-500',
    },
    {
      name: 'Navigasi',
      icon: Compass,
      color: 'bg-orange-500',
    },
    {
      name: 'Peralatan Gunung',
      icon: Mountain,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Siapkan Petualangan Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-2xl mx-auto">
              Perlengkapan outdoor berkualitas tinggi untuk setiap perjalanan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Lihat Produk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Jelajahi Kategori
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
            Kategori Produk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => {
              const iconData = categoryIcons.find((c) => c.name === category.name);
              const Icon = iconData?.icon || Mountain;
              const color = iconData?.color || 'bg-gray-500';
              return (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className={`${color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                    {category.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Produk Unggulan
            </h2>
            <Link
              href="/products"
              className="text-green-600 dark:text-green-400 font-semibold hover:underline flex items-center"
            >
              Lihat Semua
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square bg-zinc-200 dark:bg-zinc-700 relative overflow-hidden">
                  <Image
                    src={product.image || '/products/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                    priority={index < 2} // Prioritize loading first 2 images
                  />
                  <div className="w-full h-full flex items-center justify-center text-zinc-400 absolute inset-0 bg-zinc-200 dark:bg-zinc-700 pointer-events-none">
                    <Mountain className="w-20 h-20" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
            Mengapa Pilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                Kualitas Terjamin
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Produk berkualitas tinggi dari brand terpercaya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                Pengiriman Cepat
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Pengiriman ke seluruh Indonesia dengan cepat dan aman
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                Customer Service 24/7
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Tim support siap membantu Anda kapan saja
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
