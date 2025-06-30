import React from 'react';
import styles from "./equipment.module.css";

export default function Equipment() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Entreprise de rénovation et d’entretien de toiture en Loire-Atlantique</h1>
      <div className={styles.column}>
        Chez <span className={styles.span}>Elite Couverture</span>, nous sommes spécialisés dans la rénovation, 
        l’entretien et la réparation de toitures dans toute la Loire-Atlantique. 
        Nos services incluent le nettoyage de toit, le traitement hydrofuge, la détection et réparation de fuites, 
        le remplacement de tuiles endommagées ainsi que la maintenance préventive de couverture pour garantir 
        l’étanchéité et la durabilité de votre habitation.
      </div>
    </section>
  );
}


