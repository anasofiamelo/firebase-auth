// import { useState, useEffect } from "react";
import { Home, Login, Register } from './screens/index'
import './App.css';
import { UserProvider } from './contexts/user'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/home' element={<Home/>}></Route>  
          </Routes>
        </Router>
      </UserProvider>
  );
}

export default App;