import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.jpg'
const PostAdminBlog = () => {
    const {user}= useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {
        data.status = 'Approve';
        fetch('https://desolate-escarpment-83667.herokuapp.com/Blog', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Your Blog Added Successfully!',

                    )

                }

                console.log(data);
            })
    }

    return (
        <div>
         
            <div style={{ marginTop: '60px' }} className='container'>
                <h1 className='text-center'>Please Add A <span style={{ color: '#8ef6e4' }}>Blog</span> </h1>
                <div className='row'>

                    <div className='col-12 col-lg-6 col-md-6 mt-5'>
                        <div className='text-center'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' {...register("userName", { required: true })} defaultValue={user.displayName} /> <br />
                                {/* error */}
                                {errors.userName && <span className='text-danger'>Name field is required</span>} <br />


                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' {...register("email", { required: true })} defaultValue={user.email} /> <br />
                                {/* error */}
                                {errors.email && <span className='text-danger'>Email field is required</span>} <br />

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' {...register("name", { required: true })} placeholder='Spot Name ' /> <br />
                                 {/* error */}
                                 {errors.userName && <span className='text-danger'>Name field is required</span>} <br />
                                {/* error */}

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="date" {...register("date", { required: true })} placeholder=' Date' /> <br />
                                {/* error */}
                                {errors.date && <span className='text-danger'>This field is required</span>} <br />

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="time" {...register("time", { required: true })} placeholder=' Date' /> <br />
                                {/* error */}
                                {errors.time && <span className='text-danger'>This field is required</span>} <br />

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="text" {...register("location", { required: true })} placeholder=' Spot Location' /> <br />
                                {/* error */}
                                {errors.location && <span className='text-danger'>This field is required</span>} <br />

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="text" {...register("desc", { required: true })} placeholder='Travel Article description' /> <br />
                                {/* error */}
                                {errors.desc && <span className='text-danger'>This field is required</span>} <br />

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  '{...register("img", { required: true })} placeholder=' Image url' /> <br />
                                {/* error */}
                                {errors.img && <span className='text-danger'>Image field is required</span>} <br />

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="number" {...register("rating", { required: true, min: 1, max: 5 })} placeholder=' Rating (1 to 5)' /> <br />

                                {/* error */}
                                {errors.rating && <span className='text-danger'>Rating field is required</span>} <br />

                                <input style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="number" {...register("cost", { required: true })} placeholder='Travel Cost' /> <br />

                                {/* error */}
                                {errors.cost && <span className='text-danger'>Cost field is required</span>} <br />

                                {/* category */}
                                <select style={{ width: '90%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' {...register("category")}>
                                    <option value="">Select category...</option>
                                    <option value="Camping">Camping</option>
                                    <option value="Cities">Cities</option>
                                    <option value="Trips">Trips</option>
                                    <option value="Vacation">Vacation</option>
                                    <option value="Holiday">Holiday</option>
                                    <option value="Advanture">Advanture</option>
                                </select>

                                <input style={{ backgroundColor: '#8ef6e4' }} className=' btn  px-5 py-2' type="submit" />

                            </form>
                        </div>

                    </div>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className='text-center mt-5'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostAdminBlog;