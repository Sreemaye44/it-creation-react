import React from 'react';
import {FaEye, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const userId = form.userId.value;
        const password = form.password.value;
        console.log(userId, password)
    }
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='font-bold text-3xl mt-10'>IT <span className='text-violet-500'>CReation</span></h1>
            <div>
                <h2 className='font-bold text-xl mt-10 mb-5'>HELLO SIGN IN</h2>
                <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User ID</span>
          </label>
                        <div className='relative flex'>
                        <input type="text" name="userId" placeholder="Emp User Id" className="input input-bordered w-full" required />
                            <div className='absolute top-1/2 transform -translate-y-1/2 right-3 text-slate-600'><FaUserCircle></FaUserCircle></div>
                       </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='relative flex'>
                        <input type="password" name="password" placeholder="********" className="input input-bordered w-full" required />
                            <div className='absolute top-1/2 transform -translate-y-1/2 right-3 text-slate-600'><FaEye></FaEye></div>
                       </div>
          <div class="my-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <label class="block" for="remember">
                                        <input class="ml-2 leading-tight" type="checkbox" id="remember" name="remember"/>
                                        <span class="text-sm mx-2 ">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <a class="text-sm text-violet-500" href="#password-request">
                                        forgot password
                                    </a>
                                </div>
                            </div>
                        </div>
        </div>
        <div className="form-control mt-6">
                        <Link to='/home'><input className='btn bg-violet-500 border-none mb-5 w-full' type="submit" value="Sign In" /></Link>
                        <div className='mt-10 text-sm font-semibold'>
                            Don't have an account? <span className='text-violet-500'>Sign up</span>
                        </div>
        
        </div>
        </form>
            </div>
        </div>
    );
};

export default Login;