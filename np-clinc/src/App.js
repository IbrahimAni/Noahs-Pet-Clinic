import './App.css';
import { Button } from './components';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <Routes>
        <Route path='/' element={<Button name='landing page'/>}/>
        <Route path='/home' element={<Button name='home page'/>}/>
    </Routes>
  );
}

export default App;
