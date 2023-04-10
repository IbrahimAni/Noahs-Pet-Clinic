import './App.css';
import { Button } from './components';
import {Landing} from "./pages" 
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Button name='home page'/>}/>
    </Routes>
  );
}

export default App;
