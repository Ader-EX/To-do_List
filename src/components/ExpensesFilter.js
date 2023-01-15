import { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const yearFilterHandler = (event) => {
    setSelectedYear(event.target.value);
    event.preventDefault();

    props.onSaveExpenseFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={yearFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
