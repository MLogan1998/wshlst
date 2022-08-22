import React, { useContext, useEffect } from 'react';
import { ItemsContext } from '../Context/ItemsContext';
import { Item } from './Item';
import List from '@mui/material/List';


export const MyList = () => {
  const { getItemsByUID, items } = useContext(ItemsContext)
  
  const uid = localStorage.getItem('f_token');

  useEffect(() => {
    getItemsByUID(uid)
  }, [])

  const myItems = items ? items.map((item) => (<Item key={item.id} item={item} />)) : '';

  return (
    <div>
          <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      {myItems}
      </List>
    </div>
  )
}
