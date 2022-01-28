import React from 'react';
import img1 from '../../../images/h1-clients-img-01.png';
import img2 from '../../../images/h1-clients-img-02.png';
import img3 from '../../../images/h1-clients-img-03.png';
import img4 from '../../../images/h1-clients-img-04.png';
import img5 from '../../../images/h1-clients-img-05.png';
const IconBlog = () => {
    return (
        <div>
            <div className='container mt-5 '>
                <div className='row'>
            
                <div className='col-12 col-lg-3 mt-3'>
                    <div className='ms-2'>
                       <img src={img2} alt="" />
                    </div>
                </div>
                <div className='col-12 col-lg-3 mt-3'>
                    <div className='ms-2'>
                       <img src={img3} alt="" />
                    </div>
                </div>
                <div className='col-12 col-lg-3 mt-3'>
                    <div className='ms-2'>
                       <img src={img4} alt="" />
                    </div>
                </div>
                <div className='col-12 col-lg-3 mt-3'>
                    <div className='ms-2'>
                       <img src={img5} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default IconBlog;