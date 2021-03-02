import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  // onSubmit form create new transaction with randomId, text and amount (user input)
  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,             //text, (isEqual)
      amount: Number(amount)  //+amount
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount<br/>income(positive) / expense(negative)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};