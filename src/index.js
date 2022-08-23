import React from 'react';
import ReactDOM from 'react-dom/client';
import  { BrowserRouter as Router } from 'react-router-dom';
import './Styles/index.scss';
import { Wishlist } from './Components/Wishlist';
import { UserAuthContextProvider } from './Context/UserAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
      <Wishlist />
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>
);
