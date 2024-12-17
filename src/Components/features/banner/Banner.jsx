import styled from './banner.module.css';
import { NavLink } from 'react-router-dom';
const Banner = () => {

    return (
        <div className={styled.bannerContainer}>
            <div className={styled.bannerImageBox}>
                {/* <img src={bannerPic} alt="banner" /> */}
            </div>
            <div className={styled.bannerInfoBox}>
                <h2 className='text-warning'>Welcome to </h2>
                <h1>My shop</h1>
                <p>Fresh Finds! Shop the Latest Trends Now 🛍️, Join Our Rewards Club & Earn Points on Every Purchase!. Holiday Savings Are Here! Up to 50% Off Sitewide 🎁.</p>
                <NavLink to='/products' className='btn btn-warning btn-lg'>Shop Now</NavLink>
            </div>
        </div>
    )
}

export default Banner;