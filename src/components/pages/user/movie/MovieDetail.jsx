import React, { useState } from 'react';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';
import spinner from '../../../../assets/spinner.svg'
import RatingIcon from './rating/RatingIcon';
import Genre from './genre/Genre';
import Studio from './studio/Studio';

export default function MovieDetail({movie}) {
    const [loading, setLoading] = useState(true)
    const [genres, setGenres] = useState([])
    const [studios, setStudios] = useState([])

    const getMoviePoster = (path) => `https://image.tmdb.org/t/p/w500/${path}`

    const imageLoaded = () => {
        setLoading(false)
        setGenres(movie.genres)
        setStudios(movie.production_companies)
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-background-dark">
            <div className="container px-5 pb-24 pt-6 md:pt-14 mx-auto text-secondary-default">
                <div className="lg:w-4/5 mx-auto flex flex-wrap pb-5 border-b-2 border-gray-200 mb-5">
                    <img className={"lg:w-1/2 w-full object-cover object-center rounded-md border-2 md:border-4 border-primary-dark " + (loading ? 'block' : 'hidden')} src={spinner} alt={movie.title}/>
                    <img className={"lg:w-1/2 w-full h-full object-cover object-center rounded-md border-2 md:border-4 border-primary-dark " + (loading ? 'hidden' : 'block')} src={getMoviePoster(movie.poster_path)} onLoad={imageLoaded} alt={movie.title} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:pb-6 mt-6 lg:mt-0">
                        <div className="bg-secondary-dark rounded-full flex-shrink p-1 mb-5">
                            <div className="relative">
                                <h2 className="text-sm title-font tracking-widest mx-2">{movie.status}  </h2>
                                <div className="absolute right-0 top-0">
                                    <h2 className="text-sm font-semibold tracking-widest mx-2"> 
                                    {/* <Moment format="DD-MM-YYYY"> {movie.release_date} </Moment> */}{movie.release_date}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <h1 className="text-primary-default text-5xl font-bold my-2">{movie.title}</h1>
                            <div className={"absolute justify-center top-2 right-2 bg-red-600 rounded-full h-8 w-8 p-0 " + ( movie.adult ? 'flex':'hidden' )}>
                                <span className="font-bold place-self-center">18+</span>
                            </div>
                        </div>
                        <blockquote className={"pt-2 text-xl md:text-lg italic text-gray-500 "+(movie.tagline === '' ? 'hidden':'relative')}>
                            <p className="font-title">{movie.tagline}</p>
                        </blockquote>
                        <div className="flex my-4 md:my-8">
                            <span className="flex items-center text-secondary-dark">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                                    return (
                                        <RatingIcon index={index} key={index} rating={movie.vote_average} />
                                    )
                                })}
                                <span className="ml-3 text-base md:text-xl font-semibold text-secondary-default">{movie.vote_average} Reviews</span>
                            </span>
                        </div>
                        <p className="leading-relaxed text-justify"> {movie.overview} </p>

                        <div className="flex mt-2 flex-row">
                            {genres.map(genre => {
                                return (
                                    <Genre genre={genre.name} key={genre.id} />
                                )
                            })}
                        </div>

                        <div className="mt-6 border-t-2 border-secondary-dark">
                            <h3 className="text-primary-default text-2xl font-semibold mt-5">Movie Info</h3>
                            <div className="flex flex-col mt-2 items-start">
                                <div className="flex">
                                    <span className="mr-3">Budget</span>
                                    <span> <CurrencyFormat value={movie.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                                </div>
                                <div className="flex mt-1">
                                    <span className="mr-3">Revenue</span>
                                    <span> <CurrencyFormat value={movie.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-4/5 mx-auto">
                    <div className="flex mt-2 flex-wrap justify-evenly md:justify-start ">
                        {studios.map(studio => {
                            return (
                                <Studio studio={studio} key={studio.id} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
