import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';

function CartWidget() {

  const { getItemQty } = useContext(CartContext);
  return (
    <>
      <Badge badgeContent={getItemQty()} color='primary'>
      <ShoppingCartIcon />
      </Badge>
    </>
  )
}

export default CartWidget
