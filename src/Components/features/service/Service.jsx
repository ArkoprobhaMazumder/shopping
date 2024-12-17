import styled from './service.module.css';
import 'animate.css';

const Service = () => {
    return (
        <div className={styled.serviceContainer}>
            <div className="container">
                <div className="text-center p-4">
                    <p className='fs-1 fw-bold pb-4 text-dark'>Our Services</p>
                    <div className="row">
                        <div className="col-4 mb-3 animate__animated animate__zoomIn">
                            <div className={styled.serviceBox}>
                                <i className="fa-solid fa-truck text-info fs-2"></i>
                                <h2 className='text-secondary'>Super Fast Delivary</h2>
                            </div>
                        </div>
                        <div className="col-4 mb-3 animate__animated animate__zoomIn">
                            <div className={styled.serviceBox}>
                                <i className="fa-solid fa-shield-halved text-info fs-2"></i>
                                <h2 className='text-secondary'>Super Fast Delivary</h2>
                            </div>
                        </div>
                        <div className="col-4 mb-3 animate__animated animate__zoomIn">
                            <div className={styled.serviceBox}>
                                <i className="fa-solid fa-user-shield text-info fs-2"></i>
                                <h2 className='text-secondary'>Super Fast Delivary</h2>
                            </div>
                        </div>
                        <div className="col-4 mb-3 animate__animated animate__zoomIn">
                            <div className={styled.serviceBox}>
                                <i className="fa-solid fa-building-columns text-info fs-2"></i>
                                <h2 className='text-secondary'>Super Fast Delivary</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
