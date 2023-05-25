import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provaider/AuthProvider';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/106680-login-and-sign-up.json";


const Login = () => {

    const [error, seterror] = useState('')

    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        seterror('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate(from, { replace: true })
            })
            .catch(error =>{
                console.log(error);
                seterror(error.message)
            } )
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-10 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500" className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500" className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors 
                        <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                        <p className=' text-red-600'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;