// import  { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../views/dashboard/Dashboard';
import Register from '../views/register/Register';
import User from '../views/users/User';
import NavigationBar from './shared/NavigationBar';
import NavigationBarNS from './shared/NavigationBarNS';


function App() {
  return ( 
    <Routes>
      <Route path="/" element = {<NavigationBar><Dashboard /></NavigationBar>} />
      <Route path="/register" element = {<NavigationBarNS><Register /></NavigationBarNS>} />
      <Route path="/user/:id" element = {<NavigationBarNS><User /></NavigationBarNS>} />
    </Routes>
  );
}

export default App;