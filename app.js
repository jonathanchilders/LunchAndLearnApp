//Require dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

//Paths to routes
var index = require('./routes/index');
var add_catering_option = require('./routes/add_catering_option');
var add_topic = require('./routes/add_topic');
var edit_catering_option = require('./routes/edit_catering_option');
var edit_topic = require('./routes/edit_topic');
var view_catering_options = require('./routes/view_catering_options');
var view_topics = require('./routes/view_topics');

var app = express();

//All environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/add_catering_option', add_catering_option.view);
app.get('/add_topic', add_topic.view);
app.get('/edit_catering_option', edit_catering_option.view);
app.get('/edit_topic', edit_topic.view);
app.get('/view_catering_options', view_catering_options.view);
app.get('/view_topics', view_topics.view);

app.post('/add_catering_option', add_catering_option.postCateringOption);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});