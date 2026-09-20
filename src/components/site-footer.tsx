import { navigation, site } from "@/data/site";
import styles from "@/app/home.module.css";

export function SiteFooter() {
  return <footer className={styles.footer}><div className={`${styles.container} ${styles.footerGrid}`}><div><strong>{site.name}</strong><span>{site.descriptor}</span></div><nav className={styles.footerLinks} aria-label="Navigasi footer">{navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav><a href={site.facebookUrl} target="_blank" rel="noreferrer">Facebook ↗</a></div></footer>;
}
