import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css'

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          src="/logo3.png"
          alt="logo"
          width={200}
          height={200}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <Link href='/mentions-legales' className={styles.link}>
        Mentions légales
      </Link>
      <Link href='/confidentialite' className={styles.link}>
        Politique de confidentialité
      </Link>
      <a className={styles.link} href="https://code-v.fr" target="_blank" rel="noopener noreferrer">
        Réalisé par <span className={styles.codev}> Codev </span>
      </a>
      <p className={styles.txt}> © {currentYear}. Tous droits réservés. </p>
    </footer>
  )
}
