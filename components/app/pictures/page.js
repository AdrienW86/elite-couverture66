import Gallery from '@/components/Gallery/Gallery'
import styles from '../page.module.css'

export const metadata = {
  title: 'Galerie de réalisations - Elite Couverture à Perpignan',
  description: 'Découvrez les chantiers réalisés par Elite Couverture à Perpignan : nettoyage, rénovation, pose de toitures dans les Pyrénées-Orientales.',
};

export default function Pictures() {
  return (
    <main className={styles.main}>
      <Gallery />     
    </main>
  )
}
