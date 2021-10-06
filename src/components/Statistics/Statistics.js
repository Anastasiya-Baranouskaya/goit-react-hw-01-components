import { StatisticsItems } from './StatisticsItem';
import './Statistics.scss';

export function Statistics({ title, stats, children }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
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
        {/* <li class="item">
          <span class="label">{stats[0].label}</span>
          <span class="percentage">{stats[0].percentage}</span>
        </li>
        <li class="item">
          <span class="label">{stats[1].label}</span>
          <span class="percentage">{stats[1].percentage}</span>
        </li>
        <li class="item">
          <span class="label">{stats[2].label}</span>
          <span class="percentage">{stats[2].percentage}</span>
        </li>
        <li class="item">
          <span class="label">{stats[3].label}</span>
          <span class="percentage">{stats[3].percentage}</span>
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
