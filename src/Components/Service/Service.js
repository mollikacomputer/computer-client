import React from "react";

const Service = (props) => {
    const { name, pic, description} = props.service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={pic} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
