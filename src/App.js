import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
// import Register from './Components/Register';
import Home from './Components/Home';

import './App.css';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/qweasd' element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
