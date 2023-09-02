import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Product, TrackingId, Amount, Customer, Status) {
    return { Product, TrackingId, Amount, Customer, Status };
  }
  
function List() {
    
  const rows = [
    createData('Product x', 'a1df3g', 6, 'Customer x', 'Approved'),
    createData('Product x', 'a1df3g', 9, 'Customer x','Pending'),
    createData('Product x', 'a1df3g', 16, 'Customer x', 'Approved'),
    createData('Product x', 'a1df3g', 3, 'Customer x', 'Approved'),
    createData('Product x', 'a1df3g', 16, 'Customer x','Pending'),
  ];

  return ( <TableContainer component={Paper} className='table'>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell align="left">Product</TableCell>
        <TableCell align="right">TrackingId</TableCell>
        <TableCell align="right">Amount</TableCell>
        <TableCell align="right">Customer</TableCell>
        <TableCell align="right">Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.Product}
        >
          <TableCell component="th" scope="row">
            {row.Product}
          </TableCell>
          <TableCell align="right">{row.TrackingId}</TableCell>
          <TableCell align="right">{row.Amount}</TableCell>
          <TableCell align="right">{row.Customer}</TableCell>
          <TableCell align="right" className='tableCell'>
            <span className={`Status ${row.Status}`}> {row.Status}</span></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>)
}

export default List
