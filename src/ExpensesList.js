import "./ExpensesList.css";
import ExpenseItem from "./components/ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <ExpenseItem
          key={exp.key}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
