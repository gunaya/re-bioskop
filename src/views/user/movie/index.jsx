import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import MovieItem from '../../../components/pages/user/movie/MovieItem';
import JenisMovie from '../../../components/pages/user/movie/JenisMovie';
import MovieFilter from '../../../components/pages/user/movie/MovieFilter';

import movie_api from '../../../services/moviedbapi'

const api_key = process.env.REACT_APP_MOVIEDB_KEY;

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            data: [],
            perPage: 20,
            currentPage: 0,
            totalItem: 0,
            totalPerPage: 0,
            pageNumber: 0,
            url: '',
            filter: ''
        }

        this.handlePageClick = this.handlePageClick.bind(this)
        this.onCategoryChange = this.onCategoryChange.bind(this)
        this.onFiltered = this.onFiltered.bind(this)
    };

    getMovieLists() {
        let curPage = 1;
        const url = this.state.url

        if (this.state.currentPage !== 0) curPage = this.state.currentPage + 1

        movie_api.get(`movie/${url}`, { 
            params: { api_key, page:curPage },
        }).then(( {data} ) => {
            const movies = data.results;

            
            const postData = movies.map(movie => {
                if(movie.title.toLowerCase().includes(this.state.filter.toLowerCase())) return <MovieItem movie={movie} key={movie.id} />
            })

            // const postData = movies.map(movie => {
            //     return <MovieItem movie={movie} key={movie.id} />
            // })

            this.setState({
                data: data.results,
                pageCount: data.total_pages,
                totalItem: data.total_results,
                totalPerPage: movies.length,
                postData
            })

        })

    };

    handlePageClick = (e) => {
        const selectedPage = e.selected
        const offset = selectedPage*this.state.perPage

        this.setState({
            currentPage: selectedPage,
            offset: offset,
        }, () => {
            this.getMovieLists()
        })

        window.scrollTo(0, 0)
    };

    onCategoryChange = (item) => {
        this.setState({
            url: item,
            currentPage: 0
        }, () => {
            this.getMovieLists()
        })
    };

    onFiltered = (filter) => {
        this.setState({
            filter : filter
        }, () => {
            this.getMovieLists()
        })
    }
    
    render() {
        return (
            <div className=" h-full w-full">
                <div className="container mx-auto md:mt-10">
                    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between">
                        <div className="w-auto md:w-1/3 lg:w-2/5 mx-4 md:mx-8">
                            <JenisMovie onCategoryChange={this.onCategoryChange} />
                        </div>
                        <div className="w-auto mt-3 md:mt-0 md:w-2/3 lg:w-3/5 mx-4 md:mx-8">
                            <MovieFilter onFiltered={this.onFiltered} />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mt-5 md:mt-10 mb-auto min-h-screen 2xl:mx-0 2xl:min-w-screen">
                    <div className="flex flex-wrap justify-center md:justify-start max-w-screen">
                        {this.state.postData}
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="px-4 py-3 flex items-center justify-between md:mx-4">
                        <div className="flex-1 flex justify-between mt-5 sm:hidden">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                forcePage={this.state.currentPage}
                                marginPagesDisplayed={0}
                                pageRangeDisplayed={0}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination_mobile"}
                                subContainerClassName={"pages pagination"}
                                previousClassName={"prev_mobile"}
                                nextClassName={"next_mobile"}
                                activeClassName={"active"}
                                pageClassName={"test"}/>
                        </div>
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-secondary-light">
                                    Showing&nbsp;
                                    <span className="font-medium">{this.state.offset+1}</span>
                                    &nbsp;to&nbsp;
                                    <span className="font-medium">{this.state.offset+this.state.totalPerPage}</span>
                                    &nbsp;of&nbsp;
                                    <span className="font-medium">{this.state.totalItem}</span>
                                    &nbsp;results
                                </p>
                            </div>
                            <div>
                                <ReactPaginate
                                    previousLabel={
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    }
                                    nextLabel={
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    }
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={this.state.pageCount}
                                    forcePage={this.state.currentPage}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={2}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

