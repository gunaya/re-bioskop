import React from 'react';
import AppHeader from '../../components/template/user/AppHeader';
import { BrowserRouter, Route, Switch} from "react-router-dom";

const Home = () => <h1>Home</h1>
const Movie = () => <h1>Movie</h1>
const Contact = () => <h1>Contact</h1>
const Notfound = () => <h1>Not found</h1>

export default function UserIndex() {
    return (
        <div>
            <AppHeader />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/movie" component={Movie} />
                <Route path="/contact" component={Contact} />
                <Route component={Notfound} />
            </Switch>
        </div>
    )
}

