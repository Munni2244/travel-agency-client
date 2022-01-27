import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import  './Login.css'

const Login = () => {
const {SignWithGoogle, loginUser}= useAuth();
const [login, setLogin]=useState({});

const location = useLocation();
    const navigate = useNavigate();

    const handleField = (e) => {
      const value = e.target.value;
      const field = e.target.name;
      const newValue = { ...login };
      newValue[field] = value;
      console.log(newValue);
      setLogin(newValue);
  }
    //
    const handleSubmit = (e) => {
       
      loginUser(login.email, login.password, location, navigate);
       alert('login success');
      e.preventDefault();

  }

  const SignInGoogle=() =>{
    SignWithGoogle(location, navigate)


  }
    return (
      <div className="d-flex justify-content-center login ">
            <div className="text-center mt-5 login-box ">
            <h1 className="mb-4">Please Login <i className="fas fa-sign-in-alt text-warning"></i></h1>

            <div  className="row user">
            
        <div style={{marginTop:'10px'}} className="col-12 col-lg-12 text-center">
            <form onSubmit={handleSubmit} >

                <div >
                    <input onBlur={handleField} name="email" type="email" style={{ width: '80%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1"  placeholder="Email" />
                </div>

                <div >
                    <input onBlur={handleField} name="password" type="password" id="exampleInputPassword1" placeholder="Password" style={{ width: '80%' }} className="mb-3  rounded-pill  p-2 field" />
                </div> <br />
                <button type="submit" style={{ width: '35%' }} className=" p-2   rounded-pill mb-3">Submit</button>
                <div>
                <Link style={{color:'red'}} to="/register">Are You New User? Please Register!</Link>
                </div>
            </form>
        </div>
        </div>
        <button className='fw-bold ' onClick={SignInGoogle} ><i className="fab fa-google-plus-g text-primary fw-bold"></i> Sign In With Google</button>
    </div>
      </div>
    );
};

export default Login;
