import { React, useState, useContext, useEffect } from 'react';
import { ItemsContext } from '../Context/ItemsContext'
import { TextField, IconButton, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

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
    },

      } 
  }))

export const Deposit = () => {
  const [ amount, setAmount ] = useState(null);
  const [ error, setError ] = useState("");
  const { addDeposit, getDepositsByUID } = useContext(ItemsContext)

  const userId = localStorage.getItem('f_token');


  const handleDepositClick = (e) => {
    e.preventDefault();
    if (amount === null || amount === "") {
      setError('Please enter a valid amount.')
    } else {
      setError("")
      addDeposit({
        uid: userId,
        amount: parseFloat(amount),
      })
     getDepositsByUID(userId);
    }
  }


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
          onChange={(e) => setAmount(e.target.value)}
          InputLabelProps={{
            style: {
                color: '#ffd345'
          }}} 
          InputProps={{ 
            startAdornment:       <InputAdornment
            sx={{
              color: 'white'
            }}
            position="start"
          >
            $
          </InputAdornment>,
            endAdornment: <InputAdornment position="end">
                            <IconButton onClick={handleDepositClick}>
                              <SendIcon />
                            </IconButton>
                          </InputAdornment>
            }} />
            {error && <Alert className="depositcontents--error" sx={{ marginTop: 2 }} severity="error">{ error }</Alert>}
    </div>
    </div>
  )
}
