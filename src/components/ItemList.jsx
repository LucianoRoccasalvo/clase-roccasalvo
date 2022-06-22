import React from 'react'
import Item from './Item'
import './MyComponent/MyComponent.css'

const ItemList = ({ropa}) => {
  return (
    <div className='bordeItem'>
      {ropa?.map(ropa => <Item key={ropa.id} ropa = {ropa} />)}
    </div>
  )
}

export default ItemList