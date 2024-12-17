import { NavLink } from 'react-router-dom';
import styled from './featureCard.module.css';

const FeatureCard = ({ data }) => {
    let { image, category, name, price, id } = data;

    return (
        <NavLink to={`/sigle-product/${id}`} className={styled.featureCard}>
            <div className='card'>
                <img src={image} alt="Product" />
                <div className="d-flex align-items-center justify-content-between p-3">
                    <span className='fw-bolder text-left text-dark'>{name}</span>
                    <span className='fw-bold text-right text-primary'>&#8377;{price}</span>
                </div>
            </div>
            <div className={styled.categoryField}>
                <p className='text-light'>{category}</p>
            </div>
        </NavLink>
    )
}

export default FeatureCard
