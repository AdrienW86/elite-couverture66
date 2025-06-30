import Image from 'next/image';
import styles from './card.module.css';

export default function Card({ imageSrc, imageAlt, title, description }) {
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={320}
        height={250}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={styles.image}
      />
      <div className={styles.cardTxt}>
        <h2 className={styles.h3}>{title}</h2>
        <p className={styles.pCard}>{description}</p>
      </div>
    </div>
  );
}
