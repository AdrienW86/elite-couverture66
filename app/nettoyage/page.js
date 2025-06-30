import Head from 'next/head'
import Banner from '@/components/Banner/Banner'
import Nettoyage from '@/components/Nettoyage/Nettoyage'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Nettoyage de toiture à Nantes - Elite Couverture',
  description: 'Elite Couverture réalise le nettoyage complet de votre toiture à Nantes : traitement anti-mousse, entretien et préservation de votre couverture dans la Loire-Atlantique.',
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Nettoyage /> 
    </main>
  )
}
