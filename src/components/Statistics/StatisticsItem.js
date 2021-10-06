export function StatisticsItems({ id, label, percentage }) {
  return (
    <li class="item stat-list__item" key={id}>
      <span class="label stat-list__label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}
