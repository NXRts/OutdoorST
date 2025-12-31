'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-black py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kembali
        </Link>

        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {isLogin ? 'Masuk' : 'Daftar'}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {isLogin
                ? 'Masuk ke akun Anda untuk melanjutkan'
                : 'Buat akun baru untuk mulai berbelanja'}
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nama Lengkap"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-green-600 border-zinc-300 rounded focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Ingat saya
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-green-600 dark:text-green-400 hover:underline"
                >
                  Lupa password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              {isLogin ? 'Masuk' : 'Daftar'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              {isLogin ? 'Belum punya akun? ' : 'Sudah punya akun? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-600 dark:text-green-400 font-semibold hover:underline"
              >
                {isLogin ? 'Daftar sekarang' : 'Masuk'}
              </button>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-300 dark:border-zinc-700">
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Atau masuk dengan
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors text-sm">
                Google
              </button>
              <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors text-sm">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

