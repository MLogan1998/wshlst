import React, { useState, useEffect } from 'react';
import { firebaseConfig } from '../firebase';

export const ItemsContext = React.createContext();

export const ItemsProvider = (props) =>  {
  const [ items, setItems ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const [ deposits, setDeposits ] = useState([]);
  const [ balance, setBalance ] = useState(0);
  const [ depos, setDepos ] = useState([])

  const url = firebaseConfig.databaseURL;

  const getItemsByUID = (uid) => {
    fetch(`${url}items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => response.json())
    .then(setItems)
  }

  const getDepositsByUID = (uid) => {
    fetch(`${url}/deposits.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => response.json())
    .then(setDeposits)
  }

  const getListTotalPrice = () => {
    items ? setTotal(items.reduce(function(previousValue, currentValue) {
      return previousValue.price + currentValue.price
    })) : setTotal(0);
  }

  const addDeposit = (deposit) => {
    fetch(`${url}/deposits.json`, {
        method: 'POST',
        body: JSON.stringify(deposit)
      })
      .then((response) => response.json())
  }

  useEffect(() => {
    const result = Object.values(deposits)
    setDepos(result)
  }, [deposits])

  


  const getAccountBalance = () => {
    depos ? setBalance(depos.reduce((a, b) => ({
      amount: a.amount + b.amount
    }))) : setBalance(100);
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
      deposits,
      depos,
      addDeposit
    }}>
      {props.children}
    </ItemsContext.Provider>
  )

}
