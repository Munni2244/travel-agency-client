import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {user,RegisterUser,loading}= useAuth();
    const [RegisterData, setRegisterData]=useState({});
  const navigate= useNavigate();

      const HandleOnChanges=(e)=>{
          const field= e.target.name;
          const value= e.target.value;
         const newLoginData= {...RegisterData};
         newLoginData[field]=value;
         console.log(newLoginData);
         setRegisterData(newLoginData)
      }
      
          const HandleForm=(e)=>{
              e.preventDefault();
            if(RegisterData.password !== RegisterData.password2){
    
              alert("password don't macthed")
              return
            }
            RegisterUser(RegisterData.email, RegisterData.password, RegisterData.name, navigate)
        //    alert('Refister success');
          }
  
      return (
          <div  className="row user">
              
          <div style={{marginTop:'100px'}} className="col-12 col-lg-12 text-center">
          <h1 className="mb-4">Please Register <i className="fas fa-sign-in-alt text-warning"></i></h1>
              <form onSubmit={HandleForm} >
                  <div >
                      <input onBlur={HandleOnChanges} name="name" type="text"  id="exampleInputName1" placeholder="Name" style={{ width: '35%' }} className="mb-3 p-2 rounded-pill field"/>
                  </div>
  
                  <div >
                      <input onBlur={HandleOnChanges} name="email" type="email" style={{ width: '35%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1"  placeholder="Email" />
                  </div>
  
                  <div >
                      <input onBlur={HandleOnChanges} name="password" type="password" id="exampleInputPassword1" placeholder="Password" style={{ width: '35%' }} className="mb-3  rounded-pill  p-2 field" />
                  </div>
                  <div>
                      <input onBlur={HandleOnChanges} name="password2" type="password" style={{ width: '35%' }} className=" p-2 field  rounded-pill mb-3" placeholder="Confirm Password" />
                  </div>
  
  
                  <button type="submit" style={{ width: '35%' }} className=" p-2   rounded-pill mb-3">Submit</button>
                  <div>
                  <Link style={{color:'red'}} to="/login"> Please Login!</Link>
                  </div>
              </form>
          </div>
      </div>
      );
};

export default Register;