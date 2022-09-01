import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connection } from '../Helper/connection';

import { UserAuthContextProvider, useUserAuth } from '../Context/UserAuthContext';
import { ItemsProvider } from '../Context/ItemsContext';
import { ProtectedRoute } from './ProtectedRoute';

import { BankHeader } from './BankHeader';
import { Login } from './Login';
import { Home } from './Home';
import { MyList } from './List';
import { Deposit } from './Deposit';
import { Transactions } from './Transactions';

export const Wishlist = () => {
  
  connection();
  let user = useUserAuth();


  return (
    <div className="App">
      <UserAuthContextProvider>
        <ItemsProvider>
          { (user.user) ? (<BankHeader />) : '' }
            <Routes>
              <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/login" element={ (user.user) ? (<Home />) : (<Login />)} />
              <Route path="/list" element={<ProtectedRoute><MyList /></ProtectedRoute>} />
              <Route path="/deposit" element={<ProtectedRoute><Deposit /></ProtectedRoute>} />
              <Route path="/transactions" element={<ProtectedRoute><Transactions/></ProtectedRoute>} />
            </Routes>
        </ItemsProvider>
      </UserAuthContextProvider>
    </div>
  );
}
