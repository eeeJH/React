import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {

//     static props = {
//         title: PropTypes.string,
//         poster: PropTypes.string
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={ this.props.poster} />
//             <h1>
//                 { this.props.title}
//             </h1>
//             </div>
//         );
        
//     }
// }


function Movie({title, poster }) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>
                {title}
            </h1>
        </div>
    );
}


// class MoviePoster extends Component {

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <img src={ this.props.poster } alt='Movie Poster' />
//         );
//     }
// }

// 
// return 만 한다.
// render 과정이 없음
function MoviePoster({ poster }) {
    return (
        <img src={ poster }/>
    );
}


Movie.prototype = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}


MoviePoster.prototype = {
    poster: PropTypes.string.isRequired
}


export default Movie;