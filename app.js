//we need express! and morgan middleware!
var express = require( 'express' );
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));

//we need swig! to make things look great!
var swig = require('swig');
swig.setDefaults({ cache: false });

//set up app to use Swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//we need routes! 
var routes = require('./routes');
app.use('/', routes);

app.listen(2000, function(){
	console.log('server listening');
});

//stylesheets are static
app.use(express.static(__dirname + '/public'));

