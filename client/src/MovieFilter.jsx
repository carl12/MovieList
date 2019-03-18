import React, { Component } from 'react';

var MovieFilter = ({ onWatched, offWatched, updateSearch, displayingWatched }) => {
  var watchClass = "select-tab" + (displayingWatched ? " active-tab" : "");
  var toWatchClass = "select-tab" + (!displayingWatched ? " active-tab" : "");
  return (
    <div>
      <span class={watchClass} onClick={onWatched}>Watched</span>
      <span class={toWatchClass} onClick={offWatched}>To watch</span>
      <input type="text" onChange={updateSearch}></input>
    </div>
  );
}


export default MovieFilter;