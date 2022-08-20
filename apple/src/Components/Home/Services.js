import React from 'react';
import useService from '../Hooks/useService';
import Loading from '../Loading';
import Service from './Service';

const Services = () => {
    const [service,setService,isLoading] = useService();
    return (
        <>
        {
        isLoading && <Loading />}
        
            <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-red-200 to-red-200/50">
            <h1 className="text-center text-4xl font-sans font-bold text-red-700 pt-10 pb-10">
             Products
            </h1>
                <div className="lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto mt-11">
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 mb-20 md:gap-3 sm:gap-y-3 lg:px-10'>
                     {
                         service.slice(0, 3).map(service => <Service key={service._id} service={service}/>)
                     }
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Services;