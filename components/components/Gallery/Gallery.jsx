'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  const images = [
    { src: '/image1.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image2.avif', alt: 'pose de tuiles' },
    { src: '/image3.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image4.avif', alt: 'pose de tuiles' },
    { src: '/image5.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image6.avif', alt: 'pose de tuiles' },
    { src: '/image7.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image8.avif', alt: 'pose de tuiles' },
    { src: '/image9.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image10.avif', alt: 'pose de tuiles' },
    { src: '/image11.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image12.avif', alt: 'pose de tuiles' },
    { src: '/image13.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image14.avif', alt: 'pose de tuiles' },
    { src: '/image15.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image16.avif', alt: 'pose de tuiles' },
    { src: '/image17.avif', alt: 'un ouvrier sur un toit' },
    { src: '/image18.avif', alt: 'pose de tuiles' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
       <h1 className={styles.h2}>  Nos réalisations </h1>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div className={styles.imageWrapper} key={index} onClick={() => openLightbox(image.src)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <img src={currentImage} alt="Lightbox" className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </div>
  );
}