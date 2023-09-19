import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHanlder = () => {
    setTitle("Updated!");
    console.log("Clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHanlder}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
