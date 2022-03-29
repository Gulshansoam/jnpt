
import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Components/Header/HeaderComponent';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <React.Fragment>

    <BrowserRouter>

    <HeaderComponent />
    
    </BrowserRouter>


    </React.Fragment>
  );
}

export default App;
