import Gallery from '@/components/Gallery/Gallery'
import styles from '../page.module.css'

export const metadata = {
  title: 'Galerie de réalisations - Elite Couverture à Nantes',
  description: 'Découvrez les chantiers réalisés par Elite Couverture à Nantes : nettoyage, rénovation, pose de toitures dans la Loire-Atlantique.',
};

export default function Pictures() {
  return (
    <main className={styles.main}>
      <Gallery />     
    </main>
  )
}
