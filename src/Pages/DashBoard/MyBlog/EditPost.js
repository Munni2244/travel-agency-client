import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navigation from '../../Shared/Navigation/Navigation';
import './MyBlog.css'
const EditPost = () => {
    const {id}= useParams();
    const [editPost, setEditPost]=useState({});
    const { register, handleSubmit } = useForm();

// console.log(id);

    useEffect(()=>{
       fetch(`http://localhost:5000/details/${id}`)
       .then(res=> res.json())
       .then(data => setEditPost(data))
    },[editPost])

    //edit information
    const onSubmit = data => {
      
        fetch(`http://localhost:5000/blog/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Update Successfully!'
                    )

                }

                console.log(data);
            })
    };
    return (
        <div>
           <div className='update-banner'>
            <Navigation></Navigation>
           </div>
            <div className='text-center mt-5 '>
                <h1>Please Update <span style={{color:'#5F9EA0'}}>Your Information</span></h1>

                </div>
           <div >
           <div  className='text-center mt-5'>
           <form onSubmit={handleSubmit(onSubmit)}>
                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' {...register("userName", { required: true })} defaultValue={editPost?.userName} /> <br />
                               
                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' {...register("email", { required: true })} defaultValue={editPost?.email} /> <br />
                            

                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' {...register("name", { required: true })} defaultValue={editPost?.name} /> <br />
                               
                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="date" {...register("date", { required: true })} defaultValue={editPost?.date} /> <br />
                              
                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="time" {...register("time", { required: true })} defaultValue={editPost?.time} /> <br />
                               

                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="text" {...register("location", { required: true })} defaultValue={editPost?.location} /> <br />
                               

                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="text" {...register("desc", { required: true })} defaultValue={editPost?.desc} /> <br />
                               

                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  '{...register("img", { required: true })} defaultValue={editPost?.img} /> <br />
                               

                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="number" {...register("rating", { required: true, min: 1, max: 5 })} defaultValue={editPost?.rating} /> <br />

                                

                                <input style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  ' type="number" {...register("cost", { required: true })} defaultValue={editPost?.cost} /> <br />


                                {/* category */}
                                <select style={{ width: '60%', border: 'none', borderBottom: '2px solid #8ef6e4' }} className='field p-2  '  {...register("category")} >
                                    <option value={editPost?.category}>{editPost?.category}</option>
                                    <option value="Camping">Camping</option>
                                    <option value="Cities">Cities</option>
                                    <option value="Trips">Trips</option>
                                    <option value="Vacation">Vacation</option>
                                    <option value="Holiday">Holiday</option>
                                    <option value="Advanture">Advanture</option>
                                </select> <br />

                                <input style={{ backgroundColor: '#8ef6e4' }} className=' btn  px-5 py-2' type="submit" />

                            </form>
            </div>
           </div>
        </div>
    );
};

export default EditPost;