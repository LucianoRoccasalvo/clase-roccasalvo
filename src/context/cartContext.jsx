import { createContext,useState } from "react";     

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.findIndex(item => item.id === id);
    }


    const addItem = (item, qty) => {
        const newItem = { 
            ...item,
            qty
        }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxCart = [...cart];
            auxCart[productIndex].qty += qty;
            setCart(auxCart);
        } else {
            setCart([...cart], newItem)
        }
    }

        const deleteItem = (id) => {
            return setCart(cart.filter(item => item.id !== id));
        }

        const emptyCart = () => {
            setCart([]);
        }

        const getItemQty = () => {
            return cart.reduce((acc, x) => acc + x.qty, 0);
        }

        const getItemPrice = () => {
            return cart.reduce((acc, x) => acc + x.qty * x.price , 0);
        }


        return  <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice }}>{children} </Provider>

    }

    export default MyProvider ;

