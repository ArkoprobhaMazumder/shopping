import styled from './contact.module.css';

const Contact = () => {
    return (
        <div className={styled.contactContainer}>
            <div className="container">
                <div className="text-center">
                    <p className='fs-1 fw-bold p-2 text-dark'>Contact Us</p>
                    <div className={styled.contactForm}>
                        <p className='pb-3 fs-4 text-secondary'>Please Feel free to contact for business Purpose</p>
                        <form action="https://formspree.io/f/meqyozyb" className='text-secondary text-start' method='post'>
                            <div className="mb-3">
                                <label htmlFor="name" className='form-label fs-3 fw-bold'>Name</label>
                                <input type="text" className='form-control' placeholder='Enter Your Name' id='name' name='username' required autoComplete="off" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label fs-3 fw-bold'>Email</label>
                                <input type="mail" placeholder='Enter Your Email' className='form-control' id='email' name='email' required autoComplete="off" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className='form-label fs-3 fw-bold'>Message</label>
                                <textarea name="message" id="message" className='form-control' placeholder="Write your message" cols="45" autoComplete="off" required rows="10"></textarea>
                            </div>
                            <button className='btn btn-danger btn-lg'> Contact Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
