import "./ExpenseRender.css";

import Card from "./Card";
import Filter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseRender = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onSaveFilterHandler = (yearData) => {
    setFilteredYear(yearData);
  };

  const filteredExpenses = props.items.filter((a) => {
    return a.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <Filter
        selected={filteredYear}
        onSaveExpenseFilter={onSaveFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />

      <Card className="expenses">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseRender;
