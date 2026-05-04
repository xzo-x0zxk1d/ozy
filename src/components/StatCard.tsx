import { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import styles from './StatCard.module.css';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: number;
  changeLabel?: string;
  color?: 'red' | 'green' | 'blue' | 'yellow';
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  change,
  changeLabel,
  color = 'red',
}: StatCardProps) {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <div className={styles.iconWrap}>
          <Icon size={18} strokeWidth={1.8} />
        </div>
      </div>
      <p className={styles.value}>{value}</p>
      {change !== undefined && (
        <div className={`${styles.change} ${isPositive ? styles.positive : isNegative ? styles.negative : styles.neutral}`}>
          {isPositive ? <TrendingUp size={13} /> : isNegative ? <TrendingDown size={13} /> : <Minus size={13} />}
          <span>{Math.abs(change)}% {changeLabel ?? 'vs last month'}</span>
        </div>
      )}
    </div>
  );
}
