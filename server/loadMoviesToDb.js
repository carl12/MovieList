var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/movielist";
var movies = [
    { title: 'Mean Girls', watched: false },
    { title: 'Hackers', watched: false },
    { title: 'The Grey', watched: false },
    { title: 'Sunshine', watched: false },
    { title: 'Ex Machina', watched: false },
    { title: 'Interstellar', watched: false}
  ];

MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db('movielist');
    dbo.createCollection('startmovies', function(err, res) {
        if (err ) throw err;
        console.log('collection created');
        res.insertMany(movies);
    })
})