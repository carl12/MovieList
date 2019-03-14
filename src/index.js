import _ from 'lodash';
import './style.css'
import Icon from './icon.png';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MovieList from './MovieList.jsx';
import MovieFilter from './MovieFilter.jsx';
// import ReactDom from 'react-dom';
// import React from 'react';
// import App from 'app.jsx'

// import App from 'app.jsx';

// function component() {
//     let element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//     var myIcon = new Image();
//     myIcon.src = Icon;
//     element.appendChild(myIcon);
//     console.log('asdf1')

//     return element;
//   }
//   console.log('asdf');
//   document.body.appendChild(component());

  // index.js
  var movies = [
    {title: 'Mean Girls', watched:true},
    {title: 'Hackers', watched:true},
    {title: 'The Grey', watched:true},
    {title: 'Sunshine', watched:true},
    {title: 'Ex Machina', watched:true},
  ];
const styles = {
  app: {
    // paddingTop: 40,
    // textAlign: 'center',
  },
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search:"",
      movieAdd:"",
      movies:props.movies,
      displayingWatched:true
    }

  }
  updateSearch(q){
    // console.log(q.target.value);
    this.setState({search:q.target.value});
  }
  updateMovieAdd(q) {
    this.setState({movieAdd:q.target.value})
  }

  addMovie() {
    var newMovies = this.state.movies.slice();
    newMovies.push({title:this.state.movieAdd});
    this.setState({movies:newMovies})
  }

  turnOnDisplayingWatched(){
    this.setState({displayingWatched:true});
  }
  turnOffDisplayingWatched(){
    this.setState({displayingWatched:false});
  }

  render() {
    return (
      <div style={styles.app} >
        <div class="title">MovieList</div>
        <div><input type="text" onChange={this.updateMovieAdd.bind(this)}></input><button onClick={this.addMovie.bind(this)}>Add</button></div>
        <div class="content-container">
          <MovieFilter 
            viewingWatched={this.state.viewingWatched} 
            onWatched={this.turnOnDisplayingWatched.bind(this)} 
            offWatched={this.turnOffDisplayingWatched.bind(this)}
            updateSearch={this.updateSearch.bind(this)}
            displayingWatched={this.state.displayingWatched}
          />

          <MovieList movies={this.state.movies} search={this.state.search} displayingWatched={this.state.displayingWatched}/>
        </div>
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App movies={movies}/>, root)