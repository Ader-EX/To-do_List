import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showBtn, setShowBtn] = useState(true);
  const onClickShowButton = () => {
    setShowBtn(false);
  };

  const onClickCancelButton = () => {
    setShowBtn(true);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onSaveNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {showBtn && <button onClick={onClickShowButton}>Add New Expenses</button>}
      {!showBtn && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onClickCancelButton}
        />
      )}
    </div>
  );
};

export default NewExpense;
