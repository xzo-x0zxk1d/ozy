'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, BarChart3, Palette, Tag } from 'lucide-react';
import Link from 'next/link';
import styles from './premium.module.css';

const PREMIUM_FEATURES = [
  {
    icon: Zap,
    title: 'AI Chatbot Access',
    description: 'Enhanced AI chatbot with priority responses and custom training'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced anti-raid protection and member verification systems'
  },
  {
    icon: BarChart3,
    title: 'Dashboard Upgrades',
    description: 'Real-time analytics, member activity feed, and advanced statistics'
  },
  {
    icon: Palette,
    title: 'Custom Bot Appearance',
    description: 'Customize bot username, avatar, and colors per server'
  },
  {
    icon: Tag,
    title: 'White-Label Support',
    description: 'White-label branding for your server with custom theme'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'CSV/PDF exports, detailed member analytics, and trend analysis'
  }
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
    transition: { duration: 0.5 },
  },
};

export default function PremiumPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          <span className={styles.highlight}>Premium</span> Subscription
        </h1>
        <p className={styles.subtitle}>
          Unlock powerful features to take your Discord server to the next level
        </p>
      </motion.div>

      {/* Pricing Card */}
      <motion.div
        className={styles.pricingCard}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.priceTag}>
          <div className={styles.price}>$5</div>
          <div className={styles.period}>/month</div>
        </div>
        
        <p className={styles.priceDescription}>
          Unlock all premium features for unlimited servers
        </p>

        <a
          href="https://www.paypal.com/paypalme/xzohimself/5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.paypalButton}
        >
          <span>💳</span> Get Premium Now
        </a>

        <p className={styles.disclaimer}>
          Click the button to proceed to PayPal payment
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className={styles.featuresGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className={styles.featuresTitle}>Premium Features</h2>
        
        <div className={styles.grid}>
          {PREMIUM_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={styles.featureCard}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.featureIcon}>
                  <Icon size={32} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.checkmark}>
                  <CheckCircle size={20} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        className={styles.comparison}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className={styles.comparisonTitle}>Free vs Premium</h2>
        
        <div className={styles.tableContainer}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Commands</td>
                <td><CheckCircle size={20} className={styles.checkmark} /></td>
                <td><CheckCircle size={20} className={styles.checkmark} /></td>
              </tr>
              <tr>
                <td>AI Chatbot</td>
                <td>❌</td>
                <td><CheckCircle size={20} className={styles.checkmark} /></td>
              </tr>
              <tr>
                <td>Enhanced Security</td>
                <td>Basic</td>
                <td><CheckCircle size={20} className={styles.checkmark} /></td>
              </tr>
              <tr>
                <td>Dashboard Access</td>
                <td>Limited</td>
                <td>Full</td>
              </tr>
              <tr>
                <td>Advanced Analytics</td>
                <td>❌</td>
                <td><CheckCircle size={20} className={styles.checkmark} /></td>
              </tr>
              <tr>
                <td>Custom Bot Appearance</td>
                <td>❌</td>
                <td><CheckCircle size={20} className={styles.checkmark} /></td>
              </tr>
              <tr>
                <td>White-Label Support</td>
                <td>❌</td>
                <td><CheckCircle size={20} className={styles.checkmark} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className={styles.faq}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Can I cancel anytime?</h3>
            <p>Yes! Cancel your PayPal subscription at any time with no penalties.</p>
          </div>
          
          <div className={styles.faqItem}>
            <h3>Does premium work on multiple servers?</h3>
            <p>Yes! One payment covers unlimited servers with the same bot.</p>
          </div>
          
          <div className={styles.faqItem}>
            <h3>Is there a free trial?</h3>
            <p>Contact the bot owner for trial access to premium features.</p>
          </div>
          
          <div className={styles.faqItem}>
            <h3>How do I activate premium?</h3>
            <p>After payment, use the <code>/premium &quot;guildid&quot;</code> command to activate.</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          href="https://www.paypal.com/paypalme/xzohimself/5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.largeButton}
        >
          💳 Get Premium for $5/month
        </a>
      </motion.div>
    </div>
  );
}
