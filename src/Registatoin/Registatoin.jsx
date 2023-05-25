import React, { useContext, useState } from 'react';
import img from '../images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provaider/AuthProvider';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/106680-login-and-sign-up.json";


const Registatoin = () => {

    const { createUser, updatUser } = useContext(AuthContext);
    const [error, seterror] = useState('')

    const handleSignUp = event => {
        seterror('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photo)

        createUser(email, password)
            .then(async result => {
                const user = result.user;
                console.log(user)
                await updatUser(name, photo);
             
             event.target.reset();
             
            })
            .catch(error =>{
                console.log(error)
                seterror(error.message)
            }
                
            )

    }
    return (
        <div className='overflow-hidden'>
            <div className="hero min-h-screen bg-base-200 mb-10 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>
                <div data-aos="zoom-in-up" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form onSubmit={handleSignUp}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Regitatoin" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/login">login</Link> </p>
                        <p className=' text-red-600'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Registatoin;