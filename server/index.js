var express = require('express');
var app = express();
var cors = require('cors');
const port = 3000;

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/movielist";
var movieCol;
MongoClient.connect(mongoUrl, function (err, db) {
  if (err) throw err;
  var dbo = db.db('movielist');
  dbo.createCollection('startmovies', function (err, res) {
    if (err) throw err;
    movieCol = res;
  })
})

var movies = [
  { title: 'Spaceballs', watched: false },
  { title: 'Star Wars', watched: false },
  { title: 'Eggplant', watched: false },
  { title: 'Emperor\'s New Groove', watched: false },
  { title: '2001: A Space Odessy', watched: false },
]
app.use(cors());

app.get('/', (req, res) => {
  if (movieCol) {
    debugger;
    movieCol.find().toArray().then(a=>{
      res.end(JSON.stringify(a));
    });
    // res.end(JSON.stringify(movieCol.find()));
  }
  else {
    res.end();
  }
});
app.listen(port, () => { console.log('running!') });