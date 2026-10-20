import type { Metadata } from 'next';
import Banner from '@/components/Banner/Banner'
import Remplacement from '@/components/Remplacement/Remplacement'
import styles from '@/app/page.module.css'

export const metadata: Metadata = {
  title: 'Travaux de zinguerie - Elite Couverture',
  description: 'Vos gouttières sont trop endommagées ? Faites appel à Elite Couverture pour un remplacement complet à Perpignan et dans le 66.',
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Remplacement /> 
    </main>
  )
}
