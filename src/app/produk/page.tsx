import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/data/site";
import styles from "@/app/produk/produk.module.css";

export const metadata: Metadata = {
  title: "Produk",
};

const categories = [
  "Semua",
  "Sanjai pedas/gurih",
  "Cemilan manis",
  "Cemilan gurih/asin",
  "Cemilan mentah",
] as const;

type ProductsPageProps = {
  searchParams: Promise<{
    kategori?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const selectedCategory = params.kategori || "Semua";

  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <SiteHeader activeLabel="Produk" />

      <main>
        <section className={styles.intro} aria-labelledby="products-heading">
          <div>
            <p className={styles.eyebrow}>Produk Kami</p>
            <h1 id="products-heading">Pilihan oleh-oleh</h1>
          </div>
        </section>

        <section className={styles.catalog} aria-label="Daftar produk">
          <nav className={styles.filters} aria-label="Filter kategori">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const href =
                category === "Semua"
                  ? "/produk"
                  : `/produk?kategori=${encodeURIComponent(category)}`;

              return (
                <a
                  href={href}
                  className={isActive ? styles.filterActive : styles.filter}
                  aria-current={isActive ? "page" : undefined}
                  key={category}
                >
                  {category}
                </a>
              );
            })}
          </nav>

          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard
                product={product}
                imageSizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                key={product.id}
              />
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <p className={styles.empty}>Belum ada produk dalam kategori ini.</p>
          ) : null}

          <p className={styles.note}>
            Harga mengikuti kondisi dan ketersediaan produk. Hubungi kami untuk
            informasi terbaru.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
