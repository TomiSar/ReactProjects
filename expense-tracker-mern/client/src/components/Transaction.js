import React, {useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  // +=(income) -=(expense) Math.abs(for amount to remove -)
  // amount < 0 -expense (red), amount > 0 +income (green)
  // deleteTransaction(id) function deletes the clicked transaction   
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'} >
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> 
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};