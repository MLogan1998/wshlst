import React from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputAdornment from '@mui/material/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: '#ffd345'
    },
    "& .MuiFilledInput-root": {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: "#00000059",
      "&:hover": {
        backgroundColor: "#00000059",
        "@media (hover: none)": {
          backgroundColor: "#00000059"
        }
      },
      "&.Mui-focused": {
        backgroundColor: "#00000059"
      },
      fontWeight: 'bold',
      color: 'white',
      fontSize: 20,
      width: 'auto',
      padding: '10px 12px',
    }
      } 
  }))

export const Deposit = () => {

  const classes = useStyles();

  return (
    <div className='container'>
    <div className="deposit__contents">
      {/* <h1 className="heading deposit__contents--heading">Deposit</h1> */}
      <img className="deposit__contents--image" src="https://i.imgur.com/T6LLdAN.png" alt="Piggy Bank"></img>
      <TextField id="outlined-basic"
          label="Amount" 
          type="number"
          variant="filled"
          className={classes.root}
          InputLabelProps={{
            style: {
                color: '#ffd345'
          }}} 
          InputProps={{ 
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }} />
    </div>
    </div>
  )
}
