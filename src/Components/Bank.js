import { React, useEffect, useContext } from 'react';
import { ItemsContext } from '../Context/ItemsContext'

export const Bank = () => {
  const { getDepositsByUID, getAccountBalance, balance, depos } = useContext(ItemsContext)
  const uid = localStorage.getItem('f_token');

  useEffect(() => {
    getDepositsByUID(uid)
  }, [])

  useEffect(() => {
    if(depos && depos.length > 0 ) { 
      getAccountBalance()
    }     
}, [depos])


const displayBalance = depos && balance && depos.length ? ( balance.amount).toFixed(2) : ''


  return(
    <h1 className='bank__amount'>${ displayBalance }</h1>
  )
}
