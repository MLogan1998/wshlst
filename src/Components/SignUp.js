import { React, useState } from 'react';
import { TextField, Button, Alert } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError ] = useState("")
  const {signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    }catch(err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h1>SignUp</h1>
      <div>
      {error && <Alert severity="error">{ error }</Alert>}
      </div>

      <div className="signUp__form">
        <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
          <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" type="Submit">Sign Up</Button>
        </form>
      </div>
      <h5> Back to <Link to="/">Login</Link></h5>
    </div>
  )
}
