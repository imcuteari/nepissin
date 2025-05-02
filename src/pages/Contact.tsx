import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  useEffect(() => {
    emailjs.init('PzV-LbchIG4GitRgw');
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'info@nepissin.com',
      };

      const response = await emailjs.send(
        'service_nazz2mb',
        'template_o7ux3tf',
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('E-posta gönderilemedi');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>İletişim</h1>
        <p className={styles.description}>
          Bizimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>
          <button
            type="submit"
            className={`${styles.submitButton} ${submitStatus === 'success' ? styles.success : ''} ${submitStatus === 'error' ? styles.error : ''}`}
            disabled={submitStatus === 'success'}
          >
            {submitStatus === 'success' ? 'Gönderildi!' : 'Gönder'}
          </button>
          {submitStatus === 'error' && (
            <p className={styles.errorMessage}>
              Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
            </p>
          )}
          {submitStatus === 'success' && (
            <p className={styles.successMessage}>
              Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
            </p>
          )}
        </form>
      </div>
      <script type="text/javascript"> atOptions = { 'anahtar' : '04efbab938f860301c222cf783615f4d', 'biçim' : 'iframe', 'yükseklik' : 250, 'genişlik' : 300, 'parametreler' : {} }; </script>
      <script type="text/javascript" src="//www.highperformanceformat.com/04efbab938f860301c222cf783615f4d/invoke.js"></script>
      <script type='text/javascript' src='//pl26538891.profitableratecpm.com/2c/1f/78/2c1f78762ae2e3f21798b2af9cd8d15f.js'></script>
    </div>
  );
};

export default Contact; 