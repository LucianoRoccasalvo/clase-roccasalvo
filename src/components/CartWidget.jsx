  import React from 'react';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

  function CartWidget({items}) {
    return (
    <>
      <ShoppingCartIcon/>
      {items}
    </>
     )
  }

  export default CartWidget
