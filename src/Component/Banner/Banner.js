import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-start text-neutral-content">
                        <div className="max-w-md computer">
                            <h1 className="mb-5 text-4xl font-bold">Computer Engineering</h1>
                            <p className="mb-5">142,765 Computer Engineers follow this </p>   
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;