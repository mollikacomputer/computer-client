import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';
import Loading from '../Loading';

const AddUser = () => {
  /*  
  const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if(isLoading){
      return <Loading></Loading>
    }
*/

  const [users, setUsers] = useState([]);
        // get users data from mongodb server
        useEffect(()=>{
            fetch( 'http://localhost:5000/user')
            .then( res => res.json())
            .then( data => setUsers(data))
        },[]);

    const handleAddUser = event =>{
        event.preventDefault();
        const userName = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userInfo = {userName, email, password};
        console.log(userInfo);

        // sent data to server
    fetch('http://localhost:5000/user', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        event.target.reset();
    });

    }
    // console.log(users);
    return (
        <div>
            <h2 className='text-3xl' > Add New User</h2>
            <h2 className='text-3xl' > Total User : {users?.length} </h2>
           
            {
             users?.map( user => <li
             key={user?._id}
             >
              {user?.userName}
             </li>)
            } 

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
          <input type="submit" value="Add User" className="btn" />
        </form>
      </div>
    );
};

export default AddUser;