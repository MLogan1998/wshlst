import { React, useState, useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { UserAuthContextProvider } from '../Context/UserAuthContext';
import ProtectedRoute from './ProtectedRoute';
import connection from '../Helper/connection';
import { Home } from './Home';
import { useUserAuth } from '../Context/UserAuthContext';



export const Wishlist = () => {
  // const [ auth, setAuth ] = useState(false);

  // useEffect(() => {
  //   const isAuthed = localStorage.getItem('f_token')
  //   console.log(isAuthed)
  //   if (isAuthed) {
  //     setAuth(true)
  //   } else {
  //     setAuth(false)
  //   }
  // }, [auth]);
  let user = useUserAuth();

  connection();

  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
