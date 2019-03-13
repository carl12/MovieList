import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var App2 = ({movies}) =>(
    <ul>
        {movies.map((movie)=>{
            console.log('something')
            return <li>{movie.title}</li>
        })}
    </ul>
);

export default App2;

