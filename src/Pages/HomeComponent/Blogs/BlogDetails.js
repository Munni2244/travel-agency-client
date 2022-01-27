import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const BlogDetails = () => {
    // const {user}=useAuth();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [topBlogs, setTopBlogs] = useState([]);


    // get placeorders 
    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [details])

    //top rated blog
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setTopBlogs(data))

    }, [topBlogs])

    let allBlogs = topBlogs.filter(blog => blog.rating == 5)



    return (
        <div>
            <div className='detail-nav'>
                <Navigation></Navigation>
                <h1 style={{ color: '#8ef6e4' }} className='text-center fw-bold mt-5'>Blog Details</h1>

            </div>
            <div className='container mt-5'>
                <div className='row'>

                    <div className='col-12 col-lg-8 col-md-8  mt-3'>
                        <div>
                            <img width="100%" height="500px" src={details?.img} alt="" />

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6 className='text-secondary'> {details?.date}</h6>
                                    <p className='text-secondary'>{details?.time}</p>
                                </div>
                                <div style={{ fontStyle: 'italic' }} className="mb-4 text-center text-secondary fw-bold me-2">
                                   
                                    <h5>{details?.location}</h5>
                                    <h6>Cost:$ {details?.cost} rupies</h6>
                                </div>
                            </div>
                            <h1 style={{ fontStyle: 'italic' }} className='fw-bold '>{details?.name}</h1>

                            <p className='text-secondary fw-bold'>{details?.desc}.</p>

                            <h4 style={{ fontStyle: 'italic' }} className='mt-5 fw-bold'>Categories</h4>
                            <p className='text-secondary fw-bold'>{details.category}</p>
                        </div>


                    </div>





                    <div className='col-12 col-lg-4 col-md-4 '>
                        <h5 style={{ fontStyle: 'italic' }} className='fw-bold '>Top Blogs</h5>
                        <div className='row'>
                            {allBlogs?.map(blog =>
                                <div key={blog._id} className='col-12 mt-4'>
                                    <Link to={`/details/${blog?._id}`}>
                                        <div className='d-flex'>
                                            <img width="30%" height="80px" src={blog.img} alt="" />
                                            <div>
                                                <h5 className='fw-bold text-secondary ms-3'>{blog.name}</h5>

                                                <Rating
                                                    className="text-warning mt-2 ms-4"
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

                        <div style={{fontStyle:'italic'}} className='mt-5 ms-3 text-secondary '>
                            <h2 className=' fw-bold'>All Categories</h2>
                            <p>AdVanture</p>
                            <p>Trips</p>
                            <p>Holiday</p>
                            <p>Camping</p>
                            <p>Cities</p>
                            <p>Vacation</p>
                            
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default BlogDetails;