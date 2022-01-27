import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashBoard.css'
import pp from '../../../images/user.png';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../HomeComponent/Home/Footer/Footer';
const DashBoard = () => {
    const {user, admin, logOut}=useAuth();
    return (
        <div>


            <div style={{ backgroundColor: 'hsl(150, 35%, 89%)'}} className=' text-dark  d-flex justify-content-end align-items-center p-2'>
              
                <Link to="/">
                    <button onClick={logOut} style={{ border: '1px solid black', borderRadius: '20px', height: '40px' }} className='btn mx-3 text-dark'><i className="fas fa-sign-out-alt me-2 text-dark"></i> LogOut</button>
                </Link>
            </div>

            <div className='row'>

                <div className='col-12 col-lg-3 col-md-3 shadow-lg list'>
                    <nav className="navbar navbar-expand-lg dashboard ">

                        <div className="container mt-3">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav  mb-2 mb-lg-0 d-block">

                                    <li className="nav-item">
                                      {user.photoURL?  <img src={user?.photoURL} width="150px" height="150px" className='rounded-circle' alt="" /> :
                                      <img src={pp} width="150px" height="150px" className='rounded-circle' alt="" />
                                      }
                                       
                                        <h4 className='fw-bold mb-4'>{user?.displayName }</h4>
                                    </li>

                                   
                                    <li className="nav-item">
                                        <Link to="/"><i className="fas fa-home"></i> Go Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="myBlog"><i class="fas fa-luggage-cart"></i> My Blog</Link>
                                    </li>

                        
                                  {admin &&  <div>
                                      <li className="nav-item">
                                        <Link to="postBlog"><i className="fas fa-shopping-basket"></i> Post Blog </Link>            </li>
                                    <li className="nav-item">
                                        <Link to="managePost"><i className="fab fa-product-hunt"></i> ManagePost</Link>            </li>
                                    <li className="nav-item">
                                        <Link to="addAdmin"><i className="fab fa-product-hunt"></i>Create Admin</Link>          </li>
                                  </div>
                                  }

                                </ul>

                            </div>
                        </div>

                    </nav>


                </div>

                <div className='col-12 col-lg-9 col-md-9 '>

                    <Outlet />


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;