import React, {useState} from 'react'
import spinner from '../../../../assets/spinner.svg'

export default function MovieItem({movie}) {
    const [loading, setLoading] = useState(true)

    const getMoviePoster = (path) => `https://image.tmdb.org/t/p/w500/${path}`

    const imageLoaded = () => {
        setLoading(false)
    }

    return (
        <div className=" w-full md:w-1/4 xl:w-1/5 bg-secondary-default mx-4 md:mx-8 my-4 overflow-hidden rounded-md md:rounded-lg md:mb-10">
            <div className="flex flex-grow md:block">
                <div className="flex-shrink-0 relative my-auto">
                    <img className={"  items-center w-36 md:w-full " + (loading ? 'block' : 'hidden')} src={spinner} alt="Man looking at item at a store"/>
                    <img className={" w-36 md:w-full " + (loading ? 'hidden' : 'block')} src={getMoviePoster(movie.poster_path)} alt="Man looking at item at a store" onLoad={imageLoaded} />
                    <div className="hidden md:block absolute bottom-0 left-0 w-full pt-6 px-4 pb-4 bg-gradient-to-b from-transparent to-gray-800">
                        <div className="uppercase tracking-wide text-sm text-secondary-light font-semibold">{movie.title}</div>
                        <span className="block text-md leading-tight font-medium text-primary-light md:font-normal">{movie.release_date}</span>
                    </div>
                </div>
                <div className="p-4 my-auto">
                    <div className="block md:hidden">
                        <div className="uppercase tracking-wide text-sm text-primary-dark font-semibold">{movie.title}</div>
                        <span className="block mt-1 text-md leading-tight font-medium text-secondary-dark md:font-semibold">{movie.release_date}</span>
                    </div>
                    <p className="hidden md:block text-sm text-secondary-dark text-justify">
                        {`${movie.overview.substring(0, 200)}...`}
                    </p>
                    <p className="md:hidden text-sm text-secondary-dark text-justify mt-5">
                        {`${movie.overview.substring(0, 100)}...`}
                    </p>
                </div>
            </div>
        </div>
    )
}

