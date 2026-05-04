import Link from 'next/link';
import { Bot, Github, MessageCircle, Twitter, Heart } from 'lucide-react';
import styles from './Footer.module.css';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Commands', href: '/commands' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Changelog', href: '/changelog' },
  ],
  Support: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Discord Server', href: 'https://discord.gg', external: true },
    { label: 'Status', href: '/status' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Bot size={24} strokeWidth={1.8} />
            <span>OzyBot</span>
          </Link>
          <p className={styles.tagline}>
            The all-in-one Discord bot for serious server owners. 150+ commands, zero compromise.
          </p>
          <div className={styles.socials}>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <MessageCircle size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className={styles.links}>
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{section}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} OzyBot. All rights reserved.</p>
        <p className={styles.made}>
          Made with <Heart size={13} fill="currentColor" /> by the OzyBot team
        </p>
      </div>
    </footer>
  );
}