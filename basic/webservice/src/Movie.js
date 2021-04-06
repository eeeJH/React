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


function Movie({title, poster, genres, synopsis }) {
    return (
        <div className='Movie'>

            <div className='Movie__Colm'>
                <MoviePoster poster={poster} alt={ title }/>
            </div>

            <div className='Movie__Colm'>

                <h1>
                    {title}
                </h1>

                <div className='Movie__Genr'>
                    {genres.map((genres, index) => <MovieGenre genres={genres} key={index}/>)}
                </div>

                <p className='Movie__Syno'>
                    {synopsis}
                </p>
            </div>
            
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
function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt={alt} title={ alt } className='Movie__Poster' />
    );
}

function MovieGenre({ genres}) {
            
    return (
        <span className='Movie__Genr'>
            {genres}
        </span>
    );
}

Movie.prototype = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}


MoviePoster.prototype = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genres: PropTypes.string.isRequired
}

export default Movie;