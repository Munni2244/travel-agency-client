import React from 'react';
import img1 from '../../../images/shop-img-12-1-300x251.jpg';
import img2 from '../../../images/shop-img-13-1-300x251.jpg';
import img4 from '../../../images/shop-img-14-1.jpg';
import img3 from '../../../images/shop-img-10-1-300x251.jpg';
import img5 from '../../../images/shop-img-11w-300x251.jpg';
import './TravelItem.css'
const TravelItem = () => {
    return (
        <div className='item'>
          
        <div className='container mt-5 pt-5 '>
            <div className='row'>
        
            <div className='col-12 col-lg-2 mt-3'>
                <div className='ms-2'>
                   <img width="100%" height="120px" src={img2} alt="" />
                </div>
            </div>
            <div className='col-12 col-lg-3 mt-3'>
                <div className='ms-5'>
                   <img width="75%" height="120px" src={img1} alt="" />
                </div>
            </div>
            <div className='col-12 col-lg-2 mt-3'>
                <div className=''>
                   <img width="100%" height="120px" src={img4} alt="" />
                </div>
            </div>
            <div className='col-12 col-lg-3 mt-3'>
                <div className='ms-5'>
                   <img width="75%" height="120px" src={img5} alt="" />
                </div>
            </div>
            <div className='col-12 col-lg-2 mt-3'>
                <div className='ms-2'>
                   <img width="100%" height="120px" src={img3} alt="" />
                </div>
            </div>
            </div>
        </div>
        <div className='bn1'>

</div>
    </div>
    );
};

export default TravelItem;