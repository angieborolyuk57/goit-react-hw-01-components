import react from 'react';
import css from './Transactions.module.css';


export default function TransactionHistory ({items}) {
    return (
<table className={css.table}>
  <thead className={css.tableHeadline}>
    <tr className={css.mainLabel}>
      <th className={css.headlineItem}>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={css.tableBody}>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
</table>
    )
}