import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MovieEntry from './MovieListElement.jsx'
var valid;

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { a: false };
  }
  rerender() {
    this.setState({ a: !this.state.a });
  }
  render() {

    var valids = this.props.movies.map((movie) => {
      if (matchesSearch(this.props.search, movie.title) && this.props.displayingWatched === movie.watched) {
        return <MovieEntry movie={movie} rerender={this.rerender.bind(this)} />
      }
    });
    if (valids.length > 0) {
      return (
        <div>
          {valids}
        </div>
      );
    } else {
      return <div>No valid movies!</div>
    }

  }
}


function matchesSearch(search, title) {
  if (search === title.slice(0, search.length)) {
    return true;
  } else {
    return false;
  }
}
export default MovieList;

