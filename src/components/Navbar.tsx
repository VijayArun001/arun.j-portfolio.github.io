import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, FileText, ChevronDown } from 'lucide-react';
import { useUIStore } from '../store/uiStore';
import { NAV_ITEMS } from '../data/portfolioData';
import styles from './Navbar.module.css';

const downloadFile = async (filename: string) => {
  try {
    const response = await fetch(`/${filename}`);
    if (!response.ok) throw new Error('File not found');
    const blob = await response.blob();
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href     = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch {
    // Fallback — open in new tab
    window.open(`/${filename}`, '_blank');
  }
};

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef                     = useRef<HTMLDivElement>(null);
  const { activeSection, mobileMenuOpen, setMobileMenuOpen } = useUIStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = (type: 'pdf' | 'docx') => {
    setDropdownOpen(false);
    void downloadFile(type === 'pdf' ? 'Arun_J_Resume.pdf' : 'Arun_J_Resume.docx');
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
          Arun<span className={styles.dot}>.</span>J
        </a>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className={`${styles.link} ${activeSection === item.href.slice(1) ? styles.active : ''}`}
            >
              {item.label}
            </a>
          ))}

          <div className={styles.resumeWrap} ref={dropdownRef}>
            <button
              className={`btn btn-primary ${styles.resumeBtn}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <Download size={14} />
              Resume
              <ChevronDown size={13} className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`} />
            </button>

            {dropdownOpen && (
              <div className={styles.dropdown}>
                <p className={styles.dropdownLabel}>Download as</p>
                <button className={styles.dropdownItem} onClick={() => handleDownload('pdf')}>
                  <span className={styles.dropdownIconRed}><FileText size={15} /></span>
                  <div className={styles.dropdownText}>
                    <span className={styles.dropdownTitle}>PDF Format</span>
                    <span className={styles.dropdownSub}>Best for sharing &amp; printing</span>
                  </div>
                  <Download size={13} className={styles.dropdownArrow} />
                </button>
                <button className={styles.dropdownItem} onClick={() => handleDownload('docx')}>
                  <span className={styles.dropdownIconBlue}><FileText size={15} /></span>
                  <div className={styles.dropdownText}>
                    <span className={styles.dropdownTitle}>Word Format</span>
                    <span className={styles.dropdownSub}>Editable .docx file</span>
                  </div>
                  <Download size={13} className={styles.dropdownArrow} />
                </button>
              </div>
            )}
          </div>
        </nav>

        <button className={styles.menuToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className={styles.mobileLink}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.mobileDownloads}>
            <button className={`btn btn-primary ${styles.mobileDownloadBtn}`}
              onClick={() => { setMobileMenuOpen(false); void downloadFile('Arun_J_Resume.pdf'); }}>
              <Download size={14} /> Download PDF
            </button>
            <button className={`btn ${styles.mobileDownloadBtn}`}
              onClick={() => { setMobileMenuOpen(false); void downloadFile('Arun_J_Resume.docx'); }}>
              <Download size={14} /> Download Word
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
