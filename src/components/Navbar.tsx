import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';
import styles from './Navbar.module.css';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Brand identity */}
        <button
          onClick={scrollToTop}
          className={styles.brand}
          aria-label="Ruchika Sharma - Back to top"
        >
          <span className={styles.brandIcon} />
          <span className={styles.brandName}>Ruchika Sharma</span>
        </button>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className={styles.navItem}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={styles.navDot} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className={styles.controls}>
          <a
            href="/ruchika_sharma_resume.pdf"
            download="Ruchika_Sharma_Resume.pdf"
            className={styles.resumeButton}
            title="Download Ruchika's Resume"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={onToggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileToggle}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileNavContent}>
          <div className={styles.mobileMetaHeader}>
            <span className={styles.mobileMetaText}>INDEX // NAVIGATION</span>
          </div>
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ''}`}
                  >
                    <span className={styles.mobileNavIndex}>0{index + 1}.</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles.mobileDrawerFooter}>
            <a
              href="/ruchika_sharma_resume.pdf"
              download="Ruchika_Sharma_Resume.pdf"
              className={`btn btn-primary ${styles.mobileResumeBtn}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              DOWNLOAD RESUME
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
