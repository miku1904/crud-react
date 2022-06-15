import * as React from 'react';
import { styled, StyledEngineProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { useState,useEffect } from 'react';
import FormModal from './comp/FormModal';
import Searchinginput from './comp/Searchinginput';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white, 
    border:2
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ListTable() {
  const [rows,setRows] = useState([])

  localStorage.setItem("data",JSON.stringify([{"id":1,"name":"dharmik","email":"Dharmikvaishnav0419@gmail.com"},{"id":1,"name":"harsh","email":"harshpatel.com"}]))

  const getData = () =>{
    const data = JSON.parse(localStorage.getItem("data"))
    if(data){
      setRows(data)
    }else{
      localStorage.setItem("data",[])
    }
  }

  useEffect(() => {
    getData();
  }, []);




  return (
    <>
    <TableContainer component={Paper} sx={{ width: 900,mt:2,m:"auto" }} >
    <FormModal/>
    <Searchinginput direction="row"/>
      <Table sx={{ minWidth: 700, marginTop: 1 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="right">Password</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.password}</StyledTableCell>


            </StyledTableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </>
  );
}
