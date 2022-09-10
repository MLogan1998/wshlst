import React from 'react';
import { Bank } from './Bank';
import { NavBar } from './NavBar';

export const BankHeader = () => {
  return (
    <div className="header">
      <div>    
        <Bank />
      </div>
      <div>
       <NavBar />
      </div>      
    </div>
  )
}
