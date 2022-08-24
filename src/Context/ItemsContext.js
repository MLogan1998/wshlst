import React, { useState } from 'react';
import { firebaseConfig } from '../firebase';

export const ItemsContext = React.createContext();

export const ItemsProvider = (props) =>  {
  const [ items, setItems ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const [ deposits, setDeposits ] = useState([]);
  const [ balance, setBalance ] = useState(0);

  const url = firebaseConfig.databaseURL;

  const getItemsByUID = (uid) => {
    fetch(`${url}/items.json?orderBy="uid"&equalsTo="${uid}"`)
    .then((response) => response.json())
    .then(setItems)
  }

  const getDepositsByUID = (uid) => {
    fetch(`${url}/deposits.json?orderBy="uid"&equalsTo="${uid}"`)
    .then((response) => response.json())
    .then(setDeposits)
  }

  const getListTotalPrice = () => {
    items ? setTotal(items.reduce(function(previousValue, currentValue) {
      return previousValue.price + currentValue.price
    })) : setTotal(0);
  }

  // const getAccountBalance = () => {
  //   deposits ? setBalance(deposits.reduce(function(previousValue, currentValue) {
  //     return previousValue.amount + currentValue.amount, 0
  //   })) : setBalance(0);
  // }

  const getAccountBalance = () => {
    deposits ? setBalance(deposits.reduce((a, b) => ({
      amount: a.amount + b.amount
    }))) : setBalance(0);
  }

  return (
    <ItemsContext.Provider value={{
      getItemsByUID,
      items,
      getListTotalPrice,
      total,
      getDepositsByUID,
      getAccountBalance,
      balance,
      deposits
    }}>
      {props.children}
    </ItemsContext.Provider>
  )

}
