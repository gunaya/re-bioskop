import React, {useState} from 'react'
import Moment from 'react-moment';
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
                    <img className={" items-center w-36 md:w-full " + (loading ? 'block' : 'hidden')} src={spinner} alt={movie.title}/>
                    <img className={" w-36 md:w-full " + (loading ? 'hidden' : 'block')} src={getMoviePoster(movie.poster_path)} alt={movie.title} onLoad={imageLoaded} />
                    <div className="hidden md:block absolute bottom-0 left-0 w-full pt-10 px-4 pb-2 bg-gradient-to-b from-transparent to-gray-900">
                        <div className="relative">
                            <div className="uppercase tracking-wide text-sm text-secondary-light font-semibold">{movie.title}</div>
                            <span className="block text-md leading-tight font-medium text-primary-light md:font-normal"> 
                                {/* {moment(movie.release_date).format('DD MMMM YYYY')} */}
                                <Moment format="DD MMMM YYYY">
                                    {movie.release_date}
                                </Moment>
                            </span>
                            <div className="absolute bottom-0 right-0 my-auto">
                                <div className="uppercase tracking-wide text-sm text-secondary-light font-semibold">{movie.vote_average} <i className="fas fa-star text-yellow-500"></i> </div>
                            </div>
                        </div>
                    </div>
                    <div className={"absolute justify-center top-2 right-2 bg-red-600 rounded-full h-8 w-8 p-0 " + ( movie.adult ? 'flex':'hidden' )}>
                        <span className="text-secondary-default font-bold place-self-center">18+</span>
                    </div>
                </div>
                <div className="p-4">
                    <div className="block md:hidden">
                        <div className="relative">
                            <div className="uppercase tracking-wide text-sm text-primary-dark font-semibold">{movie.title}</div>
                            <span className="block mt-1 text-md leading-tight font-medium text-secondary-dark md:font-semibold">
                                <Moment format="DD-MM-YYYY">
                                    {movie.release_date}
                                </Moment>    
                            </span>
                            <div className="absolute bottom-0 right-0 my-auto">
                                <div className="uppercase tracking-wide text-sm text-secondary-dark font-semibold">{movie.vote_average} <i className="fas fa-star text-yellow-500"></i> </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2 border-secondary-dark md:hidden" />
                    <p className="md:hidden text-sm text-secondary-dark text-justify mt-4">
                        {`${movie.overview.substring(0, 90)}...`}
                    </p>
                    <p className="hidden md:block text-sm text-secondary-dark text-justify">
                        {`${movie.overview.substring(0, 200)}...`}
                    </p>
                </div>
            </div>
        </div>
    )
}

