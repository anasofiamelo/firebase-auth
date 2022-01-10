// import { useState, useEffect } from "react";
import { Home, Login, Register } from './screens/index'
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<Home/>}></Route>  
        </Routes>
      </Router>
  );
}

export default App;