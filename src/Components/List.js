import React, { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '../Context/ItemsContext';
import { Item } from './Item';
import { UserAuthContextProvider, useUserAuth } from '../Context/UserAuthContext';
import List from '@mui/material/List';


export const MyList = () => {
  const { getItemsByUID, items } = useContext(ItemsContext)
  const [ list, setList ] = useState([])
  let user = useUserAuth();
  const uid = localStorage.getItem('f_token');

  useEffect(() => {
    getItemsByUID(uid)
  }, [])

  useEffect(() => {
    const result = Object.values(items)
    setList(result)
  }, [items])

  const myItems = list && list.length ? list.map((item, idx) => (<Item key={idx} item={item} divider={idx < items.length - 1}/>)) : '';

  return (
    <div className="list__container">
          <List
      sx={{
        width: '80%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      {myItems}
      </List>
    </div>
  )
}
