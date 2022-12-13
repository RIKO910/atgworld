import React from 'react';
import { FaPen,FaLocationArrow } from 'react-icons/fa';
const Article = () => {
    return (
        <div className='main flex flex-col w-full lg:flex-row'>
            <div>
                <div className="card w-96 glass ml-36 w-3/6">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Article</h2>
                        <h1 className='mb-5 text-2xl font-bold '>What is famous brand had regular fonts? Meet RegulaBrand!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur voluptates natus, praesentium et nobis esse odit commodi aut ipsum?</p>
                        <div className="navbar bg-base-100">
                            <div className=" navbar-start">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/80/80/people" />
                                    </div>
                                </label>
                            </div>
                            <div className='navbar'>
                            </div>
                            <div className='navbar-end'>
                                <p> 1.4k views</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 glass ml-36 w-3/6">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Article</h2>
                        <h1 className='mb-5 text-2xl font-bold '>What is famous brand had regular fonts? Meet RegulaBrand!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur voluptates natus, praesentium et nobis esse odit commodi aut ipsum?</p>

                        <div className="navbar bg-base-100">
                            <div className=" navbar-start">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/80/80/people" />
                                    </div>
                                </label>
                            </div>
                            <div className='navbar'>


                            </div>
                            <div className='navbar-end'>
                                <p> 1.4k views</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 glass ml-36 w-3/6">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Article</h2>
                        <h1 className='mb-5 text-2xl font-bold '>What is famous brand had regular fonts? Meet RegulaBrand!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur voluptates natus, praesentium et nobis esse odit commodi aut ipsum?</p>

                        <div className="navbar bg-base-100">
                            <div className=" navbar-start">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/80/80/people" />
                                    </div>
                                </label>
                            </div>
                            <div className='navbar'>


                            </div>
                            <div className='navbar-end'>
                                <p> 1.4k views</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className='mr-36'>
                    <p className='font-bold flex  mt-11'> < FaLocationArrow/>  <span className='mr-44 ml-2 '> Nodia, India</span>        <FaPen/> </p>
                    <div className="divider"></div>
                    <br />
                    <p className='paragraph'>Your location will help us serve better and extend a personal experience</p>
                </div>

            </div>
        </div>
    );
};

export default Article;