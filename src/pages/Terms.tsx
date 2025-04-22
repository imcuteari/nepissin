import React from 'react';
import styles from './Page.module.css';

const Terms: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Kullanım Şartları</h1>
        
        <div className={styles.section}>
          <h2>1. Genel Bilgiler</h2>
          <p>
            Ne Pişsin web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş olursunuz.
            Bu şartlar herhangi bir zamanda güncellenebilir ve değiştirilebilir.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Kişisel Veri Toplama</h2>
          <p>
            Ne Pişsin web sitesi, kullanıcı kaydı veya oturum açma gerektirmemektedir.
            Bu nedenle, herhangi bir kişisel veri toplanmamaktadır.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Çerezler ve Google Reklamları</h2>
          <p>
            Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır.
            Ayrıca, Google Ads reklamları görüntülenmektedir. Bu reklamlar, ilgi alanlarınıza
            göre özelleştirilebilir ve Google tarafından yönetilmektedir.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Sorumluluk Reddi</h2>
          <p>
            Web sitemizdeki içerikler bilgilendirme amaçlıdır. İçeriklerin kullanımından
            doğabilecek herhangi bir sonuçtan Ne Pişsin sorumlu tutulamaz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms; 