import React from 'react';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='banner' style={{
            backgroundImage: "url(https://i.ibb.co/TMkFKRK/sergey-zolkin-Ue-Y8a-TI6d0-unsplash.png)",
            backgroundSize: "cover",
            height: '500px'
        }}>
            <div className='banner-0verlay bg-opacity-20'></div>
            <div className='lg:mr-auto lg:ml-24 pt-10'>
                <div className="banner-content text-center  text-white p-5 pt-20">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase text-primary">Macbook Pro</h1>
                        <p className='text-xl font-normal'>Macbook
                            Powered By M1 Chip. <br /> Your Daily Driver</p>
                        <p className="mb-5"></p>
                        <Link to='/service'><button className="btn bg-red-600 rounded-full p-3">Shop Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;