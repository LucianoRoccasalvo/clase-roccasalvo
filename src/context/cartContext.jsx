import { createContext, useState } from "react";

export const MyProvider = createContext();

export default function CartContext ({ children }) {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((x) => x.id === id);
    }


    const addItem = (item, count) => {
        const newItem = {
            ...item,
            count
        }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find((x) => x.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxCart = [...cart];
            auxCart[productIndex].count += count;
            setCart(auxCart);
        } else {
            setCart([...cart], newItem)
        }
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id));
    }

    const emptyCart = () => {
        setCart([]);
    }

    const getItemCount = () => {
        return cart.reduce((acc, x) => acc + x.count, 0);
    }

    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc + x.count * x.price, 0);
    }


    return <MyProvider.Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemCount, getItemPrice }}>{children} </MyProvider.Provider>

}



