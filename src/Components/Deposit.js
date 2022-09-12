import { React, useState, useContext } from 'react';
import { ItemsContext } from '../Context/ItemsContext'
import { TextField, IconButton, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInput-underline:after": {
        borderBottomColor: "#6fef71"
      },
      '& .MuiInputAdornment-root': {
        padding: '28px 28px',

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
        id: "id" + Math.random().toString(16).slice(2),
        date: new Date().toLocaleDateString()
      })
     getDepositsByUID(userId);
    }
  }


  const classes = useStyles();

  return (
    <div className='container'>
    <div className="deposit__contents">
      <img className="deposit__contents--image" src="https://i.imgur.com/P23TxvT.png" alt="Piggy Bank"></img>
      <TextField id="standard-adornment-amount"
          label="Amount" 
          type="number"
          variant="standard"
          className={classes.root}
          onChange={(e) => setAmount(e.target.value)}
          InputLabelProps={{
            style: {
                color: '#6fef71',
                fontWeight: 'bold',
                fontSize: '2rem',
          }}} 
          InputProps={{
            style: {
              fontWeight: 'bold',
              fontSize: '2rem',
              height: '100px'
            },
            startAdornment: 
              <InputAdornment
                sx={{
                  color: '#6fef71',
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
