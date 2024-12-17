
import { useCartContext } from "../../context/CartContext";
import styled from "./cart.module.css";

import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import trash from '../../images/trash.png';
import { Link } from "react-router-dom";
import BillBox from "../../features/billBox/BillBox";

const Cart = () => {

    const { cart, addCart, decreaseCart, removeItemFromCart, clearCart } = useCartContext();

    if (cart.length < 1) {
        return <h2 className="text-danger text-center mt-4">No Items in Cart</h2>
    }

    return (
        <div className={styled.cartContainer}>
            <div className="container">
                <div className="text-center">
                    <p className='fs-1 fw-bold mb-4 text-dark'>Cart</p>
                    <div className={styled.tableContainer}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>item</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>total</th>
                                    <th>remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((ele, i) => {
                                        const { quantity, image, name, price, id } = ele;
                                        if (quantity > 0) {
                                            return (
                                                <tr key={i} className="text-center fs-5 fw-bold py-3 my-2">
                                                    <td>
                                                        <img src={image} style={{ width: "50px", height: "50px", borderRadius: "50%" }} alt="cartItem" />
                                                        <span className="px-2">{name}</span>
                                                    </td>
                                                    <td>&#8377; {price}</td>
                                                    <td>
                                                        <img src={minus} style={{ width: "20px", height: "20px", borderRadius: "50%" }} alt="cartItem" onClick={() => decreaseCart(id)} />
                                                        <span className="px-2">{quantity}</span>
                                                        <img src={plus} style={{ width: "16px", height: "16px", borderRadius: "50%" }} alt="cartItem" onClick={() => addCart(id)} />
                                                    </td>
                                                    <td>
                                                        <span>&#8377; {quantity * price}</span>
                                                    </td>
                                                    <td>
                                                        <img src={trash} style={{ width: "30px", height: "30px" }} alt="cartItem"
                                                            onClick={() => removeItemFromCart(id)} />
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className="my-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <Link to='/products' className="btn btn-primary btn-lg">Shop More</Link>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <button className="btn btn-warning btn-lg" onClick={clearCart}>Clear Cart</button>
                            </div>
                        </div>
                    </div>

                    <BillBox />

                </div>
            </div>
        </div>
    )
}

export default Cart
