import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

export default function NavLink() {
    return (
        <div className="flex space-x-4">
            <Link to='/' className="text-white px-3 py-2 rounded-md text-sm font-medium"> Home </Link>
            <Link to='/movie' className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Movie </Link>
            <Link to='/contact' className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Contact Us </Link>
        </div>
    )
}
