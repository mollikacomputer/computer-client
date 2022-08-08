import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import axios from 'axios';

const User = () => {
    
    const {data: users, isLoading} = useQuery( 'report', () =>{
       return axios.get( 'http://localhost:5000/user')
        }

    )

     if(isLoading){
        return <Loading></Loading>
     }
     console.log(users);
    return (
        <div>
            <h2> Total User : {users?.length}</h2>
             {/* {
             users?.map( user => <li
             key={user?._id}
             >
              {user?.userName}
             </li>)
            }   */}
        </div>
    );
};

export default User;