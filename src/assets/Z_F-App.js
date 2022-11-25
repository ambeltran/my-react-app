import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

const dishes = DISHES;

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary"> 
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> 
        <Menu />
        
    </div>
  );
}




export default App;
