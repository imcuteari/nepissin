import React from 'react';
import styles from './FAQSection.module.css';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Bugün ne pişirsem?",
      answer: "Ne Pişsin? ile evdeki malzemelerinize göre özel tarifler keşfedin. Yapay zeka destekli sistemimiz, elinizdeki malzemelerle yapabileceğiniz en lezzetli yemekleri saniyeler içinde öneriyor. Kolay yemek tarifleri için hemen arama yapın!"
    },
    {
      question: "Kolay ve hızlı yemek tarifleri nedir?",
      answer: "Ne Pişsin?'de bulabileceğiniz pratik yemek tarifleri, 30 dakika veya daha kısa sürede hazırlanabilen lezzetli yemeklerdir. Fırında tavuk, makarna, salata gibi kolay yemek tarifleri için sitemizi ziyaret edin."
    },
    {
      question: "Evdeki malzemelerle hangi yemekleri yapabilirim?",
      answer: "Ne Pişsin? size evdeki malzemelerle yapabileceğiniz binlerce tarif sunuyor. Yapay zeka destekli arama sistemimiz, elinizdeki malzemeleri analiz ederek size özel tarifler öneriyor. Hemen malzemelerinizi yazın ve ne pişirsem sorusuna cevap bulun!"
    },
    {
      question: "Ne pişirsem akşam yemeği için?",
      answer: "Akşam yemeği için pratik ve lezzetli tarifler arıyorsanız, Ne Pişsin?'de binlerce seçenek bulabilirsiniz. Fırında yemekler, makarnalar, salatalar ve daha fazlası için sitemizi ziyaret edin. Kolay yemek tarifleri ile akşam yemeğinizi hazırlayın."
    },
    {
      question: "Sağlıklı yemek tarifleri nasıl yapılır?",
      answer: "Ne Pişsin?'de sağlıklı ve lezzetli yemek tarifleri bulabilirsiniz. Sebze yemekleri, hafif salatalar, protein açısından zengin yemekler ve daha fazlası için sitemizi ziyaret edin. Sağlıklı beslenmek için ne pişirsem diye düşünmeyin, hemen tariflerimize göz atın!"
    }
  ];

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Sıkça Sorulan Sorular</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3 className={styles.question}>{faq.question}</h3>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 