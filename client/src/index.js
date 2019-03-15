import _ from 'lodash';
import './style.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MovieList from './MovieList.jsx';
import MovieFilter from './MovieFilter.jsx';

  var movies = [
    {title: 'Mean Girls', watched:false},
    {title: 'Hackers', watched:false},
    {title: 'The Grey', watched:false},
    {title: 'Sunshine', watched:false},
    {title: 'Ex Machina', watched:false},
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
      displayingWatched:false
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
    newMovies.push({title:this.state.movieAdd, watched:false});
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
console.log('asdf')
const root = document.querySelector('#app')
var loadFromServer = function(){
  console.log('asdf')
  fetch('localhost:3000',{
    method: 'GET', 
    headers:{ 'Content-Type': 'application/json' }
  }).then((a)=>{console.log(a.body)}).catch((e)=>{console.log(e)});
}
loadFromServer();
ReactDOM.render(<App movies={movies}/>, root)
