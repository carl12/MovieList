import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var valid;
var App2 = ({movies, search}) =>(
    <div>
        {getValidMovies(search, movies)}
        {/* {valid.length === 0?  <div>No Movie found</div> : valid}  */}
    </div>
);

function getValidMovies(search, movies) {
    console.log('run')
    var valid = [];
    for (var i = 0; i < movies.length; i++) {
        if(matchesSearch(search, movies[i].title)){
            valid.push(<div class="movie-entry">{movies[i].title}</div>);
        }
    }
    if (valid.length === 0) {
        return <div>No valid movies!</div>
    }
    return valid;
}

function matchesSearch(search, title) {
    if (search === title.slice(0,search.length)) {
        return true;
    } else {
        return false;
    }
}
export default App2;

