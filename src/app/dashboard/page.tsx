'use client';

import {
  Users,
  Server,
  Terminal,
  Zap,
  Bell,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  Ticket,
  MessageCircle,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import StatCard from '@/components/StatCard';
import styles from './page.module.css';
import Link from 'next/link';

const memberData = [
  { day: 'Mon', members: 1200 },
  { day: 'Tue', members: 1340 },
  { day: 'Wed', members: 1280 },
  { day: 'Thu', members: 1500 },
  { day: 'Fri', members: 1620 },
  { day: 'Sat', members: 1580 },
  { day: 'Sun', members: 1750 },
];

const commandData = [
  { day: 'Mon', uses: 340 },
  { day: 'Tue', uses: 520 },
  { day: 'Wed', uses: 410 },
  { day: 'Thu', uses: 680 },
  { day: 'Fri', uses: 720 },
  { day: 'Sat', uses: 890 },
  { day: 'Sun', uses: 760 },
];

const recentActivity = [
  { type: 'success', icon: CheckCircle2, message: 'Anti-raid triggered — 12 accounts blocked', time: '2m ago' },
  { type: 'info', icon: MessageCircle, message: 'Ticket #204 opened by @user234', time: '8m ago' },
  { type: 'warning', icon: AlertTriangle, message: 'Spam filter flagged 3 messages in #general', time: '15m ago' },
  { type: 'success', icon: Users, message: '47 new members joined today', time: '1h ago' },
  { type: 'error', icon: XCircle, message: 'Bot disconnected briefly — auto-reconnected', time: '2h ago' },
  { type: 'info', icon: ShieldCheck, message: 'Member verification batch completed (89 users)', time: '3h ago' },
];

const topCommands = [
  { name: '/help', uses: 1240, category: 'Utility' },
  { name: '/ban', uses: 890, category: 'Moderation' },
  { name: '/balance', uses: 760, category: 'Economy' },
  { name: '/ticket', uses: 640, category: 'Support' },
  { name: '/mute', uses: 510, category: 'Moderation' },
];

const servers = [
  { name: 'Gaming HQ', members: 12400, status: 'online' },
  { name: 'Dev Community', members: 8300, status: 'online' },
  { name: 'Art Studio', members: 3200, status: 'online' },
  { name: 'Music Lounge', members: 1800, status: 'idle' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.pageTitle}>Overview</h2>
          <p className={styles.pageSubtitle}>Welcome back — here&apos;s what&apos;s happening across your servers.</p>
        </div>
        <div className={styles.headerActions}>
          <button className="btn btn-ghost" style={{ fontSize: '0.85rem', gap: '6px' }}>
            <RefreshCw size={15} />
            Refresh
          </button>
          <button className="btn btn-primary" style={{ fontSize: '0.85rem', gap: '6px' }}>
            <Bell size={15} />
            Alerts
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <motion.div
        className={styles.statsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <StatCard title="Total Members" value="25,700" icon={Users} change={12.4} color="red" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="Servers" value="4" icon={Server} change={0} color="blue" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="Commands Today" value="4,320" icon={Terminal} change={8.1} color="green" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="Uptime" value="99.9%" icon={Zap} change={0.1} color="yellow" />
        </motion.div>
      </motion.div>

      {/* Charts Row */}
      <div className={styles.chartsRow}>
        <motion.div
          className={styles.chartCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.chartHeader}>
            <div>
              <h3>Member Growth</h3>
              <p>Last 7 days across all servers</p>
            </div>
            <TrendingUp size={18} style={{ color: '#B3263B' }} />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={memberData}>
              <defs>
                <linearGradient id="membersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B3263B" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#B3263B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="day" stroke="#555" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#555" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: '#181818', border: '1px solid rgba(179,38,59,0.3)', borderRadius: '8px', fontSize: '12px' }}
                labelStyle={{ color: '#aaa' }}
                itemStyle={{ color: '#B3263B' }}
              />
              <Area type="monotone" dataKey="members" stroke="#B3263B" strokeWidth={2} fill="url(#membersGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className={styles.chartCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className={styles.chartHeader}>
            <div>
              <h3>Command Usage</h3>
              <p>Commands executed per day</p>
            </div>
            <Terminal size={18} style={{ color: '#3B82F6' }} />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={commandData}>
              <defs>
                <linearGradient id="cmdGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="day" stroke="#555" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#555" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: '#181818', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', fontSize: '12px' }}
                labelStyle={{ color: '#aaa' }}
                itemStyle={{ color: '#3B82F6' }}
              />
              <Area type="monotone" dataKey="uses" stroke="#3B82F6" strokeWidth={2} fill="url(#cmdGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className={styles.bottomRow}>
        {/* Recent Activity */}
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className={styles.panelHeader}>
            <h3>Recent Activity</h3>
            <button className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              View all <ArrowRight size={13} />
            </button>
          </div>
          <div className={styles.activityList}>
            {recentActivity.map((item, i) => (
              <div key={i} className={`${styles.activityItem} ${styles[item.type]}`}>
                <item.icon size={15} className={styles.activityIcon} />
                <div className={styles.activityText}>
                  <p>{item.message}</p>
                </div>
                <span className={styles.activityTime}>
                  <Clock size={11} />
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Commands */}
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className={styles.panelHeader}>
            <h3>Top Commands</h3>
            <Link href="/commands" className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              All commands <ArrowRight size={13} />
            </Link>
          </div>
          <div className={styles.commandList}>
            {topCommands.map((cmd, i) => (
              <div key={i} className={styles.commandRow}>
                <span className={styles.cmdRank}>#{i + 1}</span>
                <code className={styles.cmdName}>{cmd.name}</code>
                <span className={styles.cmdCategory}>{cmd.category}</span>
                <div className={styles.cmdBarWrap}>
                  <div
                    className={styles.cmdBar}
                    style={{ width: `${(cmd.uses / topCommands[0].uses) * 100}%` }}
                  />
                </div>
                <span className={styles.cmdUses}>{cmd.uses.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Servers */}
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className={styles.panelHeader}>
            <h3>Active Servers</h3>
            <Link href="/dashboard/servers" className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              Manage <ArrowRight size={13} />
            </Link>
          </div>
          <div className={styles.serverList}>
            {servers.map((srv, i) => (
              <div key={i} className={styles.serverRow}>
                <div className={styles.serverAvatar}>
                  {srv.name.charAt(0)}
                </div>
                <div className={styles.serverInfo}>
                  <p className={styles.serverName}>{srv.name}</p>
                  <p className={styles.serverMembers}>
                    <Users size={11} /> {srv.members.toLocaleString()} members
                  </p>
                </div>
                <span className={`${styles.statusDot} ${styles[srv.status]}`} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
