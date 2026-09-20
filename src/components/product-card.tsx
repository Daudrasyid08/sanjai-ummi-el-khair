import Image from "next/image";
import type { Product } from "@/data/site";
import styles from "@/components/product-card.module.css";

type ProductCardProps = {
  product: Product;
  className?: string;
  imageSizes: string;
};

export function ProductCard({
  product,
  className,
  imageSizes,
}: ProductCardProps) {
  return (
    <article
      className={[styles.card, className].filter(Boolean).join(" ")}
    >
      {product.image ? (
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={imageSizes}
            className={styles.coverImage}
          />
        </div>
      ) : null}

      <div className={styles.copy}>
        <h3>{product.name}</h3>

        {product.category ? (
          <p className={styles.category}>{product.category}</p>
        ) : null}

        {product.weightOrSize ? (
          <p className={styles.size}>{product.weightOrSize}</p>
        ) : null}

        {product.shortDescription ? (
          <p className={styles.description}>{product.shortDescription}</p>
        ) : null}
      </div>
    </article>
  );
}