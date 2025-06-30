import Banner from '@/components/Banner/Banner'
import Isolation from '@/components/Isolation/Isolation'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Isolation des combles avec Elite Couverture - Pyrénées-Orientales',
  description: "Elite Couverture propose l'isolation des combles à Perpignan et dans les Pyrénées-Orientales. Améliorez le confort thermique et réduisez vos factures d'énergie grâce à notre savoir-faire.",
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Isolation /> 
    </main>
  )
}
