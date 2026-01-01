import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Mountain } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/products';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  // Parse images JSON string if needed, or use array directly
  let productImages: string[] = [];
  try {
    if (product.images) {
      if (Array.isArray(product.images)) {
        productImages = product.images;
      } else if (typeof product.images === 'string') {
        productImages = JSON.parse(product.images);
      }
    }
  } catch (error) {
    console.error('Error parsing images:', error);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kembali ke Produk
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden mb-4 relative">
              <Image
                src={product.image || '/products/placeholder.svg'}
                alt={product.name}
                fill
                className="object-cover"
                priority // Prioritize main product image
              />
              <div className="w-full h-full flex items-center justify-center text-zinc-400 absolute inset-0 bg-zinc-200 dark:bg-zinc-700 pointer-events-none">
                <Mountain className="w-32 h-32" />
              </div>
            </div>
            {productImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-green-500 transition-all relative"
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 absolute inset-0 bg-zinc-200 dark:bg-zinc-700 pointer-events-none">
                      <Mountain className="w-12 h-12" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-green-600 dark:text-green-400">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
            </div>

            {/* Stock */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ✓ Tersedia ({product.stock} unit)
                </p>
              ) : (
                <p className="text-red-500 font-semibold">✗ Stok Habis</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                disabled={product.stock === 0}
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-zinc-400 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                Tambah ke Keranjang
              </button>
              <button className="px-6 py-4 border-2 border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                ❤️
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                <Truck className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Gratis Ongkir</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Min. belanja Rp 500rb</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Garansi Resmi</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">1 tahun</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                <RotateCcw className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Bisa Retur</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">14 hari</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Deskripsi Produk
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

