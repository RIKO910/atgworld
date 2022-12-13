import React from 'react';
import ok from '../ok.jpg'
const CreateAccount = () => {
    return (
        <div>
             <div className='box'>
            <div className='first'>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nihil sign up now</h2>
                </div>
                <div className='main mt-8'>
                    <div>
                        <h1 className='mb-5 text-2xl font-bold  '>Create Account</h1>
                        <div className=' in flex-col lg:flex-row-reverse'>
                        <input type="text" placeholder="First Name" className="input input-bordered" />
                        <input type="text" placeholder="Last Name" className="input input-bordered" />
                        <input type="text" placeholder="Email" className="input input-bordered" />
                        <input type="text" placeholder="Password" className="input input-bordered" />
                        <input type="text" placeholder="Confirm Password" className="input input-bordered" />
                       
                        <button className="btn btn-primary w-72 mt-9 mb-9">Sign In</button>

                        <button className="btn btn-outline btn-primary w-72 mb-4">Sign in with Facebook</button>
                        <button className="btn btn-outline btn-primary w-72">Sign in with Google</button>
                        </div>
                     
                    </div>
                    <div className=''>
                       <p>Already have an account? <a href="/sign" className='create font-bold'> Sign In</a></p>
                       <img className='h-96 w-80' src={ok} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CreateAccount;