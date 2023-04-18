import './App.css';
import {Landing, Login, SignUp, ForgotPassword, EnterOTPCode, ResetPassword} from "./pages" 
import {Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
        <Route path='/' element={<Landing loggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/register' element={<SignUp />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/enter-otp-code' element={<EnterOTPCode />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
    </Routes>
  );
}

export default App;
