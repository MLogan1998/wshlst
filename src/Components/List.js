import React, { useContext, useEffect } from 'react';
import { ItemsContext } from '../Context/ItemsContext';
import { Item } from './Item';
import { UserAuthContextProvider, useUserAuth } from '../Context/UserAuthContext';
import List from '@mui/material/List';


export const MyList = () => {
  const { getItemsByUID, items } = useContext(ItemsContext)
  let user = useUserAuth();
  const uid = user.user.uid

  useEffect(() => {
    getItemsByUID(uid)
  }, [])

  const myItems = items ? items.map((item, idx) => (<Item key={idx} item={item} divider={idx < items.length - 1}/>)) : '';

  return (
    <div>
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
