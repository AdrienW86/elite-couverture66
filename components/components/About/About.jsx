import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Qui sommes-nous ?</h1>
        <p className={styles.intro}>
          Basée au coeur des Pyrénées-Orientales, Elite Couverture est une entreprise artisanale spécialisée 
          dans les travaux de toiture : pose, rénovation, entretien et traitement. Nous mettons 
          à votre service une équipe de couvreurs passionnés et expérimentés, engagés à vous 
          garantir des prestations soignées, durables et adaptées à vos besoins.
        </p>

        <h2 className={styles.h2}>Une entreprise locale proche de vous</h2>
        <p className={styles.p}>
          Chez Elite Couverture, chaque toit a son histoire. Nous vous proposons un accompagnement 
          personnalisé, adapté à vos besoins et à votre budget. Que vous soyez un particulier ou un 
          professionnel, nous concevons des solutions sur mesure pour une toiture fiable et durable.
        </p>

        <h2 className={styles.h2}>Des couvreurs qualifiés et passionnés</h2>
        <p className={styles.p}>
          Notre équipe est composée de professionnels expérimentés, formés aux dernières techniques 
          de couverture, zinguerie et rénovation. Nous sélectionnons des matériaux de qualité pour assurer 
          l’étanchéité, la solidité et la longévité de votre toiture.
        </p>

        <h2 className={styles.h2}>Engagement, réactivité et satisfaction garantie</h2>
        <p className={styles.p}>
          De votre premier appel jusqu’à la fin du chantier, Elite Couverture s’engage à respecter 
          les délais, assurer un chantier propre et vous offrir une qualité de service irréprochable. 
          Tous nos travaux sont couverts par une garantie décennale pour votre sérénité.
        </p>

        <p className={styles.intro}>
          Faites confiance à Elite Couverture, votre spécialiste toiture dans les Pyrénées-Orientales, 
          pour des travaux réalisés dans les règles de l’art, avec professionnalisme et transparence.
        </p>
    </section>
  )
}

