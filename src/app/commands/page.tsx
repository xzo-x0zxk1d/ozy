'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Search,
  Command,
  Sparkles,
  Lightbulb,
  Shield,
  Gift,
  BarChart3,
  Users,
  Ticket,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const categories = [
  { id: 'all', label: 'All', icon: Terminal },
  { id: 'utility', label: 'Utility', icon: Command },
  { id: 'fun', label: 'Fun', icon: Sparkles },
  { id: 'search', label: 'Search', icon: Lightbulb },
  { id: 'moderation', label: 'Moderation', icon: Shield },
  { id: 'economy', label: 'Economy', icon: Gift },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'social', label: 'Social', icon: Users },
  { id: 'tickets', label: 'Tickets', icon: Ticket },
  { id: 'ai', label: 'AI Chat', icon: MessageCircle },
];

const commands = [
  // Utility
  { name: '/help', category: 'utility', description: 'List all available commands', usage: '/help [command]', cooldown: '5s' },
  { name: '/ping', category: 'utility', description: 'Check the bot\'s response time', usage: '/ping', cooldown: '3s' },
  { name: '/serverinfo', category: 'utility', description: 'Display detailed server information', usage: '/serverinfo', cooldown: '10s' },
  { name: '/userinfo', category: 'utility', description: 'View information about a user', usage: '/userinfo [@user]', cooldown: '5s' },
  { name: '/avatar', category: 'utility', description: 'Get a user\'s avatar in full size', usage: '/avatar [@user]', cooldown: '3s' },
  { name: '/embed', category: 'utility', description: 'Create a custom embed message', usage: '/embed <title> <description>', cooldown: '10s' },
  { name: '/poll', category: 'utility', description: 'Create a poll with reactions', usage: '/poll <question> <options>', cooldown: '30s' },
  { name: '/remind', category: 'utility', description: 'Set a reminder', usage: '/remind <time> <message>', cooldown: '5s' },
  // Fun
  { name: '/meme', category: 'fun', description: 'Get a random meme from Reddit', usage: '/meme [subreddit]', cooldown: '5s' },
  { name: '/joke', category: 'fun', description: 'Get a random joke', usage: '/joke', cooldown: '3s' },
  { name: '/8ball', category: 'fun', description: 'Ask the magic 8-ball a question', usage: '/8ball <question>', cooldown: '3s' },
  { name: '/rps', category: 'fun', description: 'Play rock paper scissors', usage: '/rps <choice>', cooldown: '3s' },
  { name: '/trivia', category: 'fun', description: 'Play a trivia game', usage: '/trivia [category]', cooldown: '15s' },
  // Search
  { name: '/google', category: 'search', description: 'Search Google and get top results', usage: '/google <query>', cooldown: '10s' },
  { name: '/youtube', category: 'search', description: 'Search YouTube videos', usage: '/youtube <query>', cooldown: '10s' },
  { name: '/weather', category: 'search', description: 'Get current weather for a location', usage: '/weather <city>', cooldown: '15s' },
  { name: '/wiki', category: 'search', description: 'Search Wikipedia', usage: '/wiki <topic>', cooldown: '10s' },
  // Moderation
  { name: '/ban', category: 'moderation', description: 'Ban a member from the server', usage: '/ban @user [reason] [days]', cooldown: '2s' },
  { name: '/kick', category: 'moderation', description: 'Kick a member from the server', usage: '/kick @user [reason]', cooldown: '2s' },
  { name: '/mute', category: 'moderation', description: 'Timeout a member', usage: '/mute @user <duration> [reason]', cooldown: '2s' },
  { name: '/warn', category: 'moderation', description: 'Issue a warning to a member', usage: '/warn @user <reason>', cooldown: '2s' },
  { name: '/purge', category: 'moderation', description: 'Delete multiple messages at once', usage: '/purge <amount> [@user]', cooldown: '10s' },
  { name: '/slowmode', category: 'moderation', description: 'Set channel slowmode', usage: '/slowmode <seconds>', cooldown: '5s' },
  { name: '/lock', category: 'moderation', description: 'Lock a channel', usage: '/lock [channel]', cooldown: '5s' },
  { name: '/unlock', category: 'moderation', description: 'Unlock a channel', usage: '/unlock [channel]', cooldown: '5s' },
  // Economy
  { name: '/balance', category: 'economy', description: 'Check your coin balance', usage: '/balance [@user]', cooldown: '3s' },
  { name: '/daily', category: 'economy', description: 'Claim your daily coins', usage: '/daily', cooldown: '24h' },
  { name: '/work', category: 'economy', description: 'Work to earn coins', usage: '/work', cooldown: '1h' },
  { name: '/transfer', category: 'economy', description: 'Send coins to another user', usage: '/transfer @user <amount>', cooldown: '10s' },
  { name: '/shop', category: 'economy', description: 'Browse the item shop', usage: '/shop [category]', cooldown: '5s' },
  { name: '/leaderboard', category: 'economy', description: 'View the richest members', usage: '/leaderboard [global]', cooldown: '15s' },
  // Analytics
  { name: '/stats', category: 'analytics', description: 'View server statistics', usage: '/stats [period]', cooldown: '30s' },
  { name: '/invites', category: 'analytics', description: 'Check invite tracking stats', usage: '/invites [@user]', cooldown: '10s' },
  { name: '/activity', category: 'analytics', description: 'View member activity report', usage: '/activity [@user]', cooldown: '30s' },
  { name: '/growth', category: 'analytics', description: 'View server member growth', usage: '/growth [days]', cooldown: '30s' },
  // Tickets
  { name: '/ticket', category: 'tickets', description: 'Open a support ticket', usage: '/ticket [category]', cooldown: '60s' },
  { name: '/close', category: 'tickets', description: 'Close the current ticket', usage: '/close [reason]', cooldown: '5s' },
  { name: '/adduser', category: 'tickets', description: 'Add a user to the ticket', usage: '/adduser @user', cooldown: '3s' },
  // AI
  { name: '/ask', category: 'ai', description: 'Ask the AI assistant a question', usage: '/ask <question>', cooldown: '5s' },
  { name: '/summarize', category: 'ai', description: 'Summarize a block of text', usage: '/summarize <text>', cooldown: '10s' },
  { name: '/imagine', category: 'ai', description: 'Generate an image with AI', usage: '/imagine <prompt>', cooldown: '30s' },
];

