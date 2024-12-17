import styled from "./footer.module.css";

import React from 'react'

const Footer = () => {
    return (
        <div className={styled.footerContainer}>
            <div className="container">
                <div className="p-4">
                    <div className={styled.footerBar}>
                        <p>Ready to Get Started &gt; Talk to Us Today?</p>
                        <a href="#" className="btn btn-primary btn-md">Get Started</a>
                    </div>
                    <div className="p-4 mt-4">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-1">
                                <h2>Contacts</h2>
                                <p className="my-2">Mail: arkoprobha30@gmail.com</p>
                                <p className="my-2">Phone: 9832813553</p>
                                <div className="row my-3">
                                    <div className="col-4">
                                        <i class="fa-brands fa-facebook fs-1 text-info"></i>
                                    </div>
                                    <div className="col-4">
                                        <i class="fa-brands fa-linkedin fs-1 text-info"></i>
                                    </div>
                                    <div className="col-4">
                                        <i class="fa-brands fa-square-instagram fs-1 text-info"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-1">
                                <h2>Address</h2>
                                <p className="my-2">45 MG Road, Whitefield Bangalore</p>
                                <p className="my-2">Retro Mall, Stands Market Mumbai</p>
                                <p className="my-2">Salt Lake Sector 5 Kolkata , Bidhanagr Kolkata</p>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-1">
                                <h2>Services</h2>
                                <p className="my-2 text-secondary fw-bold">Fast Delivary</p>
                                <p className="my-2 text-secondary fw-bold">Green City</p>
                                <p className="my-2 text-secondary fw-bold">Ecommerce</p>
                                <p className="my-2 text-secondary fw-bold">Human Service</p>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-1">
                                <h2>Careers</h2>
                                <p className="my-2 text-danger fw-bold">Enthusiastic to Start</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styled.footerLast}>
                        <h6>Feel Free to contact on Business Purpose</h6>
                        <p>All Copyright Reserved | @My Store 2024 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
