import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserAuth } from '../Context/UserAuthContext';
import { Button } from "@mui/material";

export const Home = () => {
  const { user, logOut, getUserId } = useUserAuth();

  const handleLogOut = async () => {
    try{
      await logOut();
    } catch(err) {
      console.log(err);
    }
  }

  const navigate = useNavigate();

  const toList = () => {
    navigate('/list');
  }

  const toDeposit = () => {
    navigate('/deposit');
  }

  const userId = localStorage.getItem('f_token');

  return (
    <div>
      <h1>{user && userId}</h1>
      <Button variant="contained" onClick={handleLogOut}>Log Out</Button>
      <Button variant="contained" onClick={toList}>My Wishlist</Button>
      <Button variant="contained" onClick={toDeposit}>Deposit Funds</Button>
    </div>
  )
}
