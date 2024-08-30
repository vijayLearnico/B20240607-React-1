import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

function StudentForm({ setData,editData,editIndex,setEditData,setEditIndex }) {

    const [studentName, setStudentName] = useState('');
    const [TamilMark, setTamilMark] = useState('');
    const [EnglishMark, setEnglishMark] = useState('');
    const [MathsMark, setMathsMark] = useState('');

    // const [data, setData] = useState(localStorage.getItem('studentDetails') 
    // ? localStorage.getItem('studentDetails') 
    // : []);


    function submit() {
        // store all the data in one variable
        const studentDetails = {
            studentName: studentName,
            tamilMark: TamilMark,
            englishMark: EnglishMark,
            mathsMark: MathsMark
        }

        if(editData){
         // Edit logic
         setData((currentValue)=>{
            currentValue[editIndex] = studentDetails;
            return [...currentValue];
         })
         setEditData(null);
         setEditIndex(null);
        }else{
        // Add new data logic
            setData((currentValue) => {
                return [...currentValue, studentDetails];
            });
        }


        setStudentName('');
        setTamilMark('');
        setEnglishMark('');
        setMathsMark('');
        // adding new data with the previous data
        //    console.log(...data)
        //    const dataToBeStored = [...data,studentDetails]

        //    setData(dataToBeStored);

        //    const dataToStore = JSON.stringify(dataToBeStored)
        //    localStorage.setItem('studentDetails',dataToStore)

    }

    useEffect(()=>{

       if(editData){
        setStudentName(editData.studentName)
        setTamilMark(editData.tamilMark);
        setEnglishMark(editData.englishMark);
        setMathsMark(editData.mathsMark);
       }
    
    },[editData])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <h1>Student Form</h1>
                    <TextField
                        style={{ margin: 5 }}
                        label="Student Name"
                        variant="outlined"
                        value={studentName}
                        onChange={(event) => {
                            setStudentName(event.target.value)
                        }} />
                    <TextField
                        style={{ margin: 5 }}
                        label="Tamil Mark"
                        value={TamilMark}
                        variant="outlined"
                        onChange={(event) => {
                            setTamilMark(event.target.value)
                        }} />
                    <TextField
                        style={{ margin: 5 }}
                        label="English Mark"
                        value={EnglishMark}
                        variant="outlined"
                        onChange={(event) => {
                            setEnglishMark(event.target.value)
                        }} />
                    <TextField
                        style={{ margin: 5 }}
                        label="Maths Mark"
                        value={MathsMark}
                        variant="outlined"
                        onChange={(event) => {
                            setMathsMark(event.target.value)
                        }} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" onClick={submit}>
                            {editData ? 'Update' : 'Submit'}
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default StudentForm