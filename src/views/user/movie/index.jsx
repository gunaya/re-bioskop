import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import MovieItem from '../../../components/pages/user/movie/MovieItem';
import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "84b39d7b03244cbb67ac69e14d03334d";
const api = axios.create({ baseURL: BASE_URL });



export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            data: [],
            perPage: 20,
            currentPage: 0,
            totalItem: 0,
            totalPerPage: 0
        }

        this.handlePageClick = this.handlePageClick.bind(this)
    };

    sliceData() {
        let curPage = 1;

        if (this.state.currentPage !== 0) curPage = this.state.currentPage + 1

        api.get('movie/now_playing', { 
            params: { api_key, page:curPage },
        }).then(( {data} ) => {
            const movies = data.results;

            const postData = movies.map(movie => {
                return <MovieItem movie={movie} key={movie.id} />
            })

            this.setState({
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
            this.sliceData()
        })

        window.scrollTo(0, 0)
    };

    componentDidMount() {
        this.sliceData()
    }
    
    render() {
        return (
            <div className=" h-full">
                <div className="container mx-auto mt-5 md:mt-10 mb-auto min-h-screen">
                    <div className="flex flex-wrap justify-center md:justify-between">
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

