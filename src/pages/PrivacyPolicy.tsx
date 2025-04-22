import React from 'react';
import styles from './Page.module.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Gizlilik Politikası</h1>

        <div className={styles.section}>
          <h2>1. Veri Toplama</h2>
          <p>
            Ne Pişsin olarak, kullanıcılarımızın gizliliğine önem veriyoruz.
            Sitemiz kullanıcı kaydı veya oturum açma gerektirmediğinden,
            herhangi bir kişisel veri toplamamaktayız.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Çerezler</h2>
          <p>
            Web sitemiz, daha iyi bir kullanıcı deneyimi sağlamak için çerezler kullanmaktadır.
            Bu çerezler, site performansını ölçmek ve geliştirmek için kullanılmaktadır.
            Çerezler kişisel bilgilerinizi içermez ve tamamen anonimdir.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Google Reklamları</h2>
          <p>
            Sitemizde Google Ads reklamları görüntülenmektedir. Google, reklam deneyimini
            kişiselleştirmek için çerezler kullanabilir. Bu reklamlar üçüncü taraf çerezleri
            kullanabilir ve Google'ın gizlilik politikasına tabidir.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Bilgi Güvenliği</h2>
          <p>
            Kullanıcı verisi toplamadığımız için, herhangi bir kişisel bilginiz
            sistemlerimizde saklanmamaktadır. Site kullanımınız tamamen anonimdir.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için
            <a href="mailto:info@nepissin.com" className={styles.email}> info@nepissin.com </a>
            adresinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 