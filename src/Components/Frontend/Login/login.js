import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Login(props){
        return(
        <div>

       
       
            
            <div id="app"/>
                
                <nav id="top-navigation" 
                    className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-md-0" >
            <div className="container py-3">
                        <a className="navbar-brand heading-font position-relative" href="https://funden.app">
                    <img
                        src="/images/logo-white.png"
                        alt="Lancini"
                        width="50" />
                            </a>
                
                <button className="navbar-toggler bg-transparent" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        
                    <ul className="navbar-nav mb-0 ml-auto text-center">
                    {/* <!-- Authentication Links --> */}
                                    <li className="list-inline-item mb-2 mb-md-0">
                        <a className="btn btn-block btn-sm btn-outline-primary transition-3d-hover" href="https://funden.app/login">
                        Login
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn btn-block btn-sm btn-primary transition-3d-hover" href="https://funden.app/register">
                        Sign Up
                        </a>
                    </li>
                    
                    </ul>
        
        
                </div>
            </div>
        </nav>
        
                        <div id="toasts"></div>
        <div className="d-none">
        <div id="toastSuccess" className="toast" data-delay="5000" >
        <div className="toast-header alert-success">
            <img
                src="/images/logo-black.png"
                className="mr-auto"
                alt="Funden Icon Mark"
                width="50" />
            <small>Just Now</small>
            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="toast-body bg-white">
            <p></p>
        </div>
        </div>
        </div>
        
        <div class="view-more-btn text-center mt-80">
        
    </div>

                <div className="container space-2 space-lg-3">
                    <form method="POST" action="https://funden.app/login" className="js-validate w-md-75 w-lg-50 mx-md-auto"/>
                            <input type="hidden" name="_token" value="cl7T4rePCBPl7mGQzDXUuCxtUdnEcwQxwq9BlBeV"/>       
                        <div className="mb-5 mb-md-7">
                        <h1 className="h2 mb-0">Welcome  to Lancini </h1>
                        <p>Login to manage your account.</p>
                        </div>
                        {/* <!-- End Title -->

                        <!-- Form Group --> */}
                        <div className="js-form-message form-group">
                        <label className="input-label" for="signinSrEmail">Email address</label>
                        <input type="email" className="form-control" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required="" value=""/>
                                </div>
                        {/* <!-- End Form Group -->

                        <!-- Form Group --> */}
                        <div className="js-form-message form-group">
                        <label className="input-label" for="signinSrPassword">
                            <span className="d-flex justify-content-between align-items-center">
                            Password
                                            <a tabindex="999" className="link-underline text-capitalize font-weight-normal" href="https://funden.app/password/reset">Forgot Password?</a>
                                            </span>
                        </label>
                        <input type="password" className="form-control" name="password" id="signinSrPassword" placeholder="********" aria-label="********" required="" value=""/>
                                </div>
                        {/* <!-- End Form Group --> */}

                        <input type="hidden" name="remember" id="remember" checked/>

                        {/* <!-- Button --> */}
                        <div className="row align-items-center mb-5">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <span className="font-size-1 text-muted">Don't have an account?</span>
                            <a className="font-size-1 font-weight-bold" href=" https://funden.app/register">Signup</a>
                        </div>

                        <div className="col-sm-6 text-sm-right">
                            <button type="submit" className="btn btn-primary transition-3d-hover">Login</button>
                        </div>
                        </div>
                        {/* <!-- End Button --> */}
                    {/* </form> */}
                    </div>
    </div>
        )
    }
    export default Login;