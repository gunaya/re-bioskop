import React, { Component } from 'react';
import { useHistory, Link  } from "react-router-dom";

const LOCAL_KEY_AUTH = 'cinemine.auth';


export class AppHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            navbar_open: false,
            profile_open: false
        };

        this.toggleNavMenu = this.toggleNavMenu.bind(this)
        this.toggleProfileMenu = this.toggleProfileMenu.bind(this)
        this.onLogout = this.onLogout.bind(this)
        
    }
    

    toggleNavMenu() {
        this.setState({ navbar_open: !this.state.navbar_open })
    }

    toggleProfileMenu() {
        this.setState({ profile_open: !this.state.profile_open })
    }

    onLogout(){
        localStorage.setItem(LOCAL_KEY_AUTH, JSON.stringify({isAuthenticated: false, isAdmin: false}))
    }
    

    render() {
        
        let menuIcon;

		if (this.state.navbar_open) {
			menuIcon = (
				<path
					fillRule="evenodd"
					d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
				/>
			);
		} else {
			menuIcon = (
				<path
					fillRule="evenodd"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
				/>
			);
        }
        
        return (
            <nav className="bg-background-default">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-200 hover:text-white hover:bg-background-light focus:outline-none" onClick={this.toggleNavMenu}>
                                <span className="sr-only">Open Main Menu</span>
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    {menuIcon}
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center ml-10">
                                {/* <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /> */}
                                {/* <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" /> */}
                                <span className="block w-auto text-white px-3 py-2 rounded-md text-xl font-medium font-title">Cinemine</span>
                            </div>

                            <div className="hidden sm:flex sm:ml-6 sm:items-center sm:flex-shrink-0">
                                <div className="flex space-x-4">
                                    <Link to='/' className="text-white px-3 py-2 rounded-md text-sm font-medium"> Home </Link>
                                    <Link to='/contact' className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Contact Us </Link>
                                </div>
                            </div>
                        </div>

                        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="ml-3 relative">
                                <div>
                                    <button className="bg-background-light flex text-sm mr-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={this.toggleProfileMenu}>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>
                                <div className={'origin-top-right z-40 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ' + (this.state.profile_open ? '':'hidden')} role="menu">
                                    <a href="#pablo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                    <a href="#pablo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                    <a href="#pablo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={this.onLogout}>Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className={this.state.navbar_open ? '':'hidden'}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to='/' className="text-white block px-3 py-2 rounded-md text-sm font-medium"> Home </Link>
                        <Link to='/contact' className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"> Contact Us </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppHeader
