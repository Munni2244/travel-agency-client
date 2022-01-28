import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import user from '../../../images/blog-post-img-01-1024x681.jpg';

const ManagePost = () => {
    const {user}=useAuth();
    const [managePost, setManagePost] = useState([]);
    
    useEffect(() => {
        fetch('https://desolate-escarpment-83667.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data =>{ 
                setManagePost(data);
                
            })

    }, [managePost])

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
                fetch(`https://desolate-escarpment-83667.herokuapp.com/blogs/${id}`, {
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

    ///update Booking
    const ApprovePost = (id) => {
        fetch(`https://desolate-escarpment-83667.herokuapp.com/approvePost/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'The Blog Is Approve Successfully',

                    )

                }

                console.log(data);
            })

    }


    return (
        <div>
            <div className='container mt-5'>
                <div>
                    <img width="100px" height="100px" className='rounded-circle' src={user?.photoURL} alt="" />
                   


                </div>
                <div className='row '>
                    {
                        managePost?.map(allPost =>
                            <div key={allPost._id} className=' col-12 '>
                                 <h4 className='text-secondary fw-bold mt-3'> Posted By {allPost?.userName}</h4>
                                <div className='d-flex '>

                                    <h6 className='text-secondary mt-2'> {allPost?.date}</h6>
                                    <p className='text-secondary ms-4 mt-2'>{allPost?.time}</p>
                                </div>
                                <div className='row'>

                                    <div className='col-12 col-lg-8  mt-3'>
                                        <img width="100%" height="200px" src={allPost?.img} alt="" />
                                        <h1 className='fw-bold '>{allPost?.name}</h1>

                                    </div>

                                    <div className='col-12 col-lg-4 '>
                                        <div>

                                            <div className='d-flex'>
                                            {allPost?.status== "Approve"? <h5 className='mt-1 text-info fw-bold'>Approved</h5> :  <button onClick={() => ApprovePost(allPost?._id)} type="submit" style={{ width: '60%', height: '50px', backgroundColor: '#b2faee' }} className=" rounded-pill mb-3  text-dark fw-bold ">  </button>} 
                                             

                                                <button onClick={() => RemoveBlog(allPost?._id)} type="submit" style={{ width: '60%', height: '50px', backgroundColor: '' }} className=" rounded-pill mb-3 ms-3 text-light fw-bold bg-danger">Delete Post</button>
                                            </div>
                                            <div className=''>
                                                <h1 className="mb-4 text-center text-secondary fw-bold">Location Spot </h1>
                                                <h5>{allPost?.location}</h5>
                                                <h6>Cost: {allPost.cost}</h6>

                                                <Link to={`/details/${allPost._id}`}>
                                                    <h6 className='text-info'>SeeMore...</h6>
                                                </Link>


                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>
             
            </div>
        </div>
    );
};

export default ManagePost;