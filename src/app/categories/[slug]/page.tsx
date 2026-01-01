import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency, getProductsByCategory, categories as mockCategories } from '@/lib/products';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = mockCategories.find((c) => c.slug === slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <Link
              href="/categories"
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Kategori
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">{category.name}</span>
          </div>

          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {category.name}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Belum ada produk di kategori ini
            </h3>
            <p className="text-gray-600">
              Produk akan segera ditambahkan ke kategori {category.name}.
            </p>
            <Link
              href="/products"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Lihat Semua Produk
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
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
                    loading="lazy"
                  />
                  <div className="w-full h-full flex items-center justify-center text-zinc-400 absolute inset-0 bg-zinc-200 dark:bg-zinc-700 pointer-events-none">
                    <div className="w-20 h-20 text-zinc-400">
                      {/* Mountain Icon SVG inline or imported */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                      >
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                      </svg>
                    </div>
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
                      {formatCurrency(product.price)}
                    </span>
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
        )}
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = mockCategories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: 'Kategori Tidak Ditemukan',
    };
  }

  return {
    title: `${category.name} - Toko Outdoor`,
    description: category.description,
  };
}