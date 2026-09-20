import Image from "next/image";
import { featuredProducts, shippingDetails, site } from "@/data/site";
import { ProductCard } from "@/components/product-card";
import { Roofline } from "@/components/roofline";
import styles from "@/app/home.module.css";

export function Hero() {
  return <section className={styles.hero} aria-labelledby="hero-heading"><div className={styles.heroCopy}><Roofline /><p className={styles.eyebrow}>{site.descriptor}</p><h1 id="hero-heading">Rasa yang selalu membawa pulang.</h1><p className={styles.lead}>Aneka keripik, kerupuk, dan makanan khas Sumatera Barat, dari Padang Panjang untuk keluarga di mana saja.</p><div className={styles.actions}><a className={styles.button} href="#produk">Lihat Produk <span aria-hidden="true">→</span></a><a className={styles.textLink} href={site.whatsappUrl} target="_blank" rel="noreferrer">Pesan via WhatsApp ↗</a></div><p className={styles.note}>Dari Padang Panjang untuk Indonesia.</p></div><div className={styles.heroPhoto}><Image src="/images/Sanjai-lado-panjang.jpg" alt="Sanjai Lado Panjang" fill preload sizes="(max-width: 900px) 100vw, 55vw" className={styles.coverImage} /><div className={styles.photoCaption}>Sanjai Lado Panjang</div></div></section>;
}

export function ProductSection() {
  return <section id="produk" className={`${styles.section} ${styles.productsSection}`} aria-labelledby="products-heading"><div className={styles.sectionHead}><div><p className={styles.eyebrow}>Produk Kami</p><h2 id="products-heading">Pilihan oleh-oleh</h2></div><a className={styles.textLink} href="/produk">Lihat semua produk →</a></div><div className={styles.products}>{featuredProducts.map((product) => <ProductCard product={product} imageSizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" key={product.id} />)}</div><p className={styles.catalogNote}>Katalog akan dilengkapi bertahap. Harga dan ukuran akan ditampilkan setelah dikonfirmasi.</p></section>;
}

export function StorySection() {
  return <section id="cerita" className={`${styles.section} ${styles.story}`} aria-labelledby="story-heading"><div className={styles.storyPhoto}><Image src="/images/Kadai-Dalam.jpg" alt="Bagian dalam toko Sanjai Ummi El Khair" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage} /></div><div className={styles.storyCopy}><p className={styles.eyebrow}>Tentang Kami</p><h2 id="story-heading">Perjalanan yang terus dilanjutkan.</h2><p>Sanjai Ummi El Khair memulai usaha sejak tahun 1990-an. Memasuki awal 2000-an, usaha mulai fokus pada dagangan oleh-oleh. Seiring waktu, pilihan produk semakin lengkap dan pelanggan semakin banyak.</p><p>Pada 2016, ketika pasar tradisional direhabilitasi, usaha berpindah ke pasar sementara selama kurang lebih tiga tahun. Lokasi yang strategis membuat usaha semakin dikenal.</p><p>Setelah pasar selesai direhabilitasi pada 2019, perpindahan ke pasar baru membuat pelanggan lama lebih sulit menemukan lokasi usaha. Keluarga kemudian memilih lokasi baru yang dekat dengan lokasi pasar sementara sebelumnya dan kembali membangun pelanggan dari awal.</p><a className={`${styles.button} ${styles.outlineButton}`} href="#">Baca cerita lengkap →</a></div><blockquote>“Perlahan, pelanggan kami mulai menemukan jalan pulang lagi.”</blockquote></section>;
}

export function ShippingSection() {
  return <section className={styles.shipping} aria-labelledby="shipping-heading"><div className={styles.shippingIntro}><p className={styles.eyebrow}>Pengiriman</p><h2 id="shipping-heading">Ke mana saja.</h2></div>{shippingDetails.map((detail) => <div className={styles.shippingDetail} key={detail.title}><strong>{detail.title}</strong><p>{detail.description}</p></div>)}</section>;
}

export function ContactSection() {
  return <section id="kontak" className={styles.contact} aria-labelledby="contact-heading"><div className={styles.contactPhoto}><Image src="/images/Kadai-Muko.jpg" alt="Tampak depan toko Sanjai Ummi El Khair" fill sizes="(max-width: 900px) 100vw, 55vw" className={styles.coverImage} /></div><div className={styles.contactCopy}><p className={styles.eyebrow}>Kunjungi Toko Kami</p><h2 id="contact-heading">Temukan kami di Padang Panjang.</h2><p>Jalan Abdul Muis, Gedung M. Syafei Pasar No. samping, Pasar Baru, Kecamatan Padang Panjang Barat, Kota Padang Panjang, Sumatera Barat 27118.</p><div className={styles.storeMeta}><strong>Jam buka</strong><span>Setiap hari · 07:00–21:00 WIB</span></div><div className={styles.actions}><a className={`${styles.button} ${styles.outlineButton}`} href={site.mapsUrl} target="_blank" rel="noreferrer">Buka Google Maps →</a><a className={styles.textLink} href={site.whatsappUrl} target="_blank" rel="noreferrer">{site.phone}</a></div></div></section>;
}
