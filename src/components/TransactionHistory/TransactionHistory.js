import { TransactionHistoryItems } from './TransactionHistoryItems';
import './TransactionHistory.scss';
export function TransactionHistory({ items, children }) {
  // console.log(items);
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="transaction-history__border ">
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
