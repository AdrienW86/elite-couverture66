
import Banner from '@/components/Banner/Banner'
import Mousse from '@/components/Mousse/Mousse'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Démoussage de toiture professionnel avec Elite Couverture - Loire-Atlantique',
  description: 'Elite Couverture à Nantes vous propose un démoussage de toiture professionnel pour éliminer mousses, lichens et algues. Nettoyage et traitement anti-mousse efficaces dans la Loire-Atlantique.',
};

export default function page() {
  return (
    <main className={styles.main}>    
      <Banner />
      <Mousse /> 
    </main>
  )
}
