# 🏔️ Toko Outdoor - Website E-Commerce Perlengkapan Outdoor

Website e-commerce untuk toko perlengkapan outdoor yang dibangun dengan Next.js 16, TypeScript, Prisma, dan Tailwind CSS.

## ✨ Fitur

- 🏠 **Homepage** - Hero section, kategori produk, dan produk unggulan
- 📦 **Halaman Produk** - Daftar produk dengan filter dan pencarian
- 🔍 **Detail Produk** - Informasi lengkap produk dengan gambar dan spesifikasi
- 🛒 **Keranjang Belanja** - Manajemen keranjang dengan update quantity
- 👤 **Autentikasi** - Login dan registrasi dengan NextAuth
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- 🌙 **Dark Mode** - Dukungan tema gelap

## 🚀 Memulai

### Prasyarat

- Node.js 18+ 
- PostgreSQL database
- npm atau yarn

### Instalasi

1. Clone repository atau buka folder project:
```bash
cd toko_outdoor
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
Buat file `.env` di root project dengan isi:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/toko_outdoor?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-change-this-in-production"
```

4. Setup database:
```bash
# Generate Prisma Client
npx prisma generate

# Jalankan migration
npx prisma migrate dev --name init

# (Opsional) Seed database dengan data contoh
# Install tsx jika belum: npm install -D tsx
# Kemudian jalankan: npm run db:seed
# atau: npx prisma db seed
```

5. Jalankan development server:
```bash
npm run dev
```

6. Buka [http://localhost:3000](http://localhost:3000) di browser

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

## 🗄️ Database Schema

Project menggunakan Prisma dengan PostgreSQL. Schema mencakup:

- **User** - Data pengguna dan autentikasi
- **Product** - Data produk
- **Category** - Kategori produk
- **CartItem** - Item di keranjang
- **Order** - Data pesanan
- **OrderItem** - Item dalam pesanan

## 🛠️ Teknologi yang Digunakan

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Prisma** - ORM untuk database
- **NextAuth** - Autentikasi
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **PostgreSQL** - Database

## 📝 Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Jalankan production server
- `npm run lint` - Jalankan ESLint

## 🔐 Autentikasi

Project menggunakan NextAuth untuk autentikasi. Fitur:
- Login dengan email/password
- Registrasi user baru
- Session management
- Role-based access (USER, ADMIN)

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
