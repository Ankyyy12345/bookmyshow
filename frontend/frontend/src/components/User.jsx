import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'


function User() {

    let loggedIn=true;

    if(loggedIn){
        return (
            <Outlet />
        )
    }else{
        return (
          <Navigate to={"/login"} />
        )
    }
// isLoggedIn() ? <Outlet /> : <Navigate to ={"/login"} />

}

export default User