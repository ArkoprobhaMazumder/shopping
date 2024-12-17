import { NavLink } from "react-router-dom";
import styled from './productList.module.css';

const ListView = ({ products }) => {
    return (
        <div className='row'>
            {
                products.map((ele, i) => {
                    let { name, price, image, category, description, id } = ele;
                    return (
                        <NavLink to={`/sigle-product/${id}`} key={i} className="col-12 mb-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-4">
                                        <div className={styled.listImage}>
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8 px-3 text-start p-3">
                                        <p className="fw-bold fs-4 mb-2 text-secondary">Name: {name}</p>
                                        <p className="fw-bold fs-4 mb-2 text-secondary">Category: {category}</p>
                                        <p className="fw-bold fs-4 mb-2 text-dark">Price: &#8377;{price}</p>
                                        <p className="fs-6 mb-2 text-dark">description: {description.slice(0, 100)}...</p>
                                        <button className="btn btn-primary btn-lg">View product</button>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default ListView
