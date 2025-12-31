import Link from 'next/link';
import { Tent, Backpack, Compass, Mountain, Utensils, Sun, MapPin, Flame } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Tenda & Shelter',
      slug: 'tenda-shelter',
      icon: Tent,
      description: 'Tenda untuk camping dan hiking',
      color: 'bg-blue-500',
      count: 24,
    },
    {
      name: 'Tas & Ransel',
      slug: 'tas-ransel',
      icon: Backpack,
      description: 'Tas ransel untuk petualangan',
      color: 'bg-green-500',
      count: 18,
    },
    {
      name: 'Navigasi',
      slug: 'navigasi',
      icon: Compass,
      description: 'Kompas dan GPS',
      color: 'bg-orange-500',
      count: 12,
    },
    {
      name: 'Peralatan Gunung',
      slug: 'peralatan-gunung',
      icon: Mountain,
      description: 'Peralatan untuk pendakian',
      color: 'bg-purple-500',
      count: 30,
    },
    {
      name: 'Peralatan Masak',
      slug: 'peralatan-masak',
      icon: Utensils,
      description: 'Kompor dan peralatan masak',
      color: 'bg-red-500',
      count: 15,
    },
    {
      name: 'Penerangan',
      slug: 'penerangan',
      icon: Sun,
      description: 'Headlamp dan senter',
      color: 'bg-yellow-500',
      count: 20,
    },
    {
      name: 'Aksesoris',
      slug: 'aksesoris',
      icon: MapPin,
      description: 'Aksesoris outdoor',
      color: 'bg-indigo-500',
      count: 35,
    },
    {
      name: 'Peralatan Tidur',
      slug: 'peralatan-tidur',
      icon: Flame,
      description: 'Sleeping bag dan matras',
      color: 'bg-pink-500',
      count: 22,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Kategori Produk
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Jelajahi berbagai kategori perlengkapan outdoor kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all group border border-zinc-200 dark:border-zinc-700"
              >
                <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
                  {category.description}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {category.count} produk
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

