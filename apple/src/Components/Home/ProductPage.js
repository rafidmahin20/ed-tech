import React, { useEffect, useState } from 'react';
import useService from '../Hooks/useService';
import Service from './Service';

const ProductPage = () => {
    // const [services] = useService()
    const [service, setService] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        fetch('https://serene-lake-66986.herokuapp.com/serviceCollection')
        .then(res => res.json())
        .then(data => {
            setService(data)
            setLoading(false)
        });
    }, [])

    return (
        <div>
            <div className="relative min-h-screen flex flex-col items-center justify-center ">
                <h2 className="text-4xl font-bold sm:text-6xl mt-10">
                    Products
                </h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 mb-20 md:gap-3 sm:gap-y-3'>
                    {
                        service.map(s => <Service
                            
                            s={s} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default ProductPage;