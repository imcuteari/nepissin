import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle parallax effect
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    // Handle mouse movement for light effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Ne Pişsin?
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Ana Sayfa</Link></li>
            <li><Link to="/iletisim" className={styles.navLink}>İletişim</Link></li>
            <li><Link to="/kullanimsartlari" className={styles.navLink}>Kullanım Şartları</Link></li>
            <li><Link to="/privacy-policy" className={styles.navLink}>Gizlilik Politikası</Link></li>
          </ul>
        </nav>
      </div>
      <div 
        ref={backgroundRef} 
        className={styles.background}
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        } as React.CSSProperties}
      />
      <div className={styles.overlay} />
      <div className={styles.particles} />
    </header>
  );
};

export default Header; 