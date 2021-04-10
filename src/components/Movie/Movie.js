import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

export class Movie extends React.Component {

    componentDidMount() {
      const movieId = this.props.match.params.id;
      this.props.getMovieDetail(movieId);
    }

    render() {
        if(!this.props.movieDetail.Title) return <h1>Cargando...</h1>
        const {Title,
            Year,
            Director,
            Genre,
            Runtime,
            Poster,
            Rated,
            Actors,
            Country,
            Plot } = this.props.movieDetail
        return (
            <div className="movie-detail">
              <div>
                <img src={Poster} />
              </div>
              <div  className="movie-detalle">
                <h3>Movie Detail</h3>
                <div>
                  <b>Title:</b> {Title}
                </div>
                <div>
                  <b>Year:</b> {Year}
                </div>
                <div>
                <b>Director:</b> {Director}
                </div>
                <div>
                <b>Genre:</b> {Genre}
                </div>
                <div>
                <b>Runtine:</b> {Runtime}
                </div>
                <div>
                <b>Rated:</b> {Rated}
                <div>
                <b>Actors:</b> {Actors}
                </div>
                <div>
                <b>Country:</b> {Country}
                </div>
                <div>
                <b>Plot:</b> {Plot}
                </div>
                </div>
              </div>
            </div>
        );
    }
}

//export default (Movie);

function mapStateToProps(state) {
    return {
      movieDetail: state.movieDetail
    };
  }
  
  export default connect(mapStateToProps,{getMovieDetail})(Movie);