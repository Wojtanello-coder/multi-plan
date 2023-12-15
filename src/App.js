import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components//Login/Login';
// import Register from './Components/Register';
import Home from './Components/Home/Home';

import './App.css';
import { useState } from 'react';





function App() {

  // state of if user is logged
  const [logged, setLogged] = useState(false);
  
  // check if logged from login page
  const InnerHandler = (entered) => {
    // console.log("!!!");
    // console.log(entered);
    if(entered) setLogged(true);
}

  return (
    <BrowserRouter>
    <Routes>
      {/* empty url leads to login page */}
      <Route path='/' element={<Login onSaveInnerData = {InnerHandler}/>}/>

      {/* send to homepage when logged, send to login when not logged */}
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
