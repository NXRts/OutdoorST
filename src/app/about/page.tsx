import { Mountain, Users, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Mountain,
      title: 'Kualitas Terjamin',
      description: 'Kami hanya menyediakan produk berkualitas tinggi dari brand terpercaya',
    },
    {
      icon: Users,
      title: 'Tim Berpengalaman',
      description: 'Tim kami terdiri dari para outdoor enthusiast yang memahami kebutuhan Anda',
    },
    {
      icon: Award,
      title: 'Terpercaya',
      description: 'Lebih dari 10.000 pelanggan puas telah mempercayai kami',
    },
    {
      icon: Heart,
      title: 'Pelayanan Terbaik',
      description: 'Kami berkomitmen memberikan pelayanan terbaik untuk kepuasan Anda',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Tentang Toko Outdoor
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Kami adalah toko perlengkapan outdoor terpercaya yang menyediakan berbagai produk berkualitas untuk mendukung setiap petualangan Anda.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Toko Outdoor didirikan pada tahun 2020 dengan visi untuk menyediakan perlengkapan outdoor berkualitas tinggi dengan harga yang terjangkau. Kami memahami bahwa setiap petualangan membutuhkan persiapan yang matang, dan itulah mengapa kami berkomitmen untuk menyediakan produk terbaik.
                </p>
                <p>
                  Sejak awal, kami telah bekerja sama dengan berbagai brand terpercaya di industri outdoor. Setiap produk yang kami jual telah melalui proses seleksi ketat untuk memastikan kualitas dan keamanannya.
                </p>
                <p>
                  Tim kami terdiri dari para outdoor enthusiast yang memiliki pengalaman bertahun-tahun dalam berbagai aktivitas outdoor, mulai dari hiking, camping, hingga mountaineering. Kami memahami kebutuhan Anda karena kami juga merasakannya.
                </p>
              </div>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg aspect-square flex items-center justify-center">
              <Mountain className="w-32 h-32 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                    {value.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-12 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-green-100">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-green-100">Produk Tersedia</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-green-100">Brand Terpercaya</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

