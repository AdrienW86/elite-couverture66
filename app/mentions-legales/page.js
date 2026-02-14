import styles from "./mentions.module.css";

export const metadata = {
  title: "Mentions légales | Elite Couverture",
  description: "Mentions légales du site Elite Couverture",
};

export default function MentionsLegales() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Mentions légales</h1>

      <section className={styles.section}>
        <h2>Éditeur du site</h2>
        <p><strong>Elite Couverture</strong></p>
        <p>Entrepreneur individuel : Pierreuse Klenn</p>
        <p>108 rue Aristide Briand – 44400 Rezé – France</p>
        <p>SIREN : 798 282 695</p>
        <p>SIRET : 798 282 695 00047</p>
        <p>Activité : Travaux de couverture par éléments (APE 4391B)</p>
        <p>Email : contact@elitecouverture66.fr</p>
        <p>Directeur de la publication : Pierreuse Klenn</p>
      </section>

      <section className={styles.section}>
        <h2>Hébergement</h2>
        <p>Vercel Inc.</p>
        <p>440 N Barranca Ave #4133</p>
        <p>Covina, CA 91723 – États-Unis</p>
        <p>https://vercel.com</p>
      </section>

      <section className={styles.section}>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu du site (textes, images, logo, structure, code,
          etc.) est la propriété exclusive de Elite Couverture sauf mentions
          contraires. Toute reproduction ou utilisation sans autorisation est
          interdite.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Responsabilité</h2>
        <p>
          Elite Couverture s’efforce de fournir des informations fiables.
          Toutefois, l’entreprise ne saurait être tenue responsable des erreurs,
          omissions ou défauts de mise à jour.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Droit applicable</h2>
        <p>
          Le présent site est soumis au droit français. Tout litige relève des
          juridictions compétentes françaises.
        </p>
      </section>
    </main>
  );
}
