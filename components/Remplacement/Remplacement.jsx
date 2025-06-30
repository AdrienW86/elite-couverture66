import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Zinguerie() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Travaux de zinguerie à Perpignan et dans les Pyrénées-Orientales avec Elite Couverture
      </h1>

      <p className={styles.intro}>
        Spécialiste des travaux de toiture à Perpignan et dans tout le département des Pyrénées-Orientales (66),
        Elite Couverture vous propose un service complet de zinguerie : pose, rénovation, réparation et entretien 
        de tous vos éléments en zinc. Ces composants sont essentiels à l’étanchéité et à la durabilité de votre toiture.
      </p>

      <SectionImage
        src="/image4.avif"
        alt="Travaux de zinguerie à Perpignan - Pose de gouttières et chéneaux"
      />

      <h2 className={styles.h2}> Inspection et diagnostic de vos éléments de zinguerie</h2>
      <p className={styles.p}>
        Nos couvreurs zingueurs réalisent une vérification minutieuse de l’ensemble des composants en zinc : 
        gouttières, chéneaux, noues, abergements de cheminée, solins, rives et faîtages métalliques. 
        L’objectif : identifier les zones d’usure, les fuites, les déformations ou les défauts d’assemblage.
      </p>

      <h2 className={styles.h2}> Pose de zinguerie sur toiture neuve ou rénovée</h2>
      <p className={styles.p}>
        Vous faites construire une maison ou vous refaites complètement votre toiture ? 
        Elite Couverture assure la mise en place complète de votre zinguerie en zinc, cuivre ou aluminium, 
        selon l’esthétique de votre habitation et les contraintes climatiques locales. 
        Nous garantissons une intégration parfaite et une évacuation optimale des eaux pluviales.
      </p>

      <SectionImage
        src="/image14.avif"
        alt="Pose de zinguerie et gouttières à Perpignan Pyrénées-Orientales"
      />

      <h2 className={styles.h2}> Réparation et remplacement de vos éléments en zinc</h2>
      <p className={styles.p}>
        Une fuite sur un chéneau ? Un raccord de gouttière qui se décroche ? 
        Nous intervenons rapidement pour réparer ou remplacer les éléments défectueux. 
        Nos équipes utilisent des techniques de soudure ou d’assemblage adaptées pour garantir 
        la longévité de vos installations.
      </p>

      <h2 className={styles.h2}> Entretien préventif et nettoyage de vos gouttières</h2>
      <p className={styles.p}>
        Pour éviter les débordements, infiltrations ou dommages sur votre façade, 
        nous vous proposons des contrats d’entretien incluant le nettoyage régulier 
        de vos gouttières et la vérification des fixations. Cet entretien permet 
        également de détecter à temps tout début de corrosion ou d’usure.
      </p>

      <h2 className={styles.h2}> Zinguerie sur mesure pour toitures complexes</h2>
      <p className={styles.p}>
        Toitures anciennes, monuments historiques, bâtiments à pans coupés ou à forte pente : 
        nous réalisons sur mesure les pièces de zinguerie les plus complexes en atelier ou directement sur chantier. 
        Chaque pièce est fabriquée pour s’adapter parfaitement à la configuration de votre toiture.
      </p>

      <p className={styles.intro}>
        Faites appel à Elite Couverture pour tous vos travaux de zinguerie à Perpignan et dans les Pyrénées-Orientales.
        Grâce à notre savoir-faire artisanal et à l'utilisation de matériaux de qualité, 
        nous assurons une étanchéité parfaite et une esthétique soignée de votre toiture. 
        Contactez-nous pour un devis gratuit ou une intervention rapide !
      </p>
    </section>
  )
}

