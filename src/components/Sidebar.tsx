'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bot,
  LayoutDashboard,
  Terminal,
  Server,
  Shield,
  Ticket,
  Gift,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import styles from './Sidebar.module.css';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { href: '/dashboard/servers', icon: Server, label: 'Servers' },
  { href: '/commands', icon: Terminal, label: 'Commands' },
  { href: '/dashboard/moderation', icon: Shield, label: 'Moderation' },
  { href: '/dashboard/tickets', icon: Ticket, label: 'Tickets' },
  { href: '/dashboard/economy', icon: Gift, label: 'Economy' },
  { href: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Bot size={22} strokeWidth={1.8} />
        <span>OzyBot</span>
      </div>

      <nav className={styles.nav}>
        <p className={styles.navLabel}>Navigation</p>
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.navItem} ${active ? styles.active : ''}`}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
              {active && <ChevronRight size={14} className={styles.chevron} />}
            </Link>
          );
        })}
      </nav>

      <div className={styles.bottom}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>OZ</div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>OzyBot Admin</p>
            <p className={styles.userRole}>Administrator</p>
          </div>
        </div>
        <Link href="/auth/logout" className={styles.logout}>
          <LogOut size={16} strokeWidth={1.8} />
          <span>Sign out</span>
        </Link>
      </div>
    </aside>
  );
}
