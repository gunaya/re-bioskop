import React, { useState } from 'react'

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    return (
        <div className="relative bg-background-dark overflow-hidden font-headline">
            <div className=" max-w-7xl mx-auto h-full">
                <div className=" relative z-10 pb-8 bg-background-dark sm:pb-10 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background-dark transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="px-6 pt-8 pb-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none lg:pt-0 lg:pb-16">
                        <div className="flex items-center justify-between">
                            <div className="mt-10">
                                <h1 className="text-3xl tracking-tight font-bold sm:text-4xl md:text-5xl">
                                    <span className="block xl:inline font-title text-secondary-light">Cinemine</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
                        <p className="text-sm font-semibold text-secondary-dark uppercase tracking-wider">
                            Now created using ReactJS and Tailwind CSS
                        </p>
                        <h1 className="mt-3 text-3xl font-semibold font-display text-secondary-light sm:mt-6 sm:text-4xl xl:text-5xl">
                            One Stop Movie Collection,
                            <br className="hidden sm:inline"/>
                            <span className="text-primary-default">
                                created for fun.
                            </span>
                        </h1>
                        <p className="mt-2 text-lg text-secondary-default sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl">
                            {/* Fully responsive HTML components, designed and developed by Adam Wathan and Steve Schoger. */}
                            New Version of BioskopKelompok7, recreated using React and Tailwind.
                        </p>
                        <div className="mt-6 sm:flex sm:mt-8 xl:mt-12">
                            <a href="#pablo" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-gray-900 bg-secondary-default shadow-sm hover:text-gray-600 focus:text-gray-600 xl:text-lg xl:py-4">
                                Explore
                            </a>
                        </div>
                    </div>
                    
                    <div className="px-6 pt-8 sm:pt-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-full lg:py-0 lg:pt-12">
                        <p className="text-sm font-semibold text-secondary-default uppercase tracking-wider">Designed and developed by</p>
                        <div className="mt-4 sm:flex">
                            <a href="https://github.com/gunaya" className="flex items-center no-underline">
                                <div className="flex-shrink-0">
                                    <img class="h-12 w-12 rounded-full border-2 border-primary-default" src="https://gunaya.github.io/_assets/profile.8ac1822e.jpg" alt="Pict" />
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-secondary-default leading-relaxed">I Wayan Gunaya</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" alt="" />
            </div>
        </div>
    )
}
