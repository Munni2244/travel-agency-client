import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const MyBlog = () => {
    const {user}=useAuth();
    const [myBlog, setMyBlog] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myBlog/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBlog(data))

    }, [myBlog])

    // RemoveBlog
    const RemoveBlog = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/blogs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )

                        }
                        else {
                            Swal.fire(
                                'Delete Cancel'
                            )

                        }
                    })
            }
        })

    }
    return (
        <div>
            <div className='container mt-5'>
                <div>


                </div>
                <div className='row '>

                    {
                        myBlog?.map(blog =>
                            <div className=' col-12 '>
                                <div className='row'>

                                    <div className='col-12 col-lg-8  mt-3'>
                                    <h1 className='fw-bold '>{blog?.name}</h1>

                                        <div className='d-flex '>

                                            <h6 className='text-secondary mt-2'> {blog?.date}</h6>
                                            <p className='text-secondary ms-4 mt-2'>{blog?.time}</p>
                                        </div>

                                        <img width="100%" height="200px" src={blog?.img} alt="" />

                                    </div>

                                    <div className='col-12 col-lg-4  mt-5'>
                                        <div>

                                            <div className='d-flex'>

                                                <button onClick={() => RemoveBlog(blog?._id)} type="submit" style={{ width: '60%', height: '50px', backgroundColor: '' }} className=" rounded-pill mb-3 ms-1 text-light fw-bold bg-danger">Delete Post</button>

                                             <Link to={`/editPost/${blog?._id}`}>
                                             <button type="submit" style={{ width: '100%', height: '50px', backgroundColor: '' }} className=" rounded-pill mb-3 ms-1 text-light fw-bold bg-info">Edit Post</button>
                                             </Link>
                                            </div>
                                            <div className=''>
                                                <h1 className="mb-4 text-center text-secondary fw-bold">Location Spot </h1>
                                                <h5>{blog?.location}</h5>
                                                <h6>Cost: {blog.cost}</h6>


                                                <h6 className='text-info'>Your Post Is {blog?.status}</h6>



                                            </div>

                                        </div>

                                    </div>
                                    <hr className='mt-5' />
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default MyBlog;