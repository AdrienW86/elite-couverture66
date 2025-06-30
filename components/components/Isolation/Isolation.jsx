import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Isolation() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Isolation des combles à Perpignan dans les Pyrénées-Orientales : améliorez votre confort thermique avec Elite Couverture
      </h1>

      <p className={styles.intro}>
        L’isolation des combles est l’une des étapes les plus efficaces pour optimiser les performances énergétiques 
        d’un logement. Chez <strong>Elite Couverture</strong>, nous intervenons à Perpignan et partout en 
        Pyrénées-Orientales pour vous proposer des solutions sur mesure, durables et respectueuses de l’environnement.
        Grâce à notre expertise, vous réduisez vos pertes de chaleur, améliorez votre confort de vie 
        et réalisez d’importantes économies d’énergie.
      </p>

      <SectionImage
        src="/image7.avif"
        alt="Isolation des combles par un artisan couvreur à Perpignan, Pyrénées-Orientales"
      />

      <h2 className={styles.h2}>Pourquoi isoler vos combles ?</h2>
      <p className={styles.p}>
        Jusqu’à 30 % des déperditions de chaleur d’une maison passent par la toiture. 
        Une <strong>isolation thermique performante des combles</strong> permet de limiter 
        les pertes d’énergie en hiver, de garder la fraîcheur en été et d’optimiser les performances de votre système de chauffage. 
        C’est un investissement rentable, à court comme à long terme.
      </p>

      <h2 className={styles.h2}>Audit thermique personnalisé et conseils d’un professionnel local</h2>
      <p className={styles.p}>
        Avant toute intervention, notre équipe réalise un <strong>diagnostic thermique complet</strong> 
        de vos combles afin d’identifier les zones les plus sensibles aux déperditions. 
        En fonction de la configuration de votre logement et de votre budget, nous vous orientons 
        vers la solution d’isolation la plus efficace, qu’il s’agisse de combles perdus ou aménageables.
      </p>

      <h2 className={styles.h2}>Utilisation de matériaux isolants de qualité et respectueux de l’environnement</h2>
      <p className={styles.p}>
        Pour garantir une isolation optimale, nous utilisons des matériaux performants et écologiques : 
        laine de verre, laine de roche, ouate de cellulose… Tous nos produits sont certifiés et posés dans le respect 
        des normes en vigueur. Ils offrent une excellente protection thermique et phonique tout en assurant 
        la durabilité de l’installation.
      </p>

      <h2 className={styles.h2}>Pose professionnelle réalisée par des artisans couvreurs qualifiés</h2>
      <p className={styles.p}>
        Nos <strong>couvreurs expérimentés</strong> assurent une pose soignée et conforme à la réglementation 
        (RE 2020, normes BBC, etc.). Notre savoir-faire local vous garantit une isolation fiable et pérenne, 
        tout en respectant les délais et votre budget.
      </p>

      <h2 className={styles.h2}>Des économies d’énergie visibles et un confort durable</h2>
      <p className={styles.p}>
        Une bonne isolation vous permet de réduire significativement vos factures de chauffage, 
        d’améliorer votre confort intérieur en toute saison et d’augmenter la valeur de votre bien immobilier. 
        C’est aussi un geste fort pour l’environnement grâce à la diminution de votre consommation énergétique.
      </p>

      <p className={styles.intro}>
        Confiez l’isolation de vos combles à une entreprise locale de confiance. 
        <strong>Elite Couverture</strong> intervient rapidement à Perpignan et dans tout le département 66. Contactez-nous pour 
        un <strong>diagnostic gratuit et personnalisé</strong>, et transformez votre maison 
        en un véritable cocon thermique, performant et éco-responsable.
      </p>
    </section>
  )
}
