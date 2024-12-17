import { createContext, useContext, useState } from "react";
import { useProduct } from "./ProductContext";

const cartContext = createContext();

export const useCartContext = () => {
    let value = useContext(cartContext);
    return value;
}




const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);
    const { products } = useProduct();




    const addCart = (id, quantity) => {
        let index = cart.findIndex((ele) => ele.id === id);
        if (index === -1) {
            addFirstInCart(id, quantity);
        } else {
            cart[index].quantity += 1;
            setCart([...cart]);
        }
    }

    const addFirstInCart = (pid, quantity) => {
        let product = products.find((ele) => ele.id === pid);
        let { id, image, name, price } = product;
        setCart([...cart, { id, image, name, price, quantity }])
    }

    const decreaseCart = (id) => {
        const index = cart.findIndex((ele) => ele.id === id);
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            setCart([...cart]);
        }
    }

    const removeItemFromCart = (id) => {
        const index = cart.findIndex((ele) => ele.id === id);
        cart.splice(index, 1);
        setCart([...cart]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ cart, addCart, decreaseCart, clearCart, removeItemFromCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext
