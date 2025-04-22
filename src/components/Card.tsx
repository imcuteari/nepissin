import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={title} loading="lazy" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card; 