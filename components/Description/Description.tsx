import Card from '@/components/Card/Card';
import cardsData from '../Card/data';
import styles from './description.module.css';

export default function Description() {
  return (    
    <section className={styles.description}>
      <div className={styles.box}>
        <h1 className={styles.h2}>
          Travaux de Rénovation de Toiture et de Couverture
        </h1>
        <p className={styles.intro}> 
          Spécialistes en rénovation de toiture, zinguerie et entretien de couverture, 
          nous intervenons pour améliorer la performance énergétique et la longévité de votre habitat. 
          Faites confiance à notre expertise pour des travaux de qualité, durables et conformes aux normes.
        </p>
      </div>
      <section className={styles.localisation}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    </section>
  );
}
