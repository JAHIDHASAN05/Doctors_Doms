import React, { useContext } from 'react';

import img from './../../assets/images/login/login.svg'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const  { SignIn}= useContext(AuthContext)
     const location= useLocation()
     const path= location.state?.from?.pathname || '/';
     const navigate= useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        const form = e.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password)
        SignIn(email, password)
            .then(result=>{
                const loggedUser= result.user;
                console.log(loggedUser)



             
                navigate(path , {replace :true})
                // const loggesUserEmail={
                //     email : loggedUser.email
                // }

                // fetch(`http://localhost:5000/jwt`,{
                //     method : 'POST',
                //     headers:{
                //         'content-type' : 'application/json'
                //     },
                //     body :JSON.stringify(loggesUserEmail)
                // })
                // .then(res=> res.json())
                // .then(data=>{ console.log(data,'jwt res')
                //   localStorage.setItem('Auth_Token' , data.token)
                //   navigate(path , {replace : true})
            // })
            })
            .catch(error=>{
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img src={img} className='mr-7' alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className='text-5xl font-bold text-center'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" name="" value={'Login'} id="" />
                        </div>
                    </form>
                        <p className='text-center mb-5'>New To Doctor's Doom?  <Link to={'/register'} className='text-blue-500'>Register</Link></p>
                <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;