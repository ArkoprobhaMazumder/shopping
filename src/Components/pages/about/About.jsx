import { NavLink } from 'react-router-dom';
import styled from './about.module.css';
import hero from '../../images/hero.jpg';
import Sponcer from '../../features/sponcers/Sponcer';
import Service from '../../features/service/Service';



const About = () => {
    return (
        <div className={styled.aboutContainer}>
            <div className="container">
                <div className="row">
                    <div className="col-6 py-3 fs-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint, ipsum quis quos natus adipisci repellat nostrum reiciendis atque aperiam obcaecati quas at eligendi non. Perferendis minima magni odio nihil?</p>
                        <p className='text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint, ipsum quis quos natus adipisci repellat </p>
                        <NavLink to='/products' className='btn btn-warning btn-lg mt-2'>Shop Now</NavLink>
                    </div>
                    <div className="col-6">
                        <img src={hero} style={{ width: '100%', height: '70%' }} alt="" />
                    </div>
                </div>
                <Sponcer />
                <Service />
            </div>
        </div>
    )
}

export default About;