import s from './Statistics.module.css';
export function StatisticsItems({ id, label, percentage }) {
  return (
    <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}
