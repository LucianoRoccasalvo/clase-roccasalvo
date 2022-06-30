import React from 'react';
import { MyProvider } from '../context/CartContext';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget() {

  const { getItemCount } = useContext(MyProvider);
  return (
    <>
      <div>
        <Badge {...getItemCount()} color='primary'>
          <AiOutlineShoppingCart />
        </Badge>
      </div>
    </>
  )
}

export default CartWidget
