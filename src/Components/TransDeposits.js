import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ItemsContext } from '../Context/ItemsContext';


export const TransDeposits = () => {
  const { depos } = useContext(ItemsContext)

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
        // columns={[{ field: 'amount', valueFormatter: ({ value }) => currencyFormatter.format(value), headerName: 'Amount', width: '120'},  {field: 'date', headerName: 'Date'}]}
        columns={columns}
        rows={depos}
        autoHeight
        // autoPageSize
        // rowsPerPageOptions={10}
        pageSize={[10]}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}
