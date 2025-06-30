import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Nettoyage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Nettoyage de toiture à Nantes et en Loire-Atlantique : protégez votre toit avec Elite Couverture
      </h1>

      <p className={styles.intro}>
        Au fil des saisons, votre toiture subit les effets des intempéries, de la pollution et de l’humidité, 
        entraînant l’accumulation de mousses, de lichens, d’algues ou encore de débris végétaux. 
        Pour préserver son bon état, son étanchéité et son aspect esthétique, un entretien régulier s’impose. 
        <strong>Elite Couverture</strong> vous propose un <strong>nettoyage de toiture professionnel à Nantes</strong> 
        et dans tout le département de la Loire-Atlantique (44), adapté à tous types de toitures.
      </p>

      <SectionImage
        src="/image9.avif"
        alt="Couvreur réalisant un nettoyage complet de toiture à Nantes"
      />

      <h2 className={styles.h2}>
        Diagnostic complet : une évaluation sur mesure avant intervention
      </h2>
      <p className={styles.p}>
        Avant de commencer le nettoyage, nous réalisons une <strong>inspection approfondie de votre toiture</strong> 
        pour repérer les zones les plus encrassées, les matériaux fragilisés, ainsi que les éventuelles fissures 
        ou infiltrations. Cette analyse nous permet de choisir la <strong>méthode de nettoyage la mieux adaptée</strong> 
        à votre type de couverture (tuiles, ardoises, bac acier...) et à son état.
      </p>

      <h2 className={styles.h2}>
        Nettoyage professionnel et respectueux de vos matériaux
      </h2>
      <p className={styles.p}>
        Nous mettons en œuvre des <strong>techniques de nettoyage toiture éprouvées</strong>, telles que 
        le brossage manuel, le nettoyage basse ou haute pression selon les cas, en utilisant 
        uniquement des <strong>produits écologiques et biodégradables</strong>. Notre objectif est de 
        débarrasser votre toiture de toutes les salissures sans compromettre son intégrité.
      </p>

      <h2 className={styles.h2}>
        Application de traitements préventifs : pour une toiture propre plus longtemps
      </h2>
      <p className={styles.p}>
        Une fois le nettoyage effectué, nous vous recommandons l’application d’un 
        <strong>traitement anti-mousse préventif</strong>, qui ralentit le retour des micro-organismes, 
        et d’un <strong>traitement hydrofuge toiture</strong> qui empêche l’eau de pénétrer dans les matériaux. 
        Ces traitements assurent une protection durable contre l’humidité, les infiltrations et le vieillissement prématuré.
      </p>

      <h2 className={styles.h2}>
        Entretien et suivi personnalisé pour votre toiture
      </h2>
      <p className={styles.p}>
        Pour garantir la durabilité de votre toiture dans le temps, <strong>Elite Couverture</strong> vous propose 
        des <strong>conseils d’entretien simples</strong> et des <strong>contrats de maintenance sur mesure</strong>. 
        Ces prestations permettent de planifier des interventions régulières afin de maintenir l’efficacité 
        de la protection et l’apparence de votre toiture.
      </p>

      <p className={styles.intro}>
        Faites confiance à <strong>Elite Couverture</strong> pour le <strong>nettoyage de votre toiture 
        à Nantes et en Loire-Atlantique</strong>. Notre équipe qualifiée vous garantit un service 
        professionnel, efficace et respectueux de l’environnement. Contactez-nous dès aujourd’hui 
        pour un <strong>devis gratuit</strong> et redonnez à votre toiture toute sa propreté, 
        sa longévité et sa résistance face aux intempéries.
      </p>
    </section>
  )
}
