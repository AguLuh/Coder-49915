import React from 'react';
import classes from './CartWidget.module.css'
import cart from '../assets/shopping-cart-black.png';

const CartWidget = () => {
  return (
    <div className={`${classes.CartWidget}`}>
        <img src={cart} alt="" />
        0
    </div>
  );
}

export default CartWidget;
