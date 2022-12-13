import React from 'react';
import './SignIn.css'
import ok from '../ok.jpg'
const SignIn = () => {
    return (
        <div>
            <div className='box'>
            <div className='first'>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nihil sign up now</h2>
                </div>
                <div className='main mt-8'>
                    <div>
                        <h1 className='mb-5 text-2xl font-bold  '>Sign In</h1>

                        <div className=' in flex-col lg:flex-row-reverse'>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        <input type="text" placeholder="password" className="input input-bordered" />
                       
                        <button className="btn btn-primary w-72 mt-9 mb-9">Sign In</button>

                        <button className="btn btn-outline btn-primary w-72 mb-4">Sign in with Facebook</button>
                        <button className="btn btn-outline btn-primary w-72">Sign in with Google</button>
                        <br />
                        <a href="">Forgot Password ?</a>
                        </div>
                     
                    </div>
                    <div className=''>
                       <p>Don't have an account yet ? <a href="/create" className='create'> Create new for free!</a></p>
                       <img className='h-96 w-80' src={ok} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignIn;