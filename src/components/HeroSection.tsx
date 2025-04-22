import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './HeroSection.module.css';
import { useTheme } from '../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <div className={`${styles.overlay} ${styles[theme]}`} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Bugün Ne Pişirsem?
        </h1>

        <div className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>
            Kolay ve Hızlı Tarifler
          </h2>
          <p className={styles.subtitleDescription}>
            Evdeki malzemelerle nefis yemekler yapın! Yapay zeka destekli tarif önerilerimizle her gün farklı lezzetler keşfedin.
          </p>
          <h3 className={styles.subtitle}>
            Pratik Yemek Tarifleri
          </h3>
          <p className={styles.subtitleDescription}>
            Kahvaltıdan akşam yemeğine, tatlıdan çorbaya binlerce tarif. Malzemelerinizi yazın, size özel tarifler sunalım!
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <div className={styles.arrows}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 