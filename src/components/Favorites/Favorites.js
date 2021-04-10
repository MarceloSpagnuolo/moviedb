import React, { Component } from "react";
  import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div className="Buscador-Container">
        <h2>Favorites Movies</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          <div>
          {this.props.movies.map(movie =>
            <li key={movie.id} className="listado">
              <img src={movie.Poster} className="Poster"/>
              <Link to={`./Movie/${movie.id}`} className="item">
                <span>{movie.Title}</span>
              </Link>
              <div>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)} className="X-Btn" title="remove from favorites">X</button>
               </div>
            </li>
          )}
          </div>
        </ul>
      </div>
    );
  }
}



//export default (ConnectedList);

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);