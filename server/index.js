var express = require('express');
var app = express();
var cors = require('cors');
const port = 3000;

var movies = [
    {title:'Spaceballs', watched:false},
    {title:'Star Wars', watched:false},
    {title:'Eggplant', watched:false},
    {title:'Emperor\'s New Groove', watched:false},
    {title:'2001: A Space Odessy', watched:false},
]
app.use(cors());
app.use('/', (req, res, next) => {
    console.log('asdf')
    next();
});
app.get('/', (req, res) => {
    console.log('request')
    res.end('hello World!')
    // res.send(JSON.stringify(movies));
});
app.listen(port, ()=>{console.log('running!')});