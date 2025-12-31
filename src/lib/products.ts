// Mock data produk (tanpa database untuk saat ini)
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  stock: number;
  image: string;
  images?: string[];
  category: string;
  categorySlug: string;
  featured: boolean;
  rating: number;
  reviews: number;
  features?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Tenda Dome 4 Orang',
    slug: 'tenda-dome-4-orang',
    description: 'Tenda dome berkualitas tinggi dengan kapasitas 4 orang. Terbuat dari bahan waterproof dan tahan UV. Cocok untuk camping di berbagai kondisi cuaca. Dilengkapi dengan flysheet, groundsheet, dan tiang aluminium yang ringan namun kuat.',
    price: 1500000,
    originalPrice: 1800000,
    stock: 10,
    image: '/products/tenda-dome-4.jpg',
    images: ['/products/tenda-dome-4.jpg', '/products/tenda-dome-4-2.jpg', '/products/tenda-dome-4-3.jpg'],
    category: 'Tenda & Shelter',
    categorySlug: 'tenda-shelter',
    featured: true,
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
  },
  {
    id: 2,
    name: 'Ransel Hiking 50L',
    slug: 'ransel-hiking-50l',
    description: 'Ransel hiking kapasitas 50L dengan sistem ventilasi yang baik. Cocok untuk hiking dan backpacking. Dilengkapi dengan banyak kantong dan kompartemen untuk organisasi yang lebih baik.',
    price: 800000,
    stock: 15,
    image: '/products/ransel-hiking-50l.jpg',
    images: ['/products/ransel-hiking-50l.jpg', '/products/ransel-hiking-50l-2.jpg'],
    category: 'Tas & Ransel',
    categorySlug: 'tas-ransel',
    featured: true,
    rating: 4.9,
    reviews: 89,
    features: [
      'Kapasitas 50L',
      'Sistem ventilasi AirMesh',
      'Frame aluminium',
      'Berat: 1.8 kg',
      'Bahan: Nylon 600D',
      'Waterproof cover included',
    ],
  },
  {
    id: 3,
    name: 'Sleeping Bag -10°C',
    slug: 'sleeping-bag-10c',
    description: 'Sleeping bag dengan rating suhu -10°C. Cocok untuk camping di daerah dingin. Terbuat dari bahan berkualitas tinggi dengan isolasi yang baik.',
    price: 600000,
    stock: 20,
    image: '/products/sleeping-bag-10c.jpg',
    images: ['/products/sleeping-bag-10c.jpg'],
    category: 'Peralatan Tidur',
    categorySlug: 'peralatan-tidur',
    featured: true,
    rating: 4.7,
    reviews: 156,
    features: [
      'Rating suhu: -10°C',
      'Isolasi: Synthetic Fiber',
      'Berat: 1.2 kg',
      'Ukuran: 220 x 85 cm',
      'Bahan: Polyester',
    ],
  },
  {
    id: 4,
    name: 'Kompor Portable',
    slug: 'kompor-portable',
    description: 'Kompor portable ringan dan mudah dibawa. Efisien dalam penggunaan bahan bakar. Cocok untuk camping dan hiking.',
    price: 350000,
    stock: 25,
    image: '/products/kompor-portable.jpg',
    images: ['/products/kompor-portable.jpg'],
    category: 'Peralatan Masak',
    categorySlug: 'peralatan-masak',
    featured: true,
    rating: 4.6,
    reviews: 203,
    features: [
      'Berat: 85 gram',
      'Output: 3000W',
      'Bahan bakar: Gas canister',
      'Ukuran kecil: 10 x 8 cm',
    ],
  },
  {
    id: 5,
    name: 'Headlamp LED',
    slug: 'headlamp-led',
    description: 'Headlamp LED dengan berbagai mode pencahayaan. Tahan air dan tahan lama.',
    price: 150000,
    stock: 30,
    image: '/products/headlamp-led.jpg',
    images: ['/products/headlamp-led.jpg'],
    category: 'Penerangan',
    categorySlug: 'penerangan',
    featured: false,
    rating: 4.5,
    reviews: 178,
    features: [
      'LED: 3 mode',
      'Baterai: 3x AAA',
      'Jarak: 50 meter',
      'Waterproof IPX4',
    ],
  },
  {
    id: 6,
    name: 'Trekking Pole',
    slug: 'trekking-pole',
    description: 'Trekking pole yang ringan dan kuat. Dapat dilipat untuk kemudahan penyimpanan.',
    price: 400000,
    stock: 18,
    image: '/products/trekking-pole.jpg',
    images: ['/products/trekking-pole.jpg'],
    category: 'Peralatan Gunung',
    categorySlug: 'peralatan-gunung',
    featured: false,
    rating: 4.8,
    reviews: 92,
    features: [
      'Material: Aluminium 7075',
      'Berat: 250 gram/pasang',
      'Dapat dilipat: 3 section',
      'Length: 110-130 cm',
    ],
  },
  {
    id: 7,
    name: 'Water Bottle 1L',
    slug: 'water-bottle-1l',
    description: 'Botol air stainless steel dengan kapasitas 1 liter. Tahan lama dan ramah lingkungan.',
    price: 120000,
    stock: 40,
    image: '/products/water-bottle-1l.jpg',
    images: ['/products/water-bottle-1l.jpg'],
    category: 'Aksesoris',
    categorySlug: 'aksesoris',
    featured: false,
    rating: 4.4,
    reviews: 234,
    features: [
      'Kapasitas: 1L',
      'Material: Stainless Steel',
      'Insulated: Ya',
      'BPA Free',
    ],
  },
  {
    id: 8,
    name: 'Jaket Hiking',
    slug: 'jaket-hiking',
    description: 'Jaket hiking yang ringan dan tahan air. Cocok untuk berbagai kondisi cuaca.',
    price: 750000,
    stock: 12,
    image: '/products/jaket-hiking.jpg',
    images: ['/products/jaket-hiking.jpg'],
    category: 'Pakaian',
    categorySlug: 'pakaian',
    featured: false,
    rating: 4.9,
    reviews: 67,
    features: [
      'Waterproof & Breathable',
      'Windproof',
      'Berat: 350 gram',
      'Ukuran: S, M, L, XL',
    ],
  },
];

