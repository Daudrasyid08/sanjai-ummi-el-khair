import Link from "next/link";
import { navigation, site } from "@/data/site";
import styles from "@/app/home.module.css";

type SiteHeaderProps = { activeLabel?: string };

export function SiteHeader({ activeLabel = "Beranda" }: SiteHeaderProps) {
  return <header className={styles.siteHeader}><div className={`${styles.container} ${styles.nav}`}><Link className={styles.brand} href="/" aria-label={site.name}><strong>{site.name}</strong><span>{site.descriptor}</span></Link><nav className={styles.navigation} aria-label="Navigasi utama">{navigation.map((item) => <a aria-current={item.label === activeLabel ? "page" : undefined} className={item.label === activeLabel ? styles.active : undefined} href={item.href} key={item.label}>{item.label}</a>)}</nav><a className={`${styles.button} ${styles.smallButton}`} href={site.whatsappUrl} target="_blank" rel="noreferrer">Pesan via WhatsApp</a></div></header>;
}
