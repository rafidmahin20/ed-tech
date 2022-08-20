import React from 'react';
import useService from '../Hooks/useService';

const Service = ({serviceWork}) => {
    const { _id, name, picture, details, price } = serviceWork ;
    
    const [isLoading] = useService()
    return (
        <div className='mt-5'>
            <div className="lg:mx-auto flex lg:w-96 flex-col justify-center  bg-white rounded-2xl shadow-xl hover:scale-105 ease-in duration-300 hover:bg-slate-300">
                <img src={picture} className="rounded-t-2xl object-cover" alt="" />
                <div className="p-4">
                    <h1 className="text-3xl font-medium  pb-2">{name}</h1>
                    <small className="text-xl">${price}</small>
                    <p className="text-sm tracking-tight text-slate-600 leading-6 py-2">{details}</p>
                    <br />
                    <br />
                    <button type="button" className="text-white bg-black hover:bg-white hover:text-black border hover:border-black rounded-lg text-sm px-12 py-2 mr-2 text-centermb-2 mx-auto mt-3 font-bold">Buy Now</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;