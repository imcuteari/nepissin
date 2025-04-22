import React, { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            if (textRef.current) {
              textRef.current.classList.add(styles.textVisible);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className={styles.footer}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`
      } as React.CSSProperties}
    >
      <div className={styles.footerContent}>
        <p ref={textRef} className={styles.footerText}>
          <span className={styles.textPart}>Made by Ari</span>
          <span className={styles.heart}>❤️</span>
          <span className={styles.textPart}>An Ari classic</span>
          <span className={styles.textPart}>•</span>
          <span className={styles.textPart}>info@nepissin.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 