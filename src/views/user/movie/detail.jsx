import React, { Component } from 'react';
import movie_api from '../../../services/moviedbapi'
import MovieDetail from '../../../components/pages/user/movie/MovieDetail'

const api_key = process.env.REACT_APP_MOVIEDB_KEY;

export default class detail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movie_id: 0,
            movie: {}
        }
    }

    getDetailMovie = () => {
        movie_api.get(`movie/${this.state.movie_id}`, { 
            params: { api_key },
        }).then(( {data} ) => {
            this.setState({
                movie: data
            })
        }).finally(() => {
            window.scrollTo(0, 0)
        })
    }    

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            movie_id: this.props.match.params.slug
        }, () => {
            this.getDetailMovie()
        })
    }

    render() {
        return (
            <div>
                <MovieDetail movie={this.state.movie} />
            </div>
        )
    }
}

