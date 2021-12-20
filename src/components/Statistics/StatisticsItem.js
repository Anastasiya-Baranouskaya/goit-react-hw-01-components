import s from './Statistics.module.css';
import PropTypes from 'prop-types';
export function StatisticsItems({ id, label, percentage }) {
  return (
    <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}
StatisticsItems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
