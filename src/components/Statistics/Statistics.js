import { StatisticsItems } from './StatisticsItem';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stats => {
          return (
            <StatisticsItems
              key={stats.id}
              label={stats.label}
              percentage={stats.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  stats: 'Not found',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
