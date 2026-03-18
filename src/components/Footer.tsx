import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.inner}`}>
      <div className={styles.brand}>
        <span className={styles.logo}>Arun<span className={styles.dot}>.</span>J</span>
        <span className={styles.tagline}>Full Stack Developer · Chennai</span>
      </div>

      <div className={styles.links}>
        <a href="mailto:arunjegan001@gmail.com" className={styles.link} aria-label="Email">
          <Mail size={16} />
        </a>
        <a href="https://wa.me/919360464364" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="WhatsApp">
          <MessageCircle size={16} />
        </a>
        <a href="https://linkedin.com/in/arun-j-389981223" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Arun J. Built with React &amp; TypeScript.
      </p>
    </div>
  </footer>
);

export default Footer;
