import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions/index.js"



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    //console.log(this.state.title);
    event.preventDefault();
    this.props.getMovies(this.state.title)
    //console.log(this.props.movies)
  }

  render() {
    const { title } = this.state;
    return (
      <div className="Buscador-Container">
        <h2>Searcher</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Movie: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">SEARCH</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         <div>
         {this.props.moviesLoaded.map(movie =>
            <div key={movie.imdbID} className="listado">
              <img src={movie.Poster} className="Poster"/>
              <Link to={`./Movie/${movie.imdbID}`} className="Item">
                {movie.Title}
              </Link>
              <div>
                <button className="Btn-Fav" onClick={() => this.props.addMovieFavorite({Title: movie.Title, id: movie.imdbID, Poster: movie.Poster})}>Fav</button>
               </div>
            </div>
          )}
          </div>
        </ul>
      </div>
    );
  }
}

//export default Buscador;

function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);