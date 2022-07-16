import React from "react";
import useServices from "../../Hooks/useService";

const AddService = () => {
  const [services] = useServices();
  // console.log(services);
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
           services.map( service =><li>
            {service.name} <button> X </button> 
            </li> )

        }
           
        </ul>
    </div>
  );
};

export default AddService;
/* 

const handleAddService = e => {
  e.preventDefault();
  const name = e.target.name.value;
  const description = e.target.description.value;
  const pic = e.target.pic.value;
  const newService = {name, description, pic};

  console.log(newService);

  fetch('http://localhost:5000/service', {
    method: 'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify(service)
})

fetch('http://localhost:5000/service', {
  method:'POST',
  headers:{
    'Content-type': 'application/json'
  }
  body: JSON.stringify(service)
})

fetch('http://localhost:5000/service',{
  method: 'POST',
  headers:{
    'Content-type': 'application/json'
  }
  body: JSON.stringify(service);
})

fetch('http://localhost:5000/service',{
  method: "POST",
  headers:{
    'Content-type': 'application/json'
  },
  body:JSON.stringify(service);
})

}

 */