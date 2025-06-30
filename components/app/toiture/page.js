import Banner from '@/components/Banner/Banner'
import Reparation from '@/components/Reparation/Reparation'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Réparation de toiture à Perpignan - Urgence et dépannage Elite Couverture',
  description: 'Elite Couverture intervient rapidement pour la réparation de votre toiture à Perpignan : tuiles cassées, fuites, infiltrations. Service d’urgence dans les Pyrénées-Orientales.',
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Reparation /> 
    </main>
  )
}