export const categories = [
  {
    name: 'Tenda & Shelter',
    slug: 'tenda-shelter',
    description: 'Tenda untuk camping dan hiking',
    count: products.filter((p) => p.categorySlug === 'tenda-shelter').length,
  },
  {
    name: 'Tas & Ransel',
    slug: 'tas-ransel',
    description: 'Tas ransel untuk petualangan',
    count: products.filter((p) => p.categorySlug === 'tas-ransel').length,
  },
  {
    name: 'Peralatan Masak',
    slug: 'peralatan-masak',
    description: 'Kompor dan peralatan masak',
    count: products.filter((p) => p.categorySlug === 'peralatan-masak').length,
  },
  {
    name: 'Peralatan Tidur',
    slug: 'peralatan-tidur',
    description: 'Sleeping bag dan matras',
    count: products.filter((p) => p.categorySlug === 'peralatan-tidur').length,
  },
  {
    name: 'Penerangan',
    slug: 'penerangan',
    description: 'Headlamp dan senter',
    count: products.filter((p) => p.categorySlug === 'penerangan').length,
  },
  {
    name: 'Peralatan Gunung',
    slug: 'peralatan-gunung',
    description: 'Peralatan untuk pendakian',
    count: products.filter((p) => p.categorySlug === 'peralatan-gunung').length,
  },
  {
    name: 'Aksesoris',
    slug: 'aksesoris',
    description: 'Aksesoris outdoor',
    count: products.filter((p) => p.categorySlug === 'aksesoris').length,
  },
  {
    name: 'Pakaian',
    slug: 'pakaian',
    description: 'Pakaian outdoor',
    count: products.filter((p) => p.categorySlug === 'pakaian').length,
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

