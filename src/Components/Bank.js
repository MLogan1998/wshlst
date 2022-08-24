import { React, useEffect, useContext } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { ItemsContext } from '../Context/ItemsContext'

export const Bank = () => {
  const { deposits, getDepositsByUID, getAccountBalance, balance } = useContext(ItemsContext)
  let user = useUserAuth();
  const uid = user.user.uid

  useEffect(() => {
    getDepositsByUID(uid)
    if (deposits && deposits.length > 0) {
     getAccountBalance();
    }
  }, [deposits])

  return(
    <h1 className='bank__amount'>${balance.amount}</h1>
  )
}
