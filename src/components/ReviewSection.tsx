import React from 'react';
import { motion } from 'framer-motion';
import styles from './ReviewSection.module.css';

interface Review {
  id: number;
  name: string;
  comment: string;
  color: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Akın Yeni",
    comment: "Öğrenci evinde bile şef gibi hissediyorum!",
    color: "linear-gradient(135deg, #FF6B6B, #FF8E8E)"
  },
  {
    id: 2,
    name: "Ayşe Yılmaz",
    comment: "Gerçekten çok lezzetli, teşekkürler!",
    color: "linear-gradient(135deg, #4ECDC4, #6EE7E7)"
  },
  {
    id: 3,
    name: "Mehmet Kaan",
    comment: "Evde hızlıca yapabileceğiniz harika bir tarif.",
    color: "linear-gradient(135deg, #A17FE0, #C49FFF)"
  },
  {
    id: 4,
    name: "Fatma Yıldız",
    comment: "Farklı malzemelerle denediğimde harika sonuçlar aldım!",
    color: "linear-gradient(135deg, #FF9A9E, #FAD0C4)"
  },
  {
    id: 5,
    name: "Okan Çelik",
    comment: "İçinde en sevdiğim malzemeleri bulduğum tarifler.",
    color: "linear-gradient(135deg, #5E4AE3, #7C6AFF)"
  },
  {
    id: 6,
    name: "Zeynep Demir",
    comment: "Çok pratik ve lezzetli tarifler!",
    color: "linear-gradient(135deg, #43E97B, #38F9D7)"
  }
];

const ReviewSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ')[0][0];
  };

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.sectionTitle}>Kullanıcı Yorumları</h2>
      <motion.div 
        className={styles.reviewsContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className={styles.reviewCard}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}
          >
            <div 
              className={styles.avatarContainer}
              style={{ background: review.color }}
            >
              <div className={styles.avatarInitial}>
                {getInitials(review.name)}
              </div>
            </div>
            <div className={styles.reviewContent}>
              <h3 className={styles.userName}>{review.name}</h3>
              <p className={styles.comment}>{review.comment}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSection; 