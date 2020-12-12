import React, { useState, useRef } from 'react';
import { useHistory  } from "react-router-dom";

const LOCAL_KEY_AUTH = 'cinemine.auth';

export default function Login() {
    const [user, setUser] = useState({ username: 'user', password: '12345' });
    const usernameRef = useRef();
    const passwordRef = useRef();

    const history = useHistory();

    function onLogin(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        let isAdmin = false;

        if (username === 'admin' && password === 'admin') {
            isAdmin = true;
        }

        localStorage.setItem(LOCAL_KEY_AUTH, JSON.stringify({isAuthenticated: true, isAdmin: isAdmin}))

        history.push('/')
    }

    return (
        <div className="min-h-screen flex sm:items-center justify-center bg-background-dark py-12 px-4 sm:px-6 lg:px-8 font-headline">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-4xl tracking-tight font-bold sm:text-4xl md:text-5xl text-center mt-20 sm:mt-auto">
                        <span className="block font-title text-primary-default">Cinemine</span>
                    </h1>
                    <h2 className=" mt-2 sm:mt-6 text-center text-xl sm:text-3xl font-extrabold text-secondary-default">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-8 space-y-6">
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Email address</label>
                            <input ref={usernameRef} defaultValue={user.username} id="username" name="username" type="username" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-background-dark rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input ref={passwordRef} defaultValue={user.password} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-background-dark rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-primary-default focus:ring-primary-light border-gray-300 rounded" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-secondary-default">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#pablo" className="font-medium text-primary-default hover:text-primary-light">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-dark hover:bg-primary-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onLogin}>
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-primary-default group-hover:text-primary-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
