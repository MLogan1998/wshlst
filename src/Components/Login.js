import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Alert } from "@mui/material";
import { useUserAuth } from '../Context/UserAuthContext';
import { GoogleButton } from 'react-google-button'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError ] = useState("")
  const { logIn, signInWithGoogle } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    }catch(err) {
      setError(err.message);
      console.log(err);
    }
  }

  const googleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message)
    }
  };

  return (
    <div className="signUp__form">
      <form onSubmit={handleSubmit}>
        {error && <Alert severity="error">{ error }</Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" type="Submit">Sign Up</Button>
        <GoogleButton onClick={googleLogIn} />
      </form>
      <p>New? <Link to="/signup"> Sign Up </Link></p>
    </div>
  )
}

export default Login;
