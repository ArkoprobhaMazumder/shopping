
import { NavLink } from 'react-router-dom';

const Gridview = ({ products }) => {

    return (
        <div className='row'>
            {
                products.map((ele, i) => {
                    let { name, price, image, category, description, id } = ele;
                    return (
                        <NavLink to={`/sigle-product/${id}`} key={i} className="col-sm-12 col-md-5 m-4">
                            <div className="card">
                                <img src={image} alt="product" />
                                <div className="card-body text-start">
                                    <p className='fw-bold text-secondary p-2 fs-4'>Name: {name}</p>
                                    <p className='fw-bold text-secondary p-2 fs-4'>Category: {category}</p>
                                    <p className='fw-bold p-2 fs-4 text-dark'>Price: &#8377;{price}</p>
                                    <p className='card-text fs-5 text-dark'>{description.slice(0, 60)}...</p>
                                </div>
                                <button className="btn btn-primary btn-lg">
                                    View Product
                                </button>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Gridview
