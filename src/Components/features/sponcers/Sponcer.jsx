import styled from './sponcer.module.css';

const Sponcer = () => {
    return (
        <div className={styled.sponcerContainer}>
            <div className="container">
                <div className="text-center pb-4">
                    <p className='fs-1 fw-bold p-2 text-dark'>Trusted By 1000+ Companies</p>
                </div>
                <div className="d-flex align-items-start justify-content-center flex-wrap">
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-square-facebook"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-skype"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-amazon-pay"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-solid fa-audio-description"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-X-twitter"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-line"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-weixin"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-discord"></i>
                    </div>
                    <div className="text-secondary fs-1 m-4">
                        <i className="fa-brands fa-square-facebook"></i>
                    </div>
                    <div className=" text-secondary fs-1 m-4">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="text-secondary fs-1 m-4">
                        <i className="fa-regular fa-building"></i>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sponcer
