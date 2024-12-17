import styled from './singleProduct.module.css';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';
import pic2 from '../../images/iphone.avif';
import pic3 from '../../images/laptop.webp';
import pic4 from '../../images/samsung.jpg';
import pic5 from '../../images/watch.jpg';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

const SinglePage = () => {

    const [pic, setPic] = useState(0);
    const [quantity, setQuantity] = useState(1);


    const { addCart } = useCartContext();
    const { products } = useProduct();

    const { id } = useParams();

    let index = products.findIndex((ele) => ele.id === id);
    let singleProduct = products[index];
    let { category, company, image, name, price, shipping, description } = singleProduct;

    const increase = () => {
        setQuantity(quantity + 1);
    }
    const decrease = () => {
        if (quantity <= 1) {
            return;
        }
        setQuantity(quantity - 1);
    }





    const photoSet = [image, pic2, pic3, pic4, pic5];

    return (
        <div className={styled.singleProductContainer}>
            <h2 className='py-3 mb-5'>Product</h2>
            <div className='container'>
                <div className="row">
                    <div className="col-5 py-4">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className={styled.imageOptionBox}>
                                {
                                    photoSet.map((ele, i) => {
                                        return (
                                            <div key={i} className={styled.imageItem} onClick={() => setPic(i)}>
                                                <img src={ele} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styled.displayImage}>
                                <img src={photoSet[pic]} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-7 p-4 text-start">
                        <p className='fs-2 fw-bolder px-2 mb-3'>Name: {name}</p>
                        <p className='fs-4 fw-normal px-2 mb-3'>Category: {category}</p>
                        <p className='fs-3 fw-bolder px-2 mb-3'>Price: &#8377; {price}</p>
                        <p className='fs-5 fw-normal px-2 mb-3'>Description: {description}</p>
                        <div className="mt-4 pt-2">
                            <h3 className='mb-4'>Delivary Options</h3>
                            <div className="row">
                                <div className="col-3 mx-1 text-secondary fw-bold text-center">
                                    Free Delivary
                                </div>
                                <div className="col-3 mx-1 text-secondary fw-bold text-center">
                                    20 Days Return Policy
                                </div>
                                <div className="col-3 mx-1 text-secondary fw-bold text-center">
                                    1 Year Warranty
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-2">
                            <p className='fs-5 fw-small px-2 mb-3'>Available: {shipping ? <b>In Stock</b> : <b>Out of Stock</b>}</p>
                            <p className='fs-5 fw-small px-2 mb-3'>Company: <b>{company}</b></p>
                        </div>
                        <div className="my-4">
                            <h5>Add Quantity</h5>
                            <div className="pt-2">
                                <span className='mx-3 fs-3 text-secondary' onClick={decrease}><i className="fa-solid fa-minus"></i></span>
                                <span className='mx-3 fs-3 fw-bolder text-info'>{quantity}</span>
                                <span className='mx-3 fs-3 text-secondary' onClick={increase}><i className="fa-solid fa-plus"></i></span>
                            </div>
                        </div>
                        <button className='btn btn-primary btn-lg' onClick={() => addCart(id, quantity)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
