import Image from 'next/image';
import styles from './sectionImage.module.css'

export default function SectionImage({ src, alt, width = 400, height = 250 }) {
  if (!src) return null;

  return (
    <div className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        priority
      />
    </div>
  );
}
