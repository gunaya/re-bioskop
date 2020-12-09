import React from 'react';
import { Route, Redirect } from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

export default function PrivateRoute({children, ...rest}) {
    return (
        <Route {...rest} render={() => {
            return fakeAuth.isAuthenticated === true
                ? children
                : <Redirect to='/landing' />
        }} />
    )
}
