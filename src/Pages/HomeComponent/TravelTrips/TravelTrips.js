import React from 'react';
import img from '../../../images/blog-post-img-01-1024x681.jpg';
import img1 from '../../../images/blog-post-img-02-768x511.jpg';


const TravelTrips = () => {
    return (
        <div>
            <div className='container'>
                <div style={{ marginTop: '80px' }} className='row'>
                    <h1 className='fw-bold text-center mb-5'>TRAVEL ESSENTIALS <span style={{ color: '#8ef6e4' }}>TIPS</span></h1>
                    <div className='col-12 col-lg-6 mt-2'>
                        <div className='ms-4'>
                            <img width="95%" height="350px" src={img} alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div>
                            <h3 className='fw-bold text-dark '>MOVING TROUGH:THE EVERYDAY <br /> URBAN JUNGLE OF YOUR CITY
                            </h3>
                            <p className='text-secondary fw-bold mt-5'>They’re such an iconic location thanks to their  roles in Harry Potter and The Chamber of Secrets and The Princess Bride, where they served as a fantastical location <br /> for the perfect scenes.

                                Whether you’re going for the novelty of visiting a famous movie set or to see the raw allure of <br /> the west coast of Ireland,</p>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 mt-5'>
                        <div className='ms-4'>
                            <h3 className='fw-bold text-dark mt-5'>TOP HIKING TRAILS  IN THE PERUVIAN <br />AMAZON RAIN FOREST

                            </h3>
                            <p className='text-secondary fw-bold mt-5'>They’re such an iconic location thanks to their  roles in Harry Potter and The Chamber of Secrets and The Princess Bride, where they served as a fantastical location <br /> for the perfect scenes.

                                Whether you’re going for the novelty of visiting a famous movie set or to see the raw allure of <br /> the west coast of Ireland,</p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mt-5'>
                        <div className='ms-4'>
                            <img width="95%" height="350px" className='mt-5 ' src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelTrips;