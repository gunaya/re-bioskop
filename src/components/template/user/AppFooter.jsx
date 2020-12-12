import React from 'react'

export default function AppFooter() {
    return (
        <footer className=" relative bg-background-default pt-8 pb-6 mt-10 md:mt-20">
            <div className="inset-x-0 bottom-0">

                <div className="hidden md:block bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px", transform: "translateZ(0)" }} >
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" >
                        <polygon className="text-background-default fill-current" points="2560 0 2560 100 0 100" ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-6/12 px-4 mx-auto text-center md:text-left">
                            <h4 className="text-xl md:text-3xl font-semibold text-primary-default">
                                Let's keep in touch!
                            </h4>
                            <h5 className="hidden md:block text-lg mt-0 mb-2 text-secondary-default">
                                Find us on any of these platforms.
                            </h5>
                            <div className=" mt-2 md:mt-6">
                                <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2 p-3" type="button" >
                                    <i className="flex fab fa-twitter"></i>
                                </button>
                                <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button" >
                                    <i className="flex fab fa-facebook-square"></i>
                                </button>
                                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button" >
                                    <i className="flex fab fa-dribbble"></i>
                                </button>
                                <button className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button" >
                                    <i className="flex fab fa-github"></i>
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 px-4 hidden md:block">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full md:w-6/12 px-4 ml-auto md:ml-0">
                                    <span className="block uppercase text-primary-default text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled text-secondary-default">
                                        <li>
                                            <a className="hover:text-primary-dark font-semibold block pb-2 text-sm"
                                                href="#pablo">About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primary-dark font-semibold block pb-2 text-sm"
                                                href="https://github.com/gunaya">Github
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <span className="block uppercase text-primary-default text-sm font-semibold mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled text-secondary-default">
                                        <li>
                                            <a className="hover:text-primary-dark font-semibold block pb-2 text-sm"
                                                href="#pablo">Terms & Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primary-dark font-semibold block pb-2 text-sm"
                                                href="#pablo">Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primary-dark font-semibold block pb-2 text-sm"
                                                href="https://linktr.ee/gunaya">Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className=" my-4 md:my-6 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-secondary-default font-medium py-1">
                                Copyright © {new Date().getFullYear()}{" "} Developed by{" "}
                                <a href="https://github.com/gunaya" className="text-primary-default hover:text-primary-dark" >
                                    Gunaya
                                </a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
