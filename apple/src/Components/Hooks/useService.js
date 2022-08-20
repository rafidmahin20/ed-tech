import { useEffect, useState } from 'react';

const useService = () => {
    const [service, setService] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        fetch('https://serene-lake-66986.herokuapp.com/serviceCollection')
        .then(res => res.json())
        .then(data => {
            setService(data)
            setLoading(false)
        });
    }, [service])
    return [service, setService, isLoading];
};

export default useService;