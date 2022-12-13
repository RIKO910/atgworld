import React from 'react';

const Nav = () => {
    return (
        <div className='ml-36 mr-36 mt-7'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className="tabs">
                        <a className="tab tab-bordered tab-active">All Posts(32)</a>
                        <a className="tab tab-bordered">Article</a>
                        <a className="tab tab-bordered">Events</a>
                        <a className="tab tab-bordered">Education</a>

                        <a className="tab tab-bordered">Job</a>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">

                        <li tabIndex={0}>
                            <a>
                                Write a Post
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <button className="btn btn-active btn-primary"><a href="/sign">Join Group</a></button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;