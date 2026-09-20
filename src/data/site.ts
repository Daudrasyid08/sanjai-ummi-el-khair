export type Product = {
  id: string;
  name: string;
  category: string | null;
  image: string | null;
  shortDescription: string | null;
  weightOrSize: string | null;
  price: number | null;
  availability: string | null;
};

export const site = {
  name: "Sanjai Ummi El Khair",
  descriptor: "Oleh-oleh khas Padang Panjang",
  whatsappUrl: "https://wa.me/6281299778054",
  phone: "0812-9977-8054",
  mapsUrl: "https://maps.app.goo.gl/PLUm3DR76kNcN69N6",
  facebookUrl: "https://www.facebook.com/share/1KodukwMcu/",
} as const;

export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Cerita Kami", href: "/#cerita" },
  { label: "Kontak", href: "/#kontak" },
] as const;

export const products: readonly Product[] = [
  {
    id: "sanjai-lado-panjang",
    name: "Sanjai Lado Panjang",
    category: "Sanjai pedas/gurih",
    image: "/images/products/sanjai-lado-panjang.jpg",
    shortDescription: null,
    weightOrSize: "3 ons",
    price: null,
    availability: null,
  },
  {
    id: "karupuak-jariang-balado",
    name: "Karupuak Jariang Balado",
    category: "Sanjai pedas/gurih",
    image: "/images/products/Karupuak Jariang Balado.jpg",
    shortDescription: null,
    weightOrSize: "2 ons",
    price: null,
    availability: null,
  },
  {
    id: "jaguang-goreang",
    name: "Jaguang Goreang",
    category: "Sanjai pedas/gurih",
    image: "/images/products/Jaguang_goreang.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "atun",
    name: "Atun",
    category: "Sanjai pedas/gurih",
    image: "/images/products/atun.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "dakak-bungo",
    name: "Dakak Bungo",
    category: "Sanjai pedas/gurih",
    image: "/images/products/dakak-bungo.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "dakak-dakak",
    name: "Dakak-dakak",
    category: "Sanjai pedas/gurih",
    image: "/images/products/dakak-dakak.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "karak-kaliang",
    name: "Karak Kaliang",
    category: "Sanjai pedas/gurih",
    image: "/images/products/Karak_kaliang.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "rakik-pisang",
    name: "Rakik Pisang",
    category: "Cemilan manis",
    image: "/images/products/Rakik Pisang.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "batiah",
    name: "Batiah",
    category: "Cemilan manis",
    image: "/images/products/batiah.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "sarang-samuik",
    name: "Sarang Samuik",
    category: "Cemilan manis",
    image: "/images/products/Sarang_samuik.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "kacang-balado",
    name: "Kacang Balado",
    category: "Cemilan manis",
    image: "/images/products/Kacang_Balado.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "rakik-kacang",
    name: "Rakik Kacang",
    category: "Cemilan gurih/asin",
    image: "/images/products/Rakik_kacang.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "rakik-maco",
    name: "Rakik Maco",
    category: "Cemilan gurih/asin",
    image: "/images/products/rakik-maco.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "lento-gadang",
    name: "Lento Gadang",
    category: "Cemilan gurih/asin",
    image: "/images/products/lento-gadang-2.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "kacang-gdr",
    name: "Kacang GDR",
    category: "Cemilan gurih/asin",
    image: "/images/products/Kacang_GDR.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "randang-talua",
    name: "Randang Talua",
    category: "Cemilan gurih/asin",
    image: "/images/products/Randang Talua.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "kacimuih",
    name: "Kacimuih",
    category: "Cemilan gurih/asin",
    image: "/images/products/kacimuih.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "krupuk-bungo",
    name: "Krupuk Bungo",
    category: "Cemilan gurih/asin",
    image: "/images/products/Krupuk bungo.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "keripik-tempe",
    name: "Keripik Tempe",
    category: "Cemilan gurih/asin",
    image: "/images/products/Keripik Tempe.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "karupuak-merah-matah",
    name: "Karupuak Merah Matah",
    category: "Cemilan mentah",
    image: "/images/products/Karupuak Merah Matah.jpg",
    shortDescription: null,
    weightOrSize: "1/4 kg · 1/2 kg · 1 kg",
    price: null,
    availability: null,
  },
  {
    id: "matah-sawahlunto",
    name: "Matah Sawahlunto",
    category: "Cemilan mentah",
    image: "/images/products/Matah Sawahlunto.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
  {
    id: "matah-ketek",
    name: "Matah Ketek",
    category: "Cemilan mentah",
    image: "/images/products/Matah ketek.jpg",
    shortDescription: null,
    weightOrSize: "Per bungkus",
    price: null,
    availability: null,
  },
];

export const homepageProductIds = [
  "sanjai-lado-panjang",
  "atun",
  "rakik-maco",
  "matah-sawahlunto",
] as const;

export const featuredProducts = homepageProductIds.map((id) => {
  const product = products.find((item) => item.id === id);
  if (!product) throw new Error(`Missing featured product: ${id}`);
  return product;
});

export const shippingDetails = [
  { title: "Seluruh Indonesia", description: "Pengiriman ke berbagai kota, termasuk Jakarta, Palembang, dan Papua." },
  { title: "Hingga luar negeri", description: "Usaha ini pernah mengirim pesanan sampai Jepang dan Amerika." },
  { title: "Ekspedisi sesuai kebutuhan", description: "Lion Parcel untuk paket kecil dan Indah Cargo untuk pengiriman besar." },
] as const;
