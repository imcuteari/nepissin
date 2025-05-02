import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import InfoCard from '../components/InfoCard';
import FAQSection from '../components/FAQSection';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/tarifler?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const infoCards = [
    {
      title: "Nasıl Kullanılır",
      description: "Elinizdeki malzemeleri yazın, yapay zeka size en uygun tarifleri gösterecek."
    },
    {
      title: "Yemek tariflerimizle her gün binlerce kişinin mutfağına ilham veriyoruz.",
      description: "Sitemizde her gün binlerce kullanıcı tarifler keşfediyor ve yeni yemekler hazırlıyor."
    },
    {
      title: "Binlerce kullanıcı her gün tariflerimizi keşfederek mutfakta yeni lezzetler yaratıyor.",
      description: "Kullanıcılar, yapay zeka destekli tariflerimizle her gün mutfakta harikalar yaratıyor."
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Ne Pişsin?</h1>
        <p className={styles.subtitle}>
          Malzemelerinize ve damak zevkinize göre özelleştirilmiş en iyi tarifleri keşfedin
        </p>
        <SearchBar onSearch={handleSearch} />
        <Link to="/tarifler" className={styles.exploreLink}>
          Tüm Tarifleri Keşfet
        </Link>
        <div className={styles.infoCards}>
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {/* Recipe cards will be added here */}
      </div>
      <FAQSection />
      <script type="text/javascript"> atOptions = { 'anahtar' : '04efbab938f860301c222cf783615f4d', 'biçim' : 'iframe', 'yükseklik' : 250, 'genişlik' : 300, 'parametreler' : {} }; </script>
      <script type="text/javascript" src="//www.highperformanceformat.com/04efbab938f860301c222cf783615f4d/invoke.js"></script>
      <script type='text/javascript' src='//pl26538891.profitableratecpm.com/2c/1f/78/2c1f78762ae2e3f21798b2af9cd8d15f.js'></script>
    </div>
  );
};

export default Home;
