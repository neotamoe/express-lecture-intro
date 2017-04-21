var express = require ('express');
var path = require ('path');
var bodyParser= require('body-parser');
var app = express();  //could call app anything, but we'll always call it app
//this is what we use to call it and use it in our code
var songData = [
  {name: 'shake it off'},
  {name: 'what\'s going on'}
];

// console.log('Hey There!');

// middle ware that makes the files in the public folder visible,
// mus be above your routes
// (between receiving and responding to request, do this, tells server it's okay to send info back)
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

// get route to serve back our index.html
app.get('/', function(req, res){
  console.log('in get route');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
// when you go to my server at this address, run this code
// currently don't have anything else, so just / for location/address

// / and /song are paths and say where on the server the data is, a route
// __dirname is also a path

app.get('/song',function(req, res){
  console.log('in get song route');
  res.send(songData);
});

app.post('/song', function(req, res){
  console.log('in post route');
  console.log('req.body-->', req.body);
  songData.push(req.body);
  res.sendStatus(201);
});

//tells our server to listen at 3000
app.listen(3000, function() {
  console.log('listening on port 3000');
});

// this is called blocking
// if run this as is now, terminal will give us console.log message, but then do nothing more
//  and will wait and wait as it's just listening at this point
// if go to localhost:3000 now in browser, will get message "Cannot GET /" because
// there's nothing yet in our files to do, only listening
