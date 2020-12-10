import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from '../components/PrivateRoute.jsx';
import Login from './auth/Login.jsx';

import LandingIndex from './landing/LandingIndex.jsx';
import UserIndex from './user/UserIndex';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/landing" component={LandingIndex} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/">
                    <UserIndex />
                </PrivateRoute>
            </Switch>
        </main>
    )
}

export default App
