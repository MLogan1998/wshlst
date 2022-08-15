import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
