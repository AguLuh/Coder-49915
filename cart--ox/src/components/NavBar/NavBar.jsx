import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import classes from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={`${classes.NavBar}`}>
      <ul>
        <a className={`${classes.NavBar}`}  href="#">Ferrari</a>
        <a className={`${classes.NavBar}`}  href="#">Chevrolet</a>
        <a className={`${classes.NavBar}`}  href="#">Aston Martin</a>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
