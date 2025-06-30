import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import styles from '../page.module.css'

export const metadata = {
  title: 'Contactez Elite Couverture - Couvreur à Nantes et alentours',
  description: 'Besoin d’un devis ou d’un renseignement ? Contactez Elite Couverture, artisan couvreur à Nantes, pour tous vos projets de toiture dans la Loire-Atlantique.',
};

export default function Contact() {
  return (
    <main className={styles.container}>      
      <section className={styles.background}>
        <h2 className={styles.h2}>  Nous contacter </h2> 
          <Map />         
        </section>
        <section className={styles.background2}>
          <Form />
        </section>     
    </main>
  )
}