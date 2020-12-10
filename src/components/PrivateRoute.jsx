import React from 'react';
import { Route, Redirect } from "react-router-dom";

const LOCAL_KEY_AUTH = 'cinemine.auth';


export default function PrivateRoute({children, ...rest}) {
    let fakeAuth = {
        isAuthenticated : false,
        isAdmin : false
    }
    const storedAuth = JSON.parse(localStorage.getItem(LOCAL_KEY_AUTH))

    if (storedAuth) fakeAuth = storedAuth

    return (
        <Route {...rest} render={() => {
            return fakeAuth.isAuthenticated === true ? children : <Redirect to='/landing' />
        }} />
    )
}
