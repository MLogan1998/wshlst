import React, { useContext, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ItemsContext } from '../Context/ItemsContext';


export const TransDeposits = () => {
  const { depos } = useContext(ItemsContext)
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      field: 'amount',
      valueFormatter: ({ value }) => currencyFormatter.format(value),
      headerName: 'Amount',
      width: '120',
      flex: 1
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1
    }

  ]

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  

  return (
    <div className="deposit__table">
      <DataGrid 
        width='240'
        columns={columns}
        rows={depos}
        autoHeight
        pageSize={pageSize}
      />
    </div>
  )
}
