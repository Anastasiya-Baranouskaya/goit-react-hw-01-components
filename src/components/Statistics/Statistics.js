import { StatisticsItems } from './StatisticsItem';
import s from './Statistics.module.css';

export function Statistics({ title, stats, children }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

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
        {children}
        {/* <li className="item">
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}</span>
        </li> */}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  title: 'Upload stats',
  stats: 'Not found',
};

// Profile.propTypes = {
//   name: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: PropTypes.ojectOf(PropTypes.number.isRequired),
// };