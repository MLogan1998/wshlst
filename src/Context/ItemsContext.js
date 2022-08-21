import React, { useState } from 'react';
import { firebaseConfig } from '../firebase';

export const ItemsContext = React.createContext();

export const ItemsProvider = (props) =>  {
  const [ items, setItems ] = useState([]);

  const url = firebaseConfig.databaseURL;

  const getItemsByUID = (uid) => {
    fetch(`${url}/items.json?orderBy="uid"&equalsTo="${uid}"`)
    .then((response) => response.json())
    .then(setItems)
  }

  return (
    <ItemsContext.Provider value={{
      getItemsByUID,
      items,
    }}>
      {props.children}
    </ItemsContext.Provider>
  )

}
