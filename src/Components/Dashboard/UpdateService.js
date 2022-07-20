import React from 'react';
import useServices from '../../Hooks/useService';

const UpdateService = () => {

    const [services, setServices] = useServices();

    const handleUpdateService = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const pic = event.target.pic.value;
        const service = { name, description, pic };
        console.log(service);
        
        // sent data to server
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            event.target.reset();
        });
    
      };
    return (
        <div>
      <br />
      <form onSubmit={handleUpdateService}>
        {/*
        <input type="text" name="name" placeholder="service name" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="pic" placeholder="pic link" />
        <input type="submit" value="add service" /> 
        */}

        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="pic"
          placeholder="pic"
          className="input input-bordered w-full max-w-xs"
        />
        <input type="submit" value="Update service" className="btn" />
      </form>


    </div>
    );
};

export default UpdateService;