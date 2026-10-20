'use client';

import { useEffect, useState } from 'react';
import styles from './simpleBanner.module.css';

const images = [
  '/image1.avif',
  '/image2.avif',
  '/image3.avif', 
  '/image4.avif', 
  '/image5.avif',
  '/image6.avif',
  '/image7.avif',
  '/image8.avif',
  '/image9.avif',
  '/image10.avif',
];

export default function SimpleBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.carousel} id="carouselExampleFade">
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '85vh', 
            }}
          />
        ))}
      </div>   
    </div>
  );
}