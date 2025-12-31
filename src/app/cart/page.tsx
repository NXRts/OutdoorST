'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tenda Dome 4 Orang',
      price: 1500000,
      quantity: 1,
      image: '/api/placeholder/150/150',
    },
    {
      id: 2,
      name: 'Ransel Hiking 50L',
      price: 800000,
      quantity: 2,
      image: '/api/placeholder/150/150',
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500000 ? 0 : 25000;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingCart className="w-24 h-24 text-zinc-300 dark:text-zinc-700 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Keranjang Anda Kosong
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Mulai berbelanja dan tambahkan produk ke keranjang Anda
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Mulai Berbelanja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
          Keranjang Belanja
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col sm:flex-row gap-4"
              >
                <div className="w-full sm:w-32 h-32 bg-zinc-200 dark:bg-zinc-700 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-bold text-lg mb-4">
                    Rp {item.price.toLocaleString('id-ID')}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-zinc-300 dark:border-zinc-700 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-zinc-900 dark:text-zinc-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                      Hapus
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md sticky top-24">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                Ringkasan Pesanan
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Ongkos Kirim</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 dark:text-green-400">Gratis</span>
                    ) : (
                      `Rp ${shipping.toLocaleString('id-ID')}`
                    )}
                  </span>
                </div>
                {subtotal < 500000 && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    Belanja Rp {(500000 - subtotal).toLocaleString('id-ID')} lagi untuk gratis ongkir!
                  </p>
                )}
                <div className="border-t border-zinc-300 dark:border-zinc-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    <span>Total</span>
                    <span>Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-green-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4"
              >
                Lanjut ke Checkout
              </Link>
              <Link
                href="/products"
                className="block w-full text-center text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Lanjutkan Belanja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

