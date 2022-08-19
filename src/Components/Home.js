import { React, useEffect } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { Button } from "@mui/material";

const Home = () => {
  const { user, logOut, getUserId, connection } = useUserAuth();

  const handleLogOut = async () => {
    try{
      await logOut();
    } catch(err) {
      console.log(err);
    }
  }

  connection();

  // useEffect(() => {
  //   getIt();
  // }, [])


  const getIt = () => console.log(getUserId())

  return (
    <div>
      <h1>{user && user.email}</h1>
      <Button variant="contained" onClick={handleLogOut}>Log Out</Button>
    </div>
  )
}

export default Home;
