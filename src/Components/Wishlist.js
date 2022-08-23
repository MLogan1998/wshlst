import { React, useState, useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { UserAuthContextProvider } from '../Context/UserAuthContext';
import ProtectedRoute from './ProtectedRoute';
import connection from '../Helper/connection';
import { Home } from './Home';
import { MyList } from './List';
import { useUserAuth } from '../Context/UserAuthContext';
import { ItemsProvider } from '../Context/ItemsContext';
import { BankHeader } from './BankHeader';



export const Wishlist = () => {
  const [ auth, setAuth ] = useState('');

  useEffect(() => {
    const isAuthed = localStorage.getItem('f_token')
    console.log(isAuthed)
    if (isAuthed) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, []);
  

  connection();

  let user = useUserAuth();

  return (
    <div className="App">
      <UserAuthContextProvider>
        <ItemsProvider>
          { auth && (auth) ? (<BankHeader />) : '' }
          <Routes>
            <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
            <Route path="list" element={<ProtectedRoute><MyList /></ProtectedRoute>} />
          </Routes>
        </ItemsProvider>
      </UserAuthContextProvider>
    </div>
  );
}
