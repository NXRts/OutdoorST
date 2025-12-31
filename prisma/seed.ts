import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'tenda-shelter' },
      update: {},
      create: {
        name: 'Tenda & Shelter',
        slug: 'tenda-shelter',
        description: 'Tenda untuk camping dan hiking',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'tas-ransel' },
      update: {},
      create: {
        name: 'Tas & Ransel',
        slug: 'tas-ransel',
        description: 'Tas ransel untuk petualangan',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'peralatan-masak' },
      update: {},
      create: {
        name: 'Peralatan Masak',
        slug: 'peralatan-masak',
        description: 'Kompor dan peralatan masak',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'peralatan-tidur' },
      update: {},
      create: {
        name: 'Peralatan Tidur',
        slug: 'peralatan-tidur',
        description: 'Sleeping bag dan matras',
      },
    }),
  ]);

  console.log('✅ Categories created');

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Tenda Dome 4 Orang',
        slug: 'tenda-dome-4-orang',
        description: 'Tenda dome berkualitas tinggi dengan kapasitas 4 orang. Terbuat dari bahan waterproof dan tahan UV.',
        price: 1500000,
        stock: 10,
        featured: true,
        categoryId: categories[0].id,
        images: [],
      },
    }),
    prisma.product.create({
      data: {
        name: 'Ransel Hiking 50L',
        slug: 'ransel-hiking-50l',
        description: 'Ransel hiking kapasitas 50L dengan sistem ventilasi yang baik. Cocok untuk hiking dan backpacking.',
        price: 800000,
        stock: 15,
        featured: true,
        categoryId: categories[1].id,
        images: [],
      },
    }),
    prisma.product.create({
      data: {
        name: 'Sleeping Bag -10°C',
        slug: 'sleeping-bag-10c',
        description: 'Sleeping bag dengan rating suhu -10°C. Cocok untuk camping di daerah dingin.',
        price: 600000,
        stock: 20,
        featured: true,
        categoryId: categories[3].id,
        images: [],
      },
    }),
    prisma.product.create({
      data: {
        name: 'Kompor Portable',
        slug: 'kompor-portable',
        description: 'Kompor portable ringan dan mudah dibawa. Efisien dalam penggunaan bahan bakar.',
        price: 350000,
        stock: 25,
        featured: true,
        categoryId: categories[2].id,
        images: [],
      },
    }),
  ]);

  console.log('✅ Products created');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@tokooutdoor.com' },
    update: {},
    create: {
      email: 'admin@tokooutdoor.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created');
  console.log('📧 Email: admin@tokooutdoor.com');
  console.log('🔑 Password: admin123');

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'User Test',
      password: userPassword,
      role: 'USER',
    },
  });

  console.log('✅ Test user created');
  console.log('📧 Email: user@example.com');
  console.log('🔑 Password: user123');

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

