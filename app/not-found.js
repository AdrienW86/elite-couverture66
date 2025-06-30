// app/not-found.js
import Link from 'next/link'
import styles from '@/app/not-found.module.css' 

export const metadata = {
  title: 'Page non trouvée - Elite Couverture',
  description: 'Oups ! La page que vous recherchez n’existe pas. Retournez à l’accueil de Elite Couverture, couvreur à Nantes.',
};

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>404 - Page non trouvée</h1>
      <p className={styles.p}>Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link href="/" className={styles.link}>
        Retour à l'accueil
      </Link>
    </main>
  )
}
