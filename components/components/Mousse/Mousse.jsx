import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Demoussage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Démoussage de toiture à Perpignan et dans les Pyrénées-Orientales : redonnez vie à votre toit avec Elite Couverture
      </h1>

      <p className={styles.intro}>
        Avec le temps, les toitures sont exposées aux intempéries, à l’humidité et à la pollution, favorisant 
        l’apparition de mousses, de lichens et d’algues. Ces éléments peuvent fragiliser la structure 
        et l’étanchéité de votre toit. Chez <strong>Elite Couverture</strong>, entreprise spécialisée dans 
        le <strong>démoussage et le nettoyage de toiture à Perpignan</strong> et dans toute les Pyrénées-Orientales (66), 
        nous vous proposons un entretien complet et professionnel pour prolonger la durée de vie de votre couverture.
      </p>

      <SectionImage
        src="/image16.avif"
        alt="Couvreur réalisant un démoussage de toiture à Perpignan Pyrénées-Orientalese"
      />

      <h2 className={styles.h2}>
        Inspection détaillée de votre toiture : première étape d’un démoussage efficace
      </h2>
      <p className={styles.p}>
        Avant toute intervention, nos couvreurs effectuent une <strong>inspection approfondie</strong> de votre toiture 
        pour évaluer son état général, identifier la présence de végétation, de salissures ou de fissures 
        éventuelles. Ce diagnostic nous permet d’adapter le <strong>traitement de démoussage</strong> en fonction 
        du matériau (tuiles, ardoises, bac acier...) et de l’encrassement de votre toiture.
      </p>

      <h2 className={styles.h2}>
        Nettoyage complet et en douceur : respect de votre toiture et de l’environnement
      </h2>
      <p className={styles.p}>
        Nous utilisons des techniques professionnelles (brossage manuel, nettoyage à basse pression, etc.) 
        et des <strong>produits nettoyants écologiques</strong> pour retirer efficacement toutes les mousses, 
        lichens, algues et autres impuretés. Ce nettoyage minutieux redonne à votre toiture un aspect propre et sain, 
        tout en préparant la surface à recevoir un traitement protecteur durable.
      </p>

      <h2 className={styles.h2}>
        Application de traitements professionnels : anti-mousse et hydrofuge pour toiture
      </h2>
      <p className={styles.p}>
        Une fois la toiture nettoyée, nous appliquons un <strong>traitement anti-mousse fongicide</strong> 
        qui élimine en profondeur les micro-organismes et retarde leur réapparition. 
        Pour aller plus loin, nous vous recommandons l’application d’un <strong>hydrofuge toiture</strong>, 
        qui forme un film protecteur invisible empêchant l’infiltration d’eau, l’humidité stagnante 
        et le développement de nouvelles mousses.
      </p>

      <h2 className={styles.h2}>
        Entretien régulier de la toiture : un service sur mesure pour une couverture durable
      </h2>
      <p className={styles.p}>
        Pour garantir la longévité de votre toiture, nous proposons des <strong>contrats d’entretien personnalisés</strong> 
        incluant des visites régulières, un contrôle de l’étanchéité, et un nettoyage préventif si nécessaire. 
        Vous bénéficiez ainsi d’une toiture toujours propre, fonctionnelle et protégée, tout au long de l’année.
      </p>

      <p className={styles.intro}>
        Ne laissez pas les mousses fragiliser votre couverture. Confiez le <strong>démoussage de votre toiture 
        </strong> à l’équipe expérimentée d’<strong>Elite Couverture</strong>. 
        Nous vous garantissons un résultat professionnel, rapide et durable. 
        Contactez-nous dès maintenant pour un <strong>devis gratuit et sans engagement</strong>.
      </p>
    </section>
  )
}

