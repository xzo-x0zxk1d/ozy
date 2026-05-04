'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bot, Menu, X, Lock, ExternalLink } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/commands', label: 'Commands' },
  { href: '/premium', label: 'Premium' },
  { href: '/#pricing', label: 'Pricing' },
  { href: 'https://discord.gg', label: 'Support', external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Bot size={22} strokeWidth={1.8} />
          <span>OzyBot</span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {link.label}
                  <ExternalLink size={12} />
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/dashboard" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
            Dashboard
          </Link>
          <Link href="/auth/discord" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
            <Lock size={15} />
            Login
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCtas}>
            <Link href="/dashboard" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <Link href="/auth/discord" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              <Lock size={15} />
              Login with Discord
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
