import React from 'react'

export default function Studio( props ) {
    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`

    const { studio } = props;
    return (
        <div className="container shadow-lg rounded-md overflow-hidden mb-10 w-2/5 md:w-1/5 mx-4 bg-secondary-default p-2 flex h-auto flex-wrap justify-center items-center">
            <img className="w-full object-cover my-auto" src={getImage(studio.logo_path)} alt={studio.name} />
            <div className="mb-0 mt-auto">
                <h4 className="text-primary-dark text-sm text-center font-bold">{studio.name}</h4>
            </div>
        </div>
    )
}
