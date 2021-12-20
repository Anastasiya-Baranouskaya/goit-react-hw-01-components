import { TransactionHistoryItems } from './TransactionHistoryItems';
import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export function TransactionHistory({ items, children }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(items => {
          return (
            <TransactionHistoryItems
              key={items.id}
              type={items.type}
              amount={items.amount}
              currency={items.currency}
            />
          );
        })}
        {children}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
