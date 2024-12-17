import styled from "./navbar.module.css";
import navLogo from '../../images/logo.png';


import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const Navbar = () => {

    const [wrapper, setWrapper] = useState(false);
    const { cart } = useCartContext();

    return (
        <>
            <div className={styled.navbar}>
                <div className={styled.mainNav}>
                    <div className={styled.navLogoBox}>
                        <NavLink to='/'>
                            <img src={navLogo} className={styled.navLogo} alt="" />
                        </NavLink>
                    </div>
                    <ul className={styled.navLists}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>About</NavLink>
                        <NavLink to='/products' className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>Products</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>Contacts</NavLink>
                        <div className="position-relative">
                            <NavLink to="/cart" className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                {
                                    cart.length > 0 ?
                                        <div className={styled.cartCount}>
                                            {cart.length}
                                        </div>
                                        :
                                        null
                                }
                            </NavLink>
                        </div>
                    </ul>
                    <div className={styled.wrapperNav} >
                        <i className={wrapper ? 'fa-solid fa-xmark text-dark fs-1' : 'fa-solid fa-bars text-dark fs-1'} onClick={() => setWrapper(!wrapper)}></i>

                        {wrapper &&
                            <div className={styled.wrapperNavMain}>
                                <div className="row">
                                    <div className="col-12 mb-4 p-2 text-center">
                                        <NavLink to="/" className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>Home</NavLink>
                                    </div>
                                    <div className="col-12 mb-4 p-2 text-center ">
                                        <NavLink to="/about" className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>About</NavLink>
                                    </div>
                                    <div className="col-12 mb-4 p-2 text-center">
                                        <NavLink to='/products' className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>Products</NavLink>
                                    </div>
                                    <div className="col-12 mb-4 p-2 text-center ">
                                        <NavLink to='/contact' className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>Contacts</NavLink>
                                    </div>
                                    <div className="col-12 mb-4 p-2 text-center">
                                        <div className="position-relative">
                                            <NavLink to="/cart" className={({ isActive }) => (isActive ? styled.nav_link_active : styled.nav_link)}>
                                                <i className="fa-solid fa-cart-shopping fs-1"></i>
                                                {
                                                    cart.length > 0 ?
                                                        <div className={styled.cartCount}>
                                                            {cart.length}
                                                        </div>
                                                        :
                                                        null
                                                }
                                            </NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div >
            <Outlet />
            <Footer />
        </>

    )
}

export default Navbar
