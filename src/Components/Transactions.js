import React, { useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import { TransDeposits } from './TransDeposits';
import { TransPurchases } from './TransPurchases';


export const Transactions = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    e.preventDefault();
    setValue(newValue)
    console.log(Date.now())
  }

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value={0} label="Deposits" />
        <Tab value={1} label="Purchases" />
      </Tabs>
    </Box>
    { value===0 ? <TransDeposits /> : <TransPurchases />}
    </>
  );
}
