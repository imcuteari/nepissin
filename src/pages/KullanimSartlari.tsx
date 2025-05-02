import React from 'react';
import styles from './KullanimSartlari.module.css';

const KullanimSartlari: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Kullanım Şartları</h1>
        
        <section className={styles.section}>
          <h2>1. Genel Kullanım</h2>
          <p>
            Ne Pişsin? web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş oluyorsunuz. 
            Bu siteyi yalnızca yasal amaçlar doğrultusunda ve bu kullanım şartlarına uygun olarak kullanabilirsiniz.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Gizlilik ve Veri Toplama</h2>
          <p>
            Sitemiz, kullanıcı deneyimini iyileştirmek ve hizmet kalitesini artırmak amacıyla minimum düzeyde veri toplamaktadır. 
            Toplanan veriler anonim olup, kişisel bilgileriniz üçüncü taraflarla paylaşılmamaktadır.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Çerezler (Cookies)</h2>
          <p>
            Ne Pişsin?, site deneyimini iyileştirmek için çerezler kullanmaktadır. Bu çerezler, tercihlerinizi hatırlamak ve 
            site kullanımı hakkında istatistiksel veriler toplamak için kullanılır. Tarayıcı ayarlarınızdan çerez tercihlerinizi 
            değiştirebilirsiniz.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Google Ads ve Reklam Politikası</h2>
          <p>
            Sitemizde Google Ads tarafından sağlanan reklamlar gösterilmektedir. Bu reklamlar, size daha alakalı içerik sunmak 
            için çerezler kullanabilir. Google'ın reklam çerezleri, size kişiselleştirilmiş reklamlar göstermek için kullanılır 
            ve bu veriler Google'ın gizlilik politikası kapsamında işlenir.
          </p>
          <div className={styles.adDisclaimer}>
            <p>
              <strong>Reklam Bildirimi:</strong> Bu site, içerik finansmanı için Google Ads reklamları kullanmaktadır. 
              Bu reklamlar açıkça belirtilmiş olup, site içeriğinden ayrı tutulmaktadır.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. Telif Hakları</h2>
          <p>
            Sitede yer alan tüm içerik, tasarım ve materyaller Ne Pişsin?'e aittir. İçeriklerin izinsiz kopyalanması, 
            dağıtılması veya ticari amaçla kullanılması yasaktır.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Sorumluluk Reddi</h2>
          <p>
            Ne Pişsin?, sitede yer alan tariflerin ve içeriklerin doğruluğu konusunda azami özeni göstermektedir. 
            Ancak, içeriklerin kullanımından doğabilecek herhangi bir zarardan sorumlu tutulamaz.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Değişiklikler</h2>
          <p>
            Ne Pişsin?, bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar. 
            Değişiklikler, sitede yayınlandığı andan itibaren geçerli olacaktır.
          </p>
        </section>

        <div className={styles.lastUpdate}>
          Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
        </div>
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

export default KullanimSartlari; 