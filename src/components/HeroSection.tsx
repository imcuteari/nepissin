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
          NE PİŞSİN ?
        </h1>

        <div className={styles.subtitleContainer}>
          <p className={styles.subtitle}>
            Artık Size Ait Bir Yemek Şefi Yapay Zekanız var!
          </p>
          <p className={styles.subtitleDescription}>
            Arama çubuğuna mevcut malzemeleri yazın ve Ara butonuna basın ve yapay zeka sizin için en uygun yemeği göstersin!
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