import { useCartContext } from "../../context/CartContext"


const BillBox = () => {

    const { cart } = useCartContext();
    let total = cart.reduce((accum, ele) => {
        let res = accum + (ele.price * ele.quantity);
        return res;
    }, 0);
    return (
        <div className='w-25 text-start mt-4 p-4 shadow-lg rounded'>
            <h2 className="mb-4 text-center">Bill</h2>
            <h5 className='mb-2'>Total Amount: &#8377;{total}</h5>
            <h5 className='mb-2'>Shipping fee: &#8377; 50</h5>
            <hr />
            <h4>Total Price: &#8377;{parseInt(total) + 50}</h4>
        </div>
    )
}

export default BillBox
