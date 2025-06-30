import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Reparation() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Réparation, remplacement et pose de toiture neuve à Perpignan et en Pyrénées-Orientales (66)
      </h1>

      <p className={styles.intro}>
        Toiture endommagée, vétuste ou à refaire entièrement ? 
        <strong> Elite Couverture</strong> est votre partenaire de confiance pour tous 
        vos travaux de <strong>réparation de toiture, pose de couverture neuve et 
        réfection complète</strong> à Perpignan et dans tout le département des Pyrénées-Orientales.
        Nous intervenons rapidement, efficacement, et avec une expertise reconnue.
      </p>

      <SectionImage
        src="/image2.avif"
        alt="Réparation et pose de toiture à Nantes et en Loire-Atlantique"
      />

      {/* Réparation de toiture */}
      <h2 className={styles.h2}>1. Réparation de toiture : une intervention rapide pour stopper les dégâts</h2>
      <p className={styles.p}>
        Une tuile cassée, une infiltration d’eau, une gouttière percée ou des éléments déplacés peuvent 
        compromettre l’étanchéité et la sécurité de votre toiture. Nos artisans couvreurs réalisent un 
        <strong>diagnostic complet de votre couverture</strong> afin d’identifier les causes des problèmes : 
        tuiles ou ardoises fissurées, faîtage dégradé, solins abîmés, zinguerie rouillée, etc.
      </p>
      <p className={styles.p}>
        Une fois les défauts repérés, nous effectuons les <strong>réparations nécessaires</strong>:
        remplacement de tuiles, réparation de fuites, reprise d’étanchéité, réparation de noues et 
        de gouttières, etc. Nos interventions sont rapides, propres et réalisées dans le respect 
        des normes de couverture en vigueur.
      </p>

      <h3 className={styles.h2}>Réparation après intempéries ou sinistres</h3>
      <p className={styles.p}>
        En cas de tempête, grêle, fortes pluies ou chute d’arbre, notre équipe intervient en urgence 
        pour sécuriser la zone, effectuer les réparations prioritaires, puis remettre en état votre 
        toiture avec un devis clair et précis. Nous pouvons également vous accompagner dans la 
        déclaration auprès de votre assurance habitation.
      </p>

      {/* Dépose et repose complète */}
      <h2 className={styles.h2}>2. Réfection complète de toiture : dépose et remplacement</h2>
      <p className={styles.p}>
        Votre toiture est trop endommagée, trop ancienne ou ne répond plus aux normes d’isolation et 
        d’étanchéité ? Nous réalisons la <strong>dépose de l’ancienne toiture</strong> (tuiles, ardoises, bac acier, etc.) 
        ainsi que la <strong>réfection complète de la couverture</strong>, incluant :
      </p>
      <ul className={styles.p}>
        <li> Démontage de l’ancienne couverture et traitement de la charpente si nécessaire</li>
        <li> Pose d’un écran sous toiture (pare-pluie ou écran HPV)</li>
        <li> Remplacement ou pose d’isolant en toiture selon vos besoins (isolation thermique ou phonique)</li>
        <li> Repose complète d’une nouvelle couverture avec les matériaux de votre choix</li>
        <li> Remplacement de la zinguerie (chéneaux, gouttières, rives...)</li>
      </ul>

      <p className={styles.p}>
        Ce type d’intervention améliore non seulement l’étanchéité et la solidité de votre toit, 
        mais optimise également <strong>la performance énergétique de votre habitation</strong>.
        Nous vous accompagnons aussi dans les démarches pour bénéficier d’aides à la rénovation 
        énergétique (MaPrimeRénov’, TVA réduite, etc.).
      </p>

      {/* Pose de toiture neuve */}
      <h2 className={styles.h2}>3. Pose de toiture neuve : votre couverture sur mesure</h2>
      <p className={styles.p}>
        Vous construisez une maison neuve ou un agrandissement ? Elite Couverture prend en charge 
        la <strong>pose complète de votre toiture neuve</strong> dans le respect des règles de l’art. 
        Nous vous conseillons sur les matériaux les plus adaptés à votre projet et à votre budget :
        tuiles en terre cuite, ardoises naturelles, zinc, bac acier, panneaux sandwich...
      </p>
      <p className={styles.p}>
        Notre équipe se charge de toutes les étapes :
      </p>
      <ul className={styles.p}>
        <li> Mise en place de la charpente (ou travail en collaboration avec votre charpentier)</li>
        <li> Pose d’un écran sous toiture étanche</li>
        <li> Installation du revêtement de couverture</li>
        <li> Finitions : faîtage, rives, ventilation, zinguerie</li>
      </ul>
      <p className={styles.p}>
        Une <strong>toiture neuve bien conçue</strong> garantit une excellente étanchéité, 
        une bonne régulation thermique, et valorise votre bien immobilier.
      </p>

      {/* Suivi, garanties et accompagnement */}
      <h2 className={styles.h2}>4. Garantie, suivi et service sur mesure</h2>
      <p className={styles.p}>
        Tous nos travaux sont couverts par une <strong>garantie décennale</strong>. 
        Nous travaillons uniquement avec des matériaux certifiés et de qualité professionnelle. 
        Notre objectif est de vous offrir une toiture fiable, esthétique et durable.
      </p>
      <p className={styles.p}>
        Nous proposons également des <strong>contrats d’entretien toiture personnalisés</strong>, 
        afin d’éviter l’apparition de nouveaux problèmes : démoussage régulier, vérification des éléments d’étanchéité, etc.
      </p>

      <SectionImage
        src="/image2.avif"
        alt="Dépose et remplacement complet d'une toiture ancienne à Perpignan"
      />

      {/* Conclusion CTA */}
      <p className={styles.intro}>
        Faites appel à <strong>Elite Couverture</strong> pour tous vos besoins en réparation, 
        remplacement ou pose de toiture à <strong>Perpignan
        et partout dans les Pyrénées-Orientales</strong>. Profitez de notre <strong>devis gratuit</strong>, 
        de conseils personnalisés, et d’une qualité de service irréprochable.
      </p>
    </section>
  )
}
