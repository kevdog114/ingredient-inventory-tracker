
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override')
  , info = require('./info')
  , mysql = require('mysql')
  , connectionFactory = require('./mysql_connection_factory');

var app = express();
//var router = express.Router();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// set app info
info.initInfo(app);

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('/', routes.index);
app.get('/recipes', routes.recipes);
app.get('/ingredients', routes.ingredients);
//app.get('/api/ingredients', routes.ing_api);
app.get('/api/ingredients', routes.api.ingredients);
app.get('/api/ingredients/:ingredient_id', routes.api.ingredientById);
app.get('/api/recipes', routes.api.recipes);
app.get('/api/recipes/:recipe_id', routes.api.recipesById);
app.get('/api/recipes/:recipe_id/steps', routes.api.stepsForRecipe);
app.get('/api/recipes/:recipe_id/ingredients', routes.api.ingredientsForRecipe);


//routes.RegisterApi(router);
//app.use("/api", router);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
