import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
// import Register from './Components/Register';
import Home from './Components/Home';

import './App.css';
import { useState } from 'react';





function App() {
  console.log('root here');

  const [logged, setLogged] = useState(false);
  
  const InnerHandler = (entered) => {
    console.log("!!!");
    console.log(entered);
    if(entered) setLogged(true);
}

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login onSaveInnerData = {InnerHandler}/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}

      {logged?(
        <Route path='/qweasd' element={<Home/>}></Route>
      ):(
        <Route path='/qweasd' element={<Login  onSaveInnerData = {InnerHandler}/>}></Route>
      )}
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
