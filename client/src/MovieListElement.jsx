import React, { Component } from 'react'
import key from './config';
class MovieEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: this.props.movie.watched,
      loaded: false,
      info: {},
      tryingToOpen: false,
      failedLoad: false
    };
  }
  toggleWatched() {
    this.setState({ watched: !this.state.watched });
    this.props.movie.watched = !this.props.movie.watched;
    this.props.rerender();

  }
  fetchInfo() {
    this.setState({ tryingToOpen: !this.state.tryingToOpen });
    if (!this.state.loaded) {
      getMovieData(this.props.movie.title).then((data) => {

        this.setState({ loaded: true, info: data, failedLoad: false })
      }).catch((err) => {
        console.log('failed to load');
        this.setState({ failedLoad: true });

      });
    }
  }

  render() {
    var start = (<div class="movie-entry">
      <span onClick={this.fetchInfo.bind(this)}>{this.props.movie.title}</span>
      <span class="right-justify" onClick={this.toggleWatched.bind(this)}>
        {this.state.watched ? "Watched" : "To Watch"}
      </span>
    </div>);
    var end = "";
    if (this.state.tryingToOpen && this.state.loaded) {
      end = (
        <div>
          <div class="info-container">
            <div>Title: {this.state.info.title}</div>
            <div>Release: {this.state.info.release_date}</div>
            <div>Popularity: {this.state.info.popularity}</div>
            <div>Rating: {this.state.info.vote_average}</div>
            <div>{this.state.info.overview}</div>
          </div>
          <div>
            <img class="movie-icon" src={'https://image.tmdb.org/t/p/w185/'+this.state.info.poster_path}/>
          </div>
          <div class="image-container"></div>
        </div>
        
      );
    } else if (this.state.failedLoad && this.state.tryingToOpen) {
      end = (<div>Failed to load</div>)
    } else if (this.state.tryingToOpen && !this.state.loaded) {
      end = (<div>Loading...</div>)
    }
    return <div>{start} {end}</div>;
  }
}
var getMovieData = function (title) {
  title = title.replace(' ', '%20');
  var url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${title}&page=1&include_adult=false`
  var data = { username: 'example' };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(response => response.results[0]);
}


export default MovieEntry;