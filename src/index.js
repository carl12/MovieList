import _ from 'lodash';
import './style.css'
import Icon from './icon.png';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App2 from './app.jsx';
// import ReactDom from 'react-dom';
// import React from 'react';
// import App from 'app.jsx'

// import App from 'app.jsx';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log('asdf1')

    return element;
  }
  console.log('asdf');
  document.body.appendChild(component());
  // index.js
var movies = [
  {title:'asdf'},
  {title:'asdf1'},
  {title:'asdf2'},
  {title:'asdf3'},
  {title:'asdf4'},
  {title:'asdf5'},
]
const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        Welcome to React! and stuff
        <App2 movies={movies}/>
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)