"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import CallButton from '../CallButton/CallButton';
import FormButton from '../FormButton/FormButton'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });

  return (
    <header className={styles.header}>
      <Link href="/">
        <motion.img
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: inView1 ? 1 : 0,
            x: inView1 ? 0 : -100,
          }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.logo}
          src="/logo3.png"
          alt="logo"
          width={280}
          height={280}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>   
      <CallButton />
      <FormButton />
      <div className={styles.buttonBox}> 
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle} aria-label="hamburger button">
            <span className={styles.line}> </span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
        </div>
        {isMenuOpen && 
      <section className={styles.menu}>
        <ul className={styles.ul}>
          <li> <Link className={styles.li} href="/" onClick={handleMenuToggle}> Accueil </Link></li>
          <li> <Link className={styles.li} href="/pictures" onClick={handleMenuToggle}> Nos réalisations </Link></li>
          <li> <Link className={styles.li} href="/nettoyage" onClick={handleMenuToggle}> Nettoyage de toiture </Link></li>
          <li> <Link className={styles.li} href="/anti-mousse" onClick={handleMenuToggle}> Traitement anti-mousse </Link></li>
          <li> <Link className={styles.li} href="/isolation" onClick={handleMenuToggle}> Isolation des combles </Link></li>
          <li> <Link className={styles.li} href="/toiture" onClick={handleMenuToggle}> Travaux de toiture </Link></li>
          <li> <Link className={styles.li} href="/zinguerie" onClick={handleMenuToggle}> Zinguerie </Link></li>
          <li> <Link className={styles.li} href="/savoir-faire" onClick={handleMenuToggle}> Pourquoi nous choisir ? </Link></li>
          <li> <Link className={styles.li} href="/contact" onClick={handleMenuToggle}> Obtenir un devis gratuit </Link></li>
        </ul>
      </section>}
    </header>
  )
}