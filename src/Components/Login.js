import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
    <h1>Login</h1>
    <h5> Dont have an account? <Link to="/signup">Sign Up </Link></h5>
    </div>
  )
}

export default Login;
