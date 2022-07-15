import React from "react";

const AddService = () => {
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
          class="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          class="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="pic"
          placeholder="pic"
          class="input input-bordered w-full max-w-xs"
        />
        <input type="submit" value="Add service" className="btn" />
      </form>
    </div>
  );
};

export default AddService;
