import React from 'react';
import useServices from '../../Hooks/useService';
import Service from '../Service/Service';

const Home = () => {
    // get data from mongodb and display to UI
    const [services] = useServices([]);
    return (
        <div>
            
            <h2 className='text-3xl' > Home page</h2>
            <h2 className='text-3xl' > Total Services {services.length} </h2>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {
                    services.map( service => <Service 
                    key={service._id}
                    service = {service}
                    /> )
                }
            </div>
        </div>
    );
};

export default Home;