function CommandRow({ cmd }: { cmd: typeof commands[0] }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(cmd.usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`${styles.commandRow} ${open ? styles.expanded : ''}`}>
      <button className={styles.commandHeader} onClick={() => setOpen(!open)}>
        <code className={styles.commandName}>{cmd.name}</code>
        <span className={styles.commandDesc}>{cmd.description}</span>
        <span className={styles.commandCategory}>{cmd.category}</span>
        {open ? <ChevronUp size={16} className={styles.chevron} /> : <ChevronDown size={16} className={styles.chevron} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.commandDetails}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Usage</span>
              <div className={styles.usageWrap}>
                <code className={styles.usage}>{cmd.usage}</code>
                <button className={styles.copyBtn} onClick={copy} aria-label="Copy usage">
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Cooldown</span>
              <span className={styles.cooldown}>{cmd.cooldown}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CommandsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = commands.filter((c) => {
    const matchCat = activeCategory === 'all' || c.category === activeCategory;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className={styles.badge}>
                <Terminal size={14} />
                <span>{commands.length}+ Commands</span>
              </div>
              <h1 className={styles.title}>All Commands</h1>
              <p className={styles.subtitle}>Browse and search every command Ozy Bot has to offer.</p>
            </motion.div>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <div className={styles.toolbar}>
              <div className={styles.searchWrap}>
                <Search size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <p className={styles.resultCount}>{filtered.length} commands</p>
            </div>

            <div className={styles.categories}>
              {categories.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  className={`${styles.catBtn} ${activeCategory === id ? styles.catActive : ''}`}
                  onClick={() => setActiveCategory(id)}
                >
                  <Icon size={14} strokeWidth={2} />
                  {label}
                </button>
              ))}
            </div>

            <motion.div
              className={styles.commandList}
              key={activeCategory + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length === 0 ? (
                <div className={styles.empty}>
                  <Search size={32} />
                  <p>No commands found</p>
                </div>
              ) : (
                filtered.map((cmd) => <CommandRow key={cmd.name} cmd={cmd} />)
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
