import React from 'react'
import Item from './Item'

const ItemList = ({ropa}) => {
  return (
    <div>
      {ropa?.map(ropa => <Item key={ropa.id} ropa = {ropa} />)}
    </div>
  )
}

export default ItemList