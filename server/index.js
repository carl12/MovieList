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

app.get('/', (req, res) => {
    res.send(JSON.stringify(movies));
    res.end();
    // res.send(JSON.stringify(movies));
});
app.listen(port, ()=>{console.log('running!')});