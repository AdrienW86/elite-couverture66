import Image from 'next/image';
import type { ImageProps } from 'next/image';
import styles from './sectionImage.module.css'

type SectionImageProps = Pick<ImageProps, 'src' | 'alt'> & { width?: number; height?: number };

export default function SectionImage({ src, alt, width = 400, height = 250 }: SectionImageProps) {
  if (!src) return null;

  return (
    <div className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 700px) 100vw, 50vw"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
  );
}
