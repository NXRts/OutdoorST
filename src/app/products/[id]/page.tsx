import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Mountain } from 'lucide-react';

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, you would fetch from database
  // const product = await prisma.product.findUnique({ where: { id: params.id }, include: { category: true } });
  
  const product = {
    id: params.id,
    name: 'Tenda Dome 4 Orang',
    price: 1500000,
    originalPrice: 1800000,
    description: 'Tenda dome berkualitas tinggi dengan kapasitas 4 orang. Terbuat dari bahan waterproof dan tahan UV. Cocok untuk camping di berbagai kondisi cuaca. Dilengkapi dengan flysheet, groundsheet, dan tiang aluminium yang ringan namun kuat.',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600', '/api/placeholder/600/600'],
    category: 'Tenda & Shelter',
    stock: 10,
    rating: 4.8,
    reviews: 127,
    features: [
      'Waterproof 3000mm',
      'UV Protection',
      'Kapasitas 4 orang',
      'Berat: 4.5 kg',
      'Bahan: Polyester 210T',
      'Tiang: Aluminium 7001',
    ],
  };

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
            <div className="aspect-square bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden mb-4">
              <div className="w-full h-full flex items-center justify-center text-zinc-400">
                <Mountain className="w-32 h-32" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-green-500 transition-all"
                >
                  <div className="w-full h-full flex items-center justify-center text-zinc-400">
                    <Mountain className="w-12 h-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-zinc-300 dark:text-zinc-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-zinc-600 dark:text-zinc-400">
                {product.rating} ({product.reviews} ulasan)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-green-600 dark:text-green-400">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                <span className="text-xl text-zinc-400 line-through">
                  Rp {product.originalPrice.toLocaleString('id-ID')}
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -17%
                </span>
              </div>
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

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 text-zinc-900 dark:text-zinc-100">
                Spesifikasi:
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
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

