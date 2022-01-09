import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from "./Navbar";
import {Navigate, Route, Routes} from 'react-router-dom';

const App =()=>{
  return(
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path= '*' element={<Navigate to ='/'/>}/> 
    </Routes>
    
  
    
  </>
  );
};
export default App;