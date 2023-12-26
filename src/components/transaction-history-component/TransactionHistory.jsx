import './transaction-history.css';
const TransactionHistory = ({ items }) => {
  const currencyDetails = items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <section className="transaction">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{currencyDetails}</tbody>
      </table>
    </section>
  );
};
// Експорт
export default TransactionHistory;
