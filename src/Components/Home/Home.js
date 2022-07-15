import React, { useEffect, useState } from 'react';

const Home = () => {
    // get data from mongodb and display to UI
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, []); 
    console.log(services);
    return (
        <div>
            
            <h2 className='text-3xl' > Home page</h2>
            <h2 className='text-3xl' > Total Services {services.length} </h2>
        </div>
    );
};

export default Home;