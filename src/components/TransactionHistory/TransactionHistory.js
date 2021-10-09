import { TransactionHistoryItems } from './TransactionHistoryItems';
import s from './TransactionHistory.module.css';
export function TransactionHistory({ items, children }) {
  // console.log(items);
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
        {/* <tr>
          <td>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </tr>
        <tr>
          <td>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </tr> */}
      </tbody>
    </table>
  );
}
