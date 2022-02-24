import { getMaxListeners } from 'process';
import React, {useContext} from 'react';
import { UserContext } from './UseContext';

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin =()=>{  
           userContext.setUser({
               name: 'Duka',
               email: 'ddd@example.com'
           })      
    }
    const handleLogout =()=>{      
            userContext.setUser(null)       
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is  {userContext.user?.name}</div>
            <div>User email is  {userContext.user?.email}</div>
        </div>
    );
};

