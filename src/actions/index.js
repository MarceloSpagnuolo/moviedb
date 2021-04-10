export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function removeMovieFavorite(payload) {
      return { type: "REMOVE_MOVIE_FAVORITE", payload};
  }

  export function getMovieDetail(movieID) {
      return function(dispatch) {
          return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + movieID)
          .then(response => response.json())
          .then(json => {
              dispatch({ type: "GET_MOVIE_DETAIL", payload: json })
          })
      }
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }