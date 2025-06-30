import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Description from '@/components/Description/Description'
import styles from './page.module.css'

export const metadata = {
  title: 'Elite Couverture - Couvreur à Perpignan et Pyrénées-Orientales ',
  description: 'Elite Couverture est votre spécialiste en couverture, rénovation et entretien de toitures à Perpignan et alentours. Qualité, réactivité et savoir-faire dans les Pyrénées-Orientales.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />

      <Description />
    </main>
  )
}
