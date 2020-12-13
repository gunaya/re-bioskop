import React from 'react';
import AppHeader from '../../components/template/user/AppHeader';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import MovieIndex from './movie';
import AppFooter from '../../components/template/user/AppFooter';
import MovieDetail from './movie/detail';

const Contact = () => <h1>Contact</h1>
const Notfound = () => <h1>Not found</h1>

export default function UserIndex() {
    return (
        <div className="bg-background-dark w-full min-h-screen flex flex-col ">
            <AppHeader />
            <div className="mb-auto">
                <Switch>
                    <Route exact path='/' component={MovieIndex} />
                    <Route path="/movie/:slug" component={MovieDetail} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Notfound} />
                </Switch>
            </div>
            <AppFooter />
        </div>
    )
}

