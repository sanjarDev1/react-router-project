import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { Contact } from './contact/Contact';
import { Navbar } from './navbar/Navbar.jsx';
import { Home } from './home/Home.jsx';
import { About } from './about/About';
import { Notfound } from './notfound/notfound';

export const App = () => {
  return <div> 
    <Routes>
    <Route path='/' element={<Navbar />} /> 
    <Route path='/contact' element={<Navbar />} /> 
    <Route path='/about' element={<Navbar />}/> 
    </Routes>
  <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/contact' element={<Contact />} /> 
    <Route path='/about' element={<About />}/> 
    <Route path='*' element={<Notfound />} /> 


  </Routes>
  </div>
};
