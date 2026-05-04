'use client';

import { motion } from 'framer-motion';
import { Users, Settings, ExternalLink, Plus, Search, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

const servers = [
  {
    id: '1',
    name: 'Gaming HQ',
    icon: 'G',
    members: 12400,
    online: 3200,
    commands: 18400,
    status: 'online',
    tier: 'Pro',
    features: ['Anti-Raid', 'Economy', 'Tickets', 'AI Chat'],
  },
  {
    id: '2',
    name: 'Dev Community',
    icon: 'D',
    members: 8300,
    online: 1800,
    commands: 9200,
    status: 'online',
    tier: 'Pro',
    features: ['Moderation', 'Analytics', 'Tickets'],
  },
  {
    id: '3',
    name: 'Art Studio',
    icon: 'A',
    members: 3200,
    online: 420,
    commands: 3100,
    status: 'online',
    tier: 'Free',
    features: ['Utility', 'Fun'],
  },
  {
    id: '4',
    name: 'Music Lounge',
    icon: 'M',
    members: 1800,
    online: 90,
    commands: 1200,
    status: 'idle',
    tier: 'Free',
    features: ['Music', 'Fun'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ServersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.pageTitle}>Servers</h2>
          <p className={styles.pageSubtitle}>Manage all servers where OzyBot is active.</p>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchWrap}>
            <Search size={15} className={styles.searchIcon} />
            <input placeholder="Search servers..." className={styles.searchInput} />
          </div>
          <a href="https://discord.com/api/oauth2/authorize" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.88rem' }}>
            <Plus size={15} />
            Add Server
          </a>
        </div>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servers.map((srv) => (
          <motion.div key={srv.id} className={styles.serverCard} variants={itemVariants}>
            <div className={styles.cardTop}>
              <div className={styles.serverAvatar}>{srv.icon}</div>
              <div className={styles.serverMeta}>
                <div className={styles.serverTitleRow}>
                  <h3 className={styles.serverName}>{srv.name}</h3>
                  <span className={`${styles.tier} ${srv.tier === 'Pro' ? styles.pro : styles.free}`}>
                    {srv.tier === 'Pro' && <ShieldCheck size={11} />}
                    {srv.tier}
                  </span>
                </div>
                <div className={styles.statusRow}>
                  <span className={`${styles.dot} ${styles[srv.status]}`} />
                  <span className={styles.statusLabel}>{srv.status}</span>
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <Users size={14} />
                <span>{srv.members.toLocaleString()} members</span>
              </div>
              <div className={styles.stat}>
                <div className={styles.onlineDot} />
                <span>{srv.online.toLocaleString()} online</span>
              </div>
              <div className={styles.stat}>
                <Zap size={14} />
                <span>{srv.commands.toLocaleString()} commands</span>
              </div>
            </div>

            <div className={styles.features}>
              {srv.features.map((f) => (
                <span key={f} className={styles.featureTag}>{f}</span>
              ))}
            </div>

            <div className={styles.actions}>
              <Link href={`/dashboard/servers/${srv.id}`} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '8px 14px' }}>
                <Settings size={14} />
                Manage
              </Link>
              <a href={`https://discord.com/channels/${srv.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '8px 10px' }}>
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        ))}

        {/* Add server card */}
        <motion.a
          href="https://discord.com/api/oauth2/authorize"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.addCard}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <Plus size={28} />
          <span>Add OzyBot to a Server</span>
        </motion.a>
      </motion.div>
    </div>
  );
}
