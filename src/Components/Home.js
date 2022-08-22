import { React, useEffect } from 'react';
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

  const userId = localStorage.getItem('f_token');

  return (
    <div>
      <h1>{user && userId}</h1>
      <Button variant="contained" onClick={handleLogOut}>Log Out</Button>
      <a href="/list">List</a>
    </div>
  )
}
