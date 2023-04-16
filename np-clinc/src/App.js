import './App.css';
import {Landing, Login, SignUp, ForgotPassword, EnterOTPCode, ResetPassword} from "./pages" 
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<SignUp />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/enter-otp-code' element={<EnterOTPCode />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
    </Routes>
  );
}

export default App;
