import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import user from '../../../images/blog-post-img-01-1024x681.jpg';

const ManagePost = () => {
    const {user}=useAuth();
    const [managePost, setManagePost] = useState([]);
    // const [page, setPage] = useState(0);
    // const [pageCount, setPageCount] = useState(0);

    // const size = 10;

    useEffect(() => {
        // fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data =>{ 
                setManagePost(data);
                // const count = data.count;
                // const pageNumber = Math.ceil(count / size);
                // setPageCount(pageNumber);
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

    ///update Booking
    const ApprovePost = (id) => {
        fetch(`http://localhost:5000/approvePost/${id}`, {
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
                    <h4 className='text-secondary fw-bold'> Posted By {user.displayName}</h4>


                </div>
                <div className='row '>
                    {
                        managePost?.map(allPost =>
                            <div className=' col-12 '>
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

                                                <button onClick={() => ApprovePost(allPost?._id)} type="submit" style={{ width: '60%', height: '50px', backgroundColor: '#b2faee' }} className=" rounded-pill mb-3  text-dark fw-bold ">Approve Post</button>

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
                {/* <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div> */}
            </div>
        </div>
    );
};

export default ManagePost;