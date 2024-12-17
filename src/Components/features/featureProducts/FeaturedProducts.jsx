

import FeatureCard from '../../cards/FeatureCard';
import { useProduct } from '../../context/ProductContext';
import styled from './featureProduct.module.css';

const FeaturedProducts = () => {

    // Configuring Product Supplier
    const { products } = useProduct();

    let featureProducts = products.filter((ele) => ele.featured === true);

    return (
        <div className={styled.featureProductContainer}>
            <div className="container">
                <div className="text-center">
                    <p className='fs-1 fw-normal text-danger'>Check Now!</p>
                    <p className='fs-1 fw-bold p-2 text-dark'>Our Feature Products</p>
                    <div className={styled.featureItemBox}>
                        <div className="row">
                            {
                                featureProducts.map((ele, i) => {
                                    return (
                                        <div key={i} className="col-sm-12 col-md-6 col-lg-4 mb-3 text-dark">
                                            <FeatureCard data={ele} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
