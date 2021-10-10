// import s from './TransactionHistory.module.css';
export function TransactionHistoryItems({ id, type, amount, currency }) {
  return (
    <tr id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
