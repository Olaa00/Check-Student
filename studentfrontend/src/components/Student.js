// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper, Button } from '@mui/material';


export default function Student() {
    const paperStyle={padding:'50px 20px' , width:600, margin:"20px auto"}
    // const classes = useStyles();
    const [name, setName] =useState('')
    const [nationality, setNationality] =useState('')
    const [students, setStudents]=useState([])
    const handleClick=(e)=>{
      e.preventDefault()
      const student={name, nationality}
      console.log(student)
      fetch("http://localhost:8080/student/add", {
        method:"POST",
        headers:{"content-Type" : "application/json"},
        body:JSON.stringify(student)
      }). then(()=>
      {console.log("New student added")})
    }
useEffect(()=>{
  fetch("http://localhost:8080/student/all")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])

  return (
  <Container>
    <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"dark"}}>Add Student</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
        
         {/* <form className={classes.root} noValidate autoComplete="off"> */}
      <TextField id="outlined-basic" label="Student name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Nationality" variant="outlined" fullWidth
      value={nationality}
      onChange={(e)=>setNationality(e.target.value)}/>
      {/* </form> */}
      <Button variant="contained" color="secondary"onClick={handleClick}>
        Submit
      </Button>
      </Box>
      {name }
      {nationality}
  

</Paper>
<h1>Students</h1>

<Paper elevation={3} style={paperStyle}>

  {students.map(student=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
     Id:{student.id}<br/>
     Name:{student.name}<br/>
     Nationality:{student.nationality}

    </Paper>
  ))
}


</Paper>



</Container>
);
}
