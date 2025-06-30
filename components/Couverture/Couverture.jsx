import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function PoseToitureNeuve() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Pose de toiture neuve professionnelle avec Elite Couverture dans la Loire-Atlantique
      </h1>

      <p className={styles.intro}>
        Elite Couverture est votre spécialiste de la pose de toiture neuve à Nantes 
        et dans tout le département de la Loire-Atlantique (44). Que ce soit pour une 
        construction neuve ou une extension, nous réalisons des couvertures solides, 
        esthétiques et parfaitement isolées.
      </p>

      <SectionImage
        src="/image13.avif"
        alt="Pose de toiture neuve à Nantes dans la Loire-Atlantique"
      />

      <h2 className={styles.h2}>1. Étude personnalisée et choix des matériaux adaptés</h2>
      <p className={styles.p}>
        Nos experts évaluent votre projet et vous conseillent sur le choix des matériaux
        (tuiles, ardoises, zinc, bac acier) en fonction de vos besoins, de l’architecture 
        de votre maison et des contraintes climatiques locales.
      </p>

      <h2 className={styles.h2}>2. Préparation du chantier et mise en place de la charpente</h2>
      <p className={styles.p}>
        Nous préparons le chantier en installant les dispositifs de sécurité nécessaires. 
        Nous assurons ensuite la pose ou la rénovation de la charpente en bois ou métallique, 
        garantissant ainsi la solidité de votre toiture neuve.
      </p>

      <h2 className={styles.h2}>3. Installation de la couverture neuve avec soin et précision</h2>
      <p className={styles.p}>
        Elite Couverture pose votre nouvelle toiture en respectant les normes d’étanchéité 
        et d’isolation. Chaque élément est installé avec rigueur pour assurer la 
        protection optimale de votre habitat contre les intempéries.
      </p>

      <h2 className={styles.h2}>4. Finitions, zinguerie et vérification complète</h2>
      <p className={styles.p}>
        Nous réalisons les finitions indispensables telles que la pose de gouttières, 
        faîtages et habillages de toit. Un contrôle qualité complet est effectué avant la 
        réception des travaux pour garantir votre entière satisfaction.
      </p>

      <p className={styles.intro}>
        Pour une pose de toiture neuve durable et de qualité dans la Loire-Atlantique, 
        faites confiance à Elite Couverture. Contactez-nous dès aujourd’hui pour un 
        devis gratuit et personnalisé.
      </p>
    </section>
  )
}
