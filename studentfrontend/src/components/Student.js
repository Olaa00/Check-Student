// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
       
//       },
//     },
//   }));
export default function Student() {
    const paperStyle={padding:'50px 20px' , width:600, margin:"20px auto"}
    // const classes = useStyles();
    const [name, setName] =useState('Ola')
    const [nationality, setNationality] =useState('PL')
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
      </Box>
    </Paper>
   </Container>
  );
}
