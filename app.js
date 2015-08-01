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

app.get('/', function (req, res) {
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, function(){
	console.log('server listening');
});

