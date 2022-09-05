import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from "@mui/material";
import { useUserAuth } from '../Context/UserAuthContext';
import { GoogleButton } from 'react-google-button'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError ] = useState("")
  const { logIn, signInWithGoogle } = useUserAuth();
  const navigate = useNavigate();
  
  const { width, height } = useWindowSize()

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
       <Confetti
          width={width}
          height={height}
          colors={['#6fef71']} 
        />
        <div className="login__heading">
          <p className="heading login__heading--heading">wishlist</p>
        </div>
        <div className="login__google">
          <GoogleButton className="login__google--button" onClick={googleLogIn} type="light" />
        </div>
    </div>

  )
}
