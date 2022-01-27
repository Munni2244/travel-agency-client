import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const size = 10;

    useEffect(() => {
                fetch(`https://desolate-escarpment-83667.herokuapp.com/blog?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs)
                const count = data.count;
                 const pageNumber = Math.ceil(count / size);
                 setPageCount(pageNumber);
               }
            )


    }, [page])

    let allBlogs = blogs.filter(blog => blog.status === 'Approve')

    return (
        <div style={{ marginTop: '80px' }}>
            <div className='container'>
                <div className='text-center m-2'>
                    <h1 className='fw-bold'> FEATURED <span style={{ color: '#8ef6e4' }}>BLOG </span>   POSTS</h1>
                    <p>As a solo traveler, it can be difficult to get that perfect, “Insta-worthy” travel photo. <br /> Since I started taking my travel Instagram account seriously, I</p>
                </div>


                <div className='row'>
                    {
                        allBlogs?.map(allBlog =>
                            <div key={allBlog._id} className='col-12 col-lg-6 col-md-6  mb-5'>
                                <div className='m-2 border blog-img'>
                                    <img src={allBlog?.img} width="100%" className='image' alt="" />
                                    <div className="blog-btn">
                                        <div className="text">
                                            <Link to={`/details/${allBlog?._id}`}> Read More</Link>
                                        </div>
                                    </div>

                                    <div className='p-2'>
                                        <div className='d-flex'>
                                            <h6 className='text-secondary mt-2'>{allBlog?.date}</h6>
                                            <h6 className='text-secondary mt-2 ms-3'>{allBlog?.time}</h6>
                                            <h6 className='text-secondary mt-2 ms-5 '>By, Alisha Malhotra</h6>
                                            <Rating
                                                className="text-warning mt-2 ms-4"
                                                initialRating={allBlog?.rating}
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                                readonly
                                            />
                                        </div>

                                        <h3 className='text-secondary fw-bold'>{allBlog?.name}</h3>

                                    </div>



                                </div>
                            </div>
                        )
                    }


                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;