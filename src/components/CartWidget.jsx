import React from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget() {

  const { getItemQty } = useContext(CartContext);
  return (
    <>
    <div>
      <Badge badgeContent={getItemQty()} color='primary'>
        <AiOutlineShoppingCart />
      </Badge>
    </div>
    </>
  )
}

export default CartWidget
