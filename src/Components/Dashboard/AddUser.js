import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState();
    const handleAddUser = event =>{
        event.preventDefault();
        const userName = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userInfo = {userName, email, password};
        console.log(userInfo);

    }
    return (
        <div>
            <h2 className='text-3xl' > Add New User</h2>
        <br />
        <form onSubmit={handleAddUser}>
  
          <input
            type="text"
            name="userName"
            placeholder="userName"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
          <input type="submit" value="Add service" className="btn" />
        </form>
    {/* 
        Total Service {user?.length}
          <ul>
          {
             users?.map( user =><li
             key={user?.id}
             >
              
              {user?.name} 
              
              <button className="btn btn-outline" onClick={()=>handleDeleteService(service._id)} > X </button> 
            
              <Link to={`/updateservice/${service._id}`} > <button className="btn btn-outline" >Update</button> </Link>
               
              </li> )

          }
             
          </ul>
*/}
      </div>
    );
};

export default AddUser;