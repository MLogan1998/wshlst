import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Alert } from "@mui/material";
import { useUserAuth } from '../Context/UserAuthContext';
import { GoogleButton } from 'react-google-button'

export const Login = () => {
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
    <div className="login">
      <div className="login__heading">
        <img className="login__heading--image"src="https://svgshare.com/i/kBt.svg" alt="Piggy Bank"></img>
        <h1 className="login__heading--heading">wshlst</h1>
      </div>
      <div className="login__form">
        <form className="form" onSubmit={handleSubmit}>
          {error && <Alert severity="error">{ error }</Alert>}
          <TextField className="form__input" id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
          <TextField className="form__input" id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" type="Submit">Log In</Button>
          <GoogleButton onClick={googleLogIn} />
        </form>
      </div>
      <p>New? <Link to="/signup"> Sign Up </Link></p>
    </div>
  )
}
