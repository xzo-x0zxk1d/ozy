'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Users,
  Ticket,
  MessageCircle,
  Eye,
  TrendingUp,
  Gift,
  Github,
  ArrowRight,
  Play,
  Sparkles,
  Lock,
  Lightbulb,
  Command,
  BarChart3,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const features = [
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Anti-raid, ghost ping detection, member restoration',
  },
  {
    icon: Zap,
    title: '150+ Commands',
    description: 'Utilities, fun, search, moderation, economy & more',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Role management, welcome messages, server setup',
  },
  {
    icon: Ticket,
    title: 'Ticket System',
    description: 'Professional support system with auto-responses',
  },
  {
    icon: MessageCircle,
    title: 'AI Chatbot',
    description: 'Smart conversations powered by advanced AI',
  },
  {
    icon: Eye,
    title: 'Invite Tracking',
    description: 'See who invited each member to your server',
  },
  {
    icon: TrendingUp,
    title: 'Server Goals',
    description: 'Track member growth with visual progress channels',
  },
  {
    icon: Gift,
    title: 'Economy System',
    description: 'Currency, rewards, and wealth management',
  },
];

const commands = [
  {
    category: 'Utility',
    count: '18+',
    icon: Command,
  },
  {
    category: 'Fun',
    count: '15+',
    icon: Sparkles,
  },
  {
    category: 'Search',
    count: '10+',
    icon: Lightbulb,
  },
  {
    category: 'Moderation',
    count: '15+',
    icon: Shield,
  },
  {
    category: 'Economy',
    count: '8+',
    icon: Gift,
  },
  {
    category: 'Analytics',
    count: '10+',
    icon: BarChart3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.heroTitle}>
                Your All-in-One Discord Bot
              </h1>
              <p className={styles.heroDescription}>
                150+ commands with advanced security, AI chatbot, economy system, and professional server management tools.
              </p>
              <div className={styles.heroCTA}>
                <Link href="/auth/discord" className="btn btn-primary">
                  <Lock size={20} />
                  Login with Discord
                </Link>
                <Link href="#features" className="btn btn-secondary">
                  <Play size={20} />
                  Explore Features
                </Link>
              </div>

              <motion.div
                className={styles.stats}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className={styles.stat}>
                  <span className={styles.statNumber}>150+</span>
                  <span className={styles.statLabel}>Commands</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>17</span>
                  <span className={styles.statLabel}>Systems</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Possibilities</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`${styles.section} ${styles.features}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>Powerful Features</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to manage and grow your Discord server
              </p>
            </motion.div>

            <motion.div
              className={styles.featureGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`card ${styles.featureCard}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon size={40} style={{ color: '#B3263B' }} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Commands Section */}
        <section className={`${styles.section} ${styles.commands}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>Command Categories</h2>
              <p className={styles.sectionSubtitle}>
                Organized commands for every need
              </p>
            </motion.div>

            <motion.div
              className={styles.commandGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  className={`card ${styles.commandCard}`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <cmd.icon size={32} style={{ color: '#B3263B' }} />
                  <h3>{cmd.category}</h3>
                  <p>{cmd.count} Commands</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${styles.section} ${styles.cta}`}>
          <div className="container">
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Enhance Your Server?</h2>
              <p>Join thousands of servers using Ozy Bot to automate, moderate, and entertain.</p>
              <div className={styles.ctaButtons}>
                <Link href="/auth/discord" className="btn btn-primary">
                  <Lock size={20} />
                  Get Started Now
                </Link>
                <a href="https://discord.gg" className="btn btn-secondary">
                  <Zap size={20} />
                  Support Server
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
