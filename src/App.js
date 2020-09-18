import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";

const App = () =>{
  return (
    <div>
      <MyNavbar />
      Mi portafolio
    </div>
  );
}


export default App;
