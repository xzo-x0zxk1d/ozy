'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Bell, Shield, Palette, Key, Trash2, AlertTriangle } from 'lucide-react';
import styles from './page.module.css';

const tabs = [
  { id: 'general', label: 'General', icon: Palette },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'api', label: 'API Keys', icon: Key },
];

function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className={`${styles.toggle} ${on ? styles.toggleOn : ''}`}
    >
      <span className={styles.toggleThumb} />
    </button>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.pageTitle}>Settings</h2>
          <p className={styles.pageSubtitle}>Manage your dashboard and bot preferences.</p>
        </div>
        <button onClick={save} className={`btn ${saved ? 'btn-secondary' : 'btn-primary'}`} style={{ fontSize: '0.88rem' }}>
          <Save size={15} />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className={styles.layout}>
        <div className={styles.tabs}>
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`${styles.tab} ${activeTab === id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(id)}
            >
              <Icon size={16} strokeWidth={1.8} />
              {label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          className={styles.panel}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === 'general' && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Bot Prefix</h3>
              <div className={styles.fieldRow}>
                <label>Command Prefix</label>
                <input defaultValue="!" className={styles.input} style={{ width: '80px' }} />
              </div>
              <div className={styles.fieldRow}>
                <label>Bot Nickname</label>
                <input defaultValue="OzyBot" className={styles.input} />
              </div>
              <div className={styles.fieldRow}>
                <label>Bot Language</label>
                <select className={styles.select}>
                  <option>English</option>
                  <option>Arabic</option>
                  <option>French</option>
                  <option>Spanish</option>
                </select>
              </div>

              <h3 className={styles.sectionTitle} style={{ marginTop: '28px' }}>Features</h3>
              {[
                { label: 'Enable AI Chatbot', desc: 'Allow members to chat with the AI assistant', defaultOn: true },
                { label: 'Economy System', desc: 'Enable the coin economy for your server', defaultOn: true },
                { label: 'Invite Tracking', desc: 'Track which members invited who', defaultOn: false },
                { label: 'Ghost Ping Detection', desc: 'Notify when a ping is deleted', defaultOn: true },
              ].map((f) => (
                <div key={f.label} className={styles.toggleRow}>
                  <div>
                    <p className={styles.toggleLabel}>{f.label}</p>
                    <p className={styles.toggleDesc}>{f.desc}</p>
                  </div>
                  <Toggle defaultChecked={f.defaultOn} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Alert Channels</h3>
              {[
                { label: 'Mod Log Channel', desc: 'Where moderation actions are logged' },
                { label: 'Welcome Channel', desc: 'Where new member welcomes are sent' },
                { label: 'Ticket Log Channel', desc: 'Where closed tickets are logged' },
              ].map((c) => (
                <div key={c.label} className={styles.fieldRow}>
                  <div>
                    <p className={styles.fieldLabel}>{c.label}</p>
                    <p className={styles.fieldDesc}>{c.desc}</p>
                  </div>
                  <select className={styles.select}>
                    <option>#mod-log</option>
                    <option>#welcome</option>
                    <option>#general</option>
                  </select>
                </div>
              ))}

              <h3 className={styles.sectionTitle} style={{ marginTop: '28px' }}>Notifications</h3>
              {[
                { label: 'New Tickets', defaultOn: true },
                { label: 'Anti-Raid Triggers', defaultOn: true },
                { label: 'Member Milestones', defaultOn: false },
                { label: 'Daily Report', defaultOn: false },
              ].map((n) => (
                <div key={n.label} className={styles.toggleRow}>
                  <p className={styles.toggleLabel}>{n.label}</p>
                  <Toggle defaultChecked={n.defaultOn} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'security' && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Anti-Raid Protection</h3>
              {[
                { label: 'Account Age Filter', desc: 'Block accounts younger than 7 days', defaultOn: true },
                { label: 'Join Rate Limit', desc: 'Trigger lockdown if 10+ join in 30s', defaultOn: true },
                { label: 'VPN Detection', desc: 'Flag members connecting via VPN', defaultOn: false },
                { label: 'Captcha Verification', desc: 'Require CAPTCHA for new members', defaultOn: false },
              ].map((f) => (
                <div key={f.label} className={styles.toggleRow}>
                  <div>
                    <p className={styles.toggleLabel}>{f.label}</p>
                    <p className={styles.toggleDesc}>{f.desc}</p>
                  </div>
                  <Toggle defaultChecked={f.defaultOn} />
                </div>
              ))}

              <h3 className={styles.sectionTitle} style={{ marginTop: '28px' }}>Moderation</h3>
              <div className={styles.fieldRow}>
                <div>
                  <p className={styles.fieldLabel}>Auto-ban after warnings</p>
                  <p className={styles.fieldDesc}>Automatically ban after N warnings</p>
                </div>
                <input type="number" defaultValue={5} className={styles.input} style={{ width: '70px' }} />
              </div>
              <div className={styles.fieldRow}>
                <div>
                  <p className={styles.fieldLabel}>Spam threshold</p>
                  <p className={styles.fieldDesc}>Messages per 5 seconds before muting</p>
                </div>
                <input type="number" defaultValue={8} className={styles.input} style={{ width: '70px' }} />
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>API Keys</h3>
              <p className={styles.sectionDesc}>Manage API keys for external integrations.</p>
              <div className={styles.apiKey}>
                <div className={styles.apiKeyInfo}>
                  <p className={styles.apiKeyName}>Production Key</p>
                  <code className={styles.apiKeyValue}>ozk_prod_••••••••••••••••4f2a</code>
                </div>
                <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
                  Regenerate
                </button>
              </div>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px', fontSize: '0.88rem' }}>
                <Key size={14} />
                Generate New Key
              </button>

              <div className={styles.dangerZone}>
                <div className={styles.dangerHeader}>
                  <AlertTriangle size={16} />
                  <h3>Danger Zone</h3>
                </div>
                <div className={styles.dangerRow}>
                  <div>
                    <p className={styles.dangerLabel}>Reset all bot data</p>
                    <p className={styles.dangerDesc}>Clears economy, warnings, and all stored data. This is irreversible.</p>
                  </div>
                  <button className={styles.dangerBtn}>
                    <Trash2 size={14} />
                    Reset Data
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
