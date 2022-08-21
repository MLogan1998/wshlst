import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { UserAuthContextProvider } from '../Context/UserAuthContext';
import ProtectedRoute from './ProtectedRoute';
import connection from '../Helper/connection';
import { Home } from './Home';



export const Wishlist = () => {
  connection();

  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
