import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import useServices from "../../Hooks/useService";

const AddService = () => {
  const [services, setServices] = useServices();
  // console.log(services);
  // start update

  // end update service
  const handleAddService = (event) => {

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

  const handleDeleteService = id =>{

    const proceed = window.confirm('are you sure you want to delete?');
    if(proceed){
      console.log('deleting', id);
      const url = `http://localhost:5000/service/${id}`;
      // const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0 ){
          console.log(data);
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        }
      })
    }
  }
  return (
    <div>
      <br />
      <form onSubmit={handleAddService}>
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
        <input type="submit" value="Add service" className="btn" />
      </form>
      Total Service {services.length}
        <ul>
        {
           services.map( service =><li
           key={service.id}
           >
            
            {service.name} 
            <button className="btn btn-outline" onClick={()=>handleDeleteService(service._id)} > X </button> 
          
            <Link to={`/updateservice/${service._id}`} > <button className="btn btn-outline" >Update</button> </Link>
            
            </li> )

        }
           
        </ul>
    </div>
  );
};

export default AddService;
