import React from 'react'
import { useContext } from 'react'
import {  MyProvider } from '../context/CartContext'
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom'





export default function Cart() {

  const { cart, deleteItem, emptyCart, getItemCount, getItemPrice } = useContext(MyProvider)



  return (
    <>
      <div>
        <h1>Tu carrito</h1>
      </div>

      {cart.length > 0 ? (
        <div >
          <div>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 &&
                  cart.map((item) => (
                    <tr key={item.id}>
                      <th>
                        <button onClick={() => deleteItem(item.id)}>
                          <MdDeleteForever />
                        </button>
                      </th>
                      <th>
                        <img
                          src={require(`${item.pictureUrl}`)}
                          alt={item.title}
                          width="90"
                        />
                      </th>
                      <td>
                        <Link to={`/item/${item.id}`}>{item.title} </Link>
                      </td>
                      <td>${item.price}</td>
                      <td>{item.count}</td>
                      <td>
                        <b>${getItemPrice}</b>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button onClick={() => emptyCart()}> Vaciar </button>
          </div>
          <div>
            <div>
              <h4>Total</h4>
              <h5>
                Total: <span>${getItemPrice()} ({getItemCount()}</span>
              </h5>
              <Link to="/checkout"> Pagar </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Tu carrito esta vacio</h3>
          <Link to="/"><button>Inicio</button></Link>
        </div>
      )}
      );
};
    </>
  )
}