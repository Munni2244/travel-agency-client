import React, { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Footer from '../HomeComponent/Home/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const CompairBlog = () => {
    const [topBlogs, setTopBlogs]=useState([])
     useEffect(() => {
        fetch('https://desolate-escarpment-83667.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setTopBlogs(data))

    }, [topBlogs])

    return (
        <div >
            <Navigation></Navigation>
             <div className='container mt-5 '>
                 <div className='text-center text-secondary mb-5'>
                     <h1 className='fw-bold'> Comaprision</h1>
                     <p>All Blog Here For Your Comparision . <br />
                     Please Take A Moment To see All Blog You May Like
                     </p>
                 </div>
             <div className='row'>
                            {topBlogs?.map(blog =>
                                <div key={blog._id} className='col-12 col-lg-6 mt-4'>
                                    <Link style={{textDecoration:'none'}} to={`/details/${blog?._id}`}>
                                        <div className='d-flex'>
                                            <img width="30%" height="80px" src={blog.img} alt="" />
                                            <div>
                                                <h5 className='fw-bold text-secondary ms-3'>{blog.name}</h5>
                                                <h6  className='text-secondary ms-3 '>${blog?.cost}</h6>
                                                <Rating
                                                    className="text-warning mt-2 ms-3"
                                                    initialRating={blog?.rating}
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    readonly
                                                />
                                            
                                            </div>
                                        </div>

                                    </Link>

                                </div>
                            )}


                        </div>
             </div>
             <Footer/>
        </div>
    );
};

export default CompairBlog;