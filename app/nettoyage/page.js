import Head from 'next/head'
import Banner from '@/components/Banner/Banner'
import Nettoyage from '@/components/Nettoyage/Nettoyage'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Nettoyage de toiture à Perpignan - Elite Couverture',
  description: 'Elite Couverture réalise le nettoyage complet de votre toiture à Perpignan : traitement anti-mousse, entretien et préservation de votre couverture dans les Pyrénées-Orientales.',
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Nettoyage /> 
    </main>
  )
}
