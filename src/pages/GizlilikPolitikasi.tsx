import React from 'react';
import styles from './GizlilikPolitikasi.module.css';

const GizlilikPolitikasi: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gizlilik Politikası</h1>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Kişisel Verilerin Korunması</h2>
          <p>
            Nepissin.com olarak kişisel verilerinizin gizliliği ve güvenliği bizim için çok önemlidir. 
            Bu gizlilik politikası, web sitemizi kullanırken toplanan bilgilerin nasıl kullanıldığını 
            ve korunduğunu açıklamaktadır.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Toplanan Bilgiler</h2>
          <p>
            Sitemizi ziyaret ettiğinizde aşağıdaki bilgiler otomatik olarak toplanabilir:
          </p>
          <ul>
            <li>IP adresi</li>
            <li>Tarayıcı bilgileri</li>
            <li>Ziyaret edilen sayfalar</li>
            <li>Ziyaret tarihi ve süresi</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Çerezler (Cookies)</h2>
          <p>
            Sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanmaktadır. 
            Çerezler, tarayıcınız tarafından cihazınızda saklanan küçük metin dosyalarıdır.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Bilgilerin Kullanımı</h2>
          <p>
            Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:
          </p>
          <ul>
            <li>Hizmet kalitesini artırmak</li>
            <li>Kullanıcı deneyimini iyileştirmek</li>
            <li>Site güvenliğini sağlamak</li>
            <li>İstatistiksel analizler yapmak</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            <br />
            E-posta: info@nepissin.com
          </p>
        </section>
      </div>
      <div dangerouslySetInnerHTML={{ __html: `
        <script type="text/javascript">
          var atOptions = {
            'anahtar': '04efbab938f860301c222cf783615f4d',
            'biçim': 'iframe',
            'yükseklik': 250,
            'genişlik': 300,
            'parametreler': {}
          };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/04efbab938f860301c222cf783615f4d/invoke.js"></script>
        <script type='text/javascript' src='//pl26538891.profitableratecpm.com/2c/1f/78/2c1f78762ae2e3f21798b2af9cd8d15f.js'></script>
      ` }} />
    </div>
  );
};

export default GizlilikPolitikasi; 