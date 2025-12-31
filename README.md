# 🏔️ Toko Outdoor - Website E-Commerce Perlengkapan Outdoor

Website e-commerce untuk toko perlengkapan outdoor yang dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS.

## ✨ Fitur

- 🏠 **Homepage** - Hero section, kategori produk, dan produk unggulan
- 📦 **Halaman Produk** - Daftar produk dengan filter dan pencarian
- 🔍 **Detail Produk** - Informasi lengkap produk dengan gambar dan spesifikasi
- 🛒 **Keranjang Belanja** - Manajemen keranjang dengan update quantity
- 👤 **Autentikasi** - Login dan registrasi dengan NextAuth (mock data)
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- 🌙 **Dark Mode** - Dukungan tema gelap

## 🚀 Memulai

### Prasyarat

- Node.js 18+ 
- npm atau yarn

> **Catatan:** Untuk saat ini website menggunakan data mock (tanpa database). Database dapat ditambahkan nanti jika diperlukan.

### Instalasi

1. Clone repository atau buka folder project:
```bash
cd toko_outdoor
```

2. Install dependencies:
```bash
npm install
```

3. (Opsional) Setup environment variables untuk NextAuth:
Buat file `.env` di root project dengan isi:
```env
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-change-this-in-production"
```

4. Jalankan development server:
```bash
npm run dev
```

5. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📸 Menambahkan Gambar Produk

1. Letakkan gambar produk di folder `public/products/`
2. Nama file harus sesuai dengan path yang ada di `src/lib/products.ts`
3. Format gambar yang disarankan: JPG atau PNG
4. Ukuran gambar yang disarankan: minimal 600x600px untuk kualitas yang baik

Contoh:
- `public/products/tenda-dome-4.jpg`
- `public/products/ransel-hiking-50l.jpg`
- `public/products/sleeping-bag-10c.jpg`

Jika gambar belum tersedia, website akan menampilkan placeholder icon.

## 📁 Struktur Project

```
toko_outdoor/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API routes
│   │   ├── products/           # Halaman produk
│   │   ├── cart/               # Halaman keranjang
│   │   ├── categories/         # Halaman kategori
│   │   ├── login/              # Halaman login
│   │   └── page.tsx            # Homepage
│   ├── components/             # Komponen React
│   │   └── Navigation.tsx      # Komponen navigasi
│   ├── lib/                    # Utilities
│   │   └── prisma.ts           # Prisma client
│   └── types/                  # TypeScript types
└── public/                     # Static files
```

## 📝 Data Produk

Data produk saat ini disimpan di `src/lib/products.ts` sebagai mock data. Anda dapat:
- Mengedit data produk langsung di file tersebut
- Menambahkan produk baru
- Mengubah harga, deskripsi, dan informasi lainnya

Untuk menggunakan database (Prisma + PostgreSQL), Anda dapat:
1. Setup database sesuai instruksi di bagian bawah
2. Migrate data dari `src/lib/products.ts` ke database
3. Update halaman untuk menggunakan Prisma client

## 🛠️ Teknologi yang Digunakan

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **NextAuth** - Autentikasi (dengan mock data)
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Prisma** - (Opsional, untuk database di masa depan)

## 📝 Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Jalankan production server
- `npm run lint` - Jalankan ESLint

## 🔐 Autentikasi

Project menggunakan NextAuth dengan mock data untuk development. 

**Akun default untuk testing:**
- Email: `admin@tokooutdoor.com` / Password: `admin123` (Admin)
- Email: `user@example.com` / Password: `user123` (User)

Untuk production, setup database dan update `src/lib/auth.ts` untuk menggunakan Prisma.

## 🎨 Customization

- Edit warna tema di `src/app/globals.css`
- Update metadata di `src/app/layout.tsx`
- Tambah produk/kategori melalui Prisma Studio: `npx prisma studio`

## 📦 Deployment

1. Build project:
```bash
npm run build
```

2. Deploy ke Vercel, Netlify, atau platform lainnya

3. Setup environment variables di platform deployment

4. Setup database (PostgreSQL) di cloud provider

## 🤝 Kontribusi

Silakan buat issue atau pull request untuk kontribusi!

## 📄 License

MIT License
