'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './banner.module.css';

const images = [
  '/image3.avif',
  // '/image2.avif',
  // '/image3.avif',
  // '/image4.avif',
  // '/image5.avif',
  // '/image6.avif',
  // '/image7.avif',
  // '/image8.avif',
  // '/image9.avif',
  // '/image10.avif',
  // '/image11.avif',
  // '/image12.avif',
  // '/image13.avif',
  // '/image14.avif',
  // '/image15.avif',
  // '/image16.avif',
  // '/image17.avif',
  // '/image18.avif',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.carousel} id="carouselExampleFade">
      <div className={styles.pContainer}>
        <motion.p 
        className={styles.p}
        ref={ref1}  
              initial={{ opacity: 0, x: -50 }} 
              animate={{
                opacity: inView1 ? 1 : 0,
                x: inView1 ? 0 : -50,
              }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
        > Isolation, zinguerie et travaux de toiture. </motion.p>
      <motion.p 
        className={styles.p2}
         ref={ref2}  
              initial={{ opacity: 0, x: 50 }} 
              animate={{
                opacity: inView2 ? 1 : 0,
                x: inView2 ? 0 : 50,
              }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3, delay: 0.3 }} 
        > Garantie décenannale, travail soigné. </motion.p>
      <motion.p 
        className={styles.p3}
        ref={ref1}  
              initial={{ opacity: 0, x: -50 }} 
              animate={{
                opacity: inView1 ? 1 : 0,
                x: inView1 ? 0 : -50,
              }}
              exit={{ opacity: 0, x: -50 }}
             transition={{ duration: 0.3, delay: 0.6 }} 
      > 
        Matérieux durables et de qualité. 
      </motion.p>
      
      </div>
        <Image          
          src="/garantie.avif"
          alt="garantie decenale"
          width={120}
          height={120}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
       
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