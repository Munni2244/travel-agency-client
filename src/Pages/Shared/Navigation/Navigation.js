import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const {user, logOut}= useAuth();
    return (
        <div>
            <nav style={{backgroundColor:'hsl(150, 15%, 96%)'}} className="navbar navbar-expand-lg navbar-light ">

                <div className="container ">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-3  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h6 >Hotine:<span style={{ color: 'black' }}>+88454-359-343</span></h6>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-5 mb-2 mb-lg-0">

                                <div className='d-flex navigation-bar'>
                                    <li className="nav-item active ">
                                        <i class="fab fa-facebook"></i>
                                    </li>
                                    <li className="nav-item active ">
                                        <i class="fab fa-instagram-square"></i>                   </li>
                                    <li className="nav-item active ">
                                    <i class="fab fa-twitter"></i>                                    </li>
                                    <li className="nav-item active ">
                                    <i class="fab fa-google-plus"></i>                                    </li>

                                </div>

                            </ul>
                        </form>
                    </div>
                </div>

            </nav>
            {/* 2nd nav */}
            <div>
            <nav className="navbar navbar-expand-lg ">

                <div className="container mt-3">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-1 mb-2 mb-lg-0 navigation-banner ">
                            <li className="nav-item">
                                <h3 style={{ color: '#8ef6e4', fontWeight: 'bold' }} >Travel<span style={{ color: 'black' }}>Agency</span></h3>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active fw-bold ">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addBlog" className="nav-link active fw-bold ">Add Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/compare" className="nav-link active fw-bold ">Compare Blog</Link>
                            </li>
                     
                        </ul>
                        <div className="">
                                <ul className="navbar-nav  mb-2 mb-lg-0">

                                    {
                                        user?.email ? <div className='d-flex navigation-banner'>

                                            <li className="nav-item active ">
                                                <Link to="/dashboard" className="nav-link active fw-bold ">Dashboard</Link>
                                            </li>

                                          
                                                <button className='nav-link btn text-dark fw-bold'>{user?.displayName}</button>
                                        
                                            <button style={{ border: '1px solid blue', borderRadius: '20px', height: '40px', backgroundColor:'#8ef6e4' }} onClick={logOut} className='btn'><i className="fas fa-sign-out-alt me-2"></i> LogOut</button>

                                        
                                         

                                        </div>
                                             : 
                                            <div className='d-flex navigation-banner '>

                                                <li className="nav-item active ">
                                                    <Link to="/login" className="nav-link active fw-bold ">Login</Link>
                                                </li>
                                                <li className="nav-item active ">
                                                    <Link to="/register" className="nav-link active fw-bold ">Register</Link>
                                                </li>

                                              
                                            </div>
                                    }

                                </ul>
                            </div>

                    </div>
                </div>

            </nav>
        </div>
            
        </div>
    );
};

export default Navigation;