import './App.css';
import {Landing, Login, SignUp, ForgotPassword, 
  EnterOTPCode, ResetPassword, Dashboard, BookAppointment, 
  AppointmentsDetails, AppointmentsHistoryDetails,
   RegisterNewPet, PetInfo, SettingsPage, DoctorDashbord} from "./pages" 
import {Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [popUp, setPopUp] = useState(false)

    function handlePopUp(event) {
        if (event) {
            event.preventDefault();
        }
        setPopUp(true);
        setTimeout(() => {
            setPopUp(false)
        },5500)
    }

  return (
    <Routes>
        <Route path='/' element={<Landing loggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/register' element={<SignUp />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/enter-otp-code' element={<EnterOTPCode />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/dashboard' element={<Dashboard setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/book-appointments' element={<BookAppointment popUp={popUp} handlePopUp={handlePopUp}/>}/>
        <Route path='/appointments-details' element={<AppointmentsDetails />}/>
        <Route path='/history-appointments-details' element={<AppointmentsHistoryDetails />}/>
        <Route path='/register-pet' element={<RegisterNewPet popUp={popUp} handlePopUp={handlePopUp} />}/>
        <Route path='/pet-information' element={<PetInfo popUp={popUp} handlePopUp={handlePopUp} />}/>
        <Route path='/settings' element={<SettingsPage />}/>
        <Route path='/doctor-dashboard' element={<DoctorDashbord />}/>
    </Routes>
  );
}

export default App;
