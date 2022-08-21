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
        <img className="login__heading--image"src="https://i.imgur.com/T6LLdAN.png" alt="Piggy Bank"></img>
        <h1 className="login__heading--heading">wishlist</h1>
        <GoogleButton className="login__heading--google" onClick={googleLogIn} type="light" />
      </div>
      <div className="login__form">
        <form className="form" onSubmit={handleSubmit}>
          {error && <Alert severity="error">{ error }</Alert>}
          {/* <TextField className="form__input" id="outlined-basic1" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value)} />
          <TextField className="form__input" id="outlined-basic" label="Password" variant="filled" onChange={(e) => setPassword(e.target.value)} />
          <Button className="form__button" variant="contained" type="Submit">Log In</Button> */}
          
        </form>
        {/* <p>New? <Link to="/signup"> Sign Up </Link></p>
     
      <p>New? <Link to="/signup"> Sign Up </Link></p> */}
       </div>
    </div>
  )
}
