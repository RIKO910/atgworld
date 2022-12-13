import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <h1 className='text-2xl'><span className='atg'>ATG</span>.W<span className='o'>O</span>RLD</h1>
                </div>
                <div className="navbar-center">
                    <div className=" search ">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </span>
                        <input type="text" placeholder="Search for your favorite groups in ATG" className="" />
                    </div>

                </div>
                <div className="navbar-end">
                    <a href="">Create account.<span className='it'>It's free!</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;