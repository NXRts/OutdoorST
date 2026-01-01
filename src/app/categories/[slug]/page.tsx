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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <Link
              href="/categories"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Kembali ke Kategori
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          </div>
          <p className="mt-2 text-gray-600">{category.description}</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {products.length === 0 ? (
          <div className="text-center py-12">
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
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {products.length} produk ditemukan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.images ? (typeof product.images === 'string' ? JSON.parse(product.images) : product.images)[0] : product.image || '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    {product.featured && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {formatCurrency(product.price)}
                      </span>
                      {product.stock <= 5 && product.stock > 0 && (
                        <span className="text-sm text-orange-600">
                          Stok terbatas
                        </span>
                      )}
                      {product.stock === 0 && (
                        <span className="text-sm text-red-600">
                          Habis
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
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