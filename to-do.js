var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));
//fire the function
todoController(app);


//listen to port
app.listen(8080);
console.log('It is port 8080');
