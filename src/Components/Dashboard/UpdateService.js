import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateService = () => {

  const { id } = useParams();

  const [updateService, setUpdateService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateService(data))
  }, []);

  const handleUpdateService = (event) => {

    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const pic = event.target.pic.value;
    const updatedService = { name, description, pic };
    console.log(updatedService);
    
    // sent data to server
    const url = `http://localhost:5000/service/${id}`;
    fetch(url, {
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedService)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        event.target.reset();
    });

  };

  return (
    <div>
      <h2 className='text-5xl' > Update Service : {updateService.name} </h2>
      <form onSubmit={handleUpdateService}>
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