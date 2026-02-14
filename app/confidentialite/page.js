import styles from "./privacy.module.css";

export const metadata = {
  title: "Politique de confidentialité | Elite Couverture",
  description: "Politique de confidentialité du site Elite Couverture",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Politique de confidentialité</h1>

      <section className={styles.section}>
        <h2>Données collectées</h2>
        <p>
          Les informations envoyées via le formulaire de contact (nom, email,
          téléphone, message) sont utilisées uniquement pour répondre à votre
          demande.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Utilisation des données</h2>
        <p>
          Les données sont utilisées exclusivement par Elite Couverture et ne
          sont jamais vendues ni transmises à des tiers.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Durée de conservation</h2>
        <p>
          Les données sont conservées uniquement le temps nécessaire au
          traitement de votre demande.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification, de suppression et d’opposition concernant vos données
          personnelles.
        </p>
        <p>Contact : contact@elitecouverture66.fr</p>
      </section>

      <section className={styles.section}>
        <h2>Cookies</h2>
        <p>
          Le site peut utiliser des cookies pour améliorer l’expérience
          utilisateur et mesurer l’audience. Vous pouvez les refuser via votre
          navigateur.
        </p>
      </section>
    </main>
  );
}
