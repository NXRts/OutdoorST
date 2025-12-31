import Link from 'next/link';
import Image from 'next/image';
import { Mountain } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { PrismaProduct } from '@/lib/products';

async function getProducts(): Promise<PrismaProduct[]> {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' },
      take: 20, // Limit to 20 products for better performance
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400">Tidak ada produk yang ditemukan.</p>
            </div>
          ) : (
            products.map((product) => (
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
                    loading="lazy" // Lazy load images for better performance
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
                    {product.category.name}
                  </p>
                  <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
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
      </div>
    </div>
  );
}

