import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';

function TableCrud({data, editFunc, deleteFunc}) {
  // const [data, setData] = useState(JSON.parse(localStorage.getItem('studentDetails')));

  const [tableData,setTableData] = useState(data);

  useEffect(()=>{
    setTableData(data)
  },[data])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{textAlign:'center'}}>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Tamil</TableCell>
            <TableCell align="center">English</TableCell>
            <TableCell align="center">Maths</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
             {
               tableData.map((ele, index) => (
                 <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{ele.studentName}</TableCell>
                    <TableCell>{ele.tamilMark}</TableCell>
                    <TableCell>{ele.englishMark}</TableCell>
                    <TableCell>{ele.mathsMark}</TableCell>
                    <TableCell>
                      <ModeIcon onClick={() => editFunc(index)}/>
                      <DeleteIcon onClick={() => deleteFunc(index)}/>
                      </TableCell>
                 </TableRow>
               ))
             }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCrud