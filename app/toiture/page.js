import Banner from '@/components/Banner/Banner'
import Reparation from '@/components/Reparation/Reparation'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Réparation de toiture à Nantes - Urgence et dépannage Elite Couverture',
  description: 'Elite Couverture intervient rapidement pour la réparation de votre toiture à Nantes : tuiles cassées, fuites, infiltrations. Service d’urgence dans la Loire-Atlantique.',
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Reparation /> 
    </main>
  )
}