import React, { Component } from 'react'
class MovieEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watched:this.props.movie.watched,
            loaded:false,
            info:{},
            tryingToOpen:false,
            };
    }
    toggleWatched() {
        this.setState({watched:!this.state.watched});
        this.props.movie.watched = !this.props.movie.watched;
        this.props.rerender();

    }
    fetchInfo() {
        this.setState({tryingToOpen:!this.state.tryingToOpen});
        setTimeout((err, data)=>{
            data = {
                year:2000,
                runtime:100,
                metascore:10.0,
                imdbRating:10.0,
            };
            if (err) {
                console.log('load failed: ', err)
                return;
            } else {   
                this.setState({loaded:true,info:data})
            }
        }, 100);
    }

    render(){
        if (this.state.tryingToOpen && this.state.loaded) {
            return (
                <div>
                    <div class="movie-entry">
                        <span onClick={this.fetchInfo.bind(this)}>{this.props.movie.title}</span> 
                        <span class="right-justify" onClick={this.toggleWatched.bind(this)}>
                            {this.state.watched?"Watched":"To Watch"}
                        </span>
                    </div>
                    <div>Year:{this.state.info.year}</div>
                    <div>Runtime:{this.state.info.year}</div>
                    <div>Metascore:{this.state.info.year}</div>
                    <div>Watched:{this.state.info.year}</div>
                </div>
            )
        }
        return(
        <div class="movie-entry">
            <span onClick={this.fetchInfo.bind(this)}>{this.props.movie.title}</span> 
            <span class="right-justify" onClick={this.toggleWatched.bind(this)}>
                {this.state.watched?"Watched":"To Watch"}
            </span> 
        </div>
        )
    }  
}


export default MovieEntry;