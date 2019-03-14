import _ from 'lodash';
import './style.css'
import Icon from './icon.png';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MovieList from './app.jsx';
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
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
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
      viewingToWatch:true
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

  toggleToWatch(){
    this.setState({viewingToWatch:!this.state.viewingToWatch});
  }

  render() {
    return (
      <div style={styles.app} >
        <div class="title">MovieList</div>
        <div><input type="text" onChange={this.updateMovieAdd.bind(this)}></input><button onClick={this.addMovie.bind(this)}>Add</button></div>
        <div class="content-container">

          <div><span class="select-tab active-tab">Watched</span><span class="select-tab">To watch</span><input type="text" onChange={this.updateSearch.bind(this)}></input><button>Go!</button></div>
          <MovieList movies={this.state.movies} search={this.state.search} dislayWatched={false}/>
        </div>
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App movies={movies}/>, root)