var mysql = require('mysql');
var connectionFact = require('../mysql_connection_factory');

module.exports.GetIngredients = function(fnWhenDone) {
  var con = connectionFact.CreateConnection(mysql);
  con.connect();
  con.query('SELECT * FROM inventory.ingredient', function(error, results, fields) {
    fnWhenDone(results);
  });
};

module.exports.GetIngredientById = function(id, fnWhenDone) {
  var con = connectionFact.CreateConnection(mysql);
  con.connect();
  con.query('SELECT * FROM inventory.ingredient WHERE ingredient_id = ?', [id], function(error, results, fields) {
    fnWhenDone(results[0]);
  });
};


module.exports.GetRecipes = function(fnWhenDone) {
  var con = connectionFact.CreateConnection(mysql);
  con.connect();
  con.query('SELECT * FROM inventory.recipe', function(error, results, fields) {
    fnWhenDone(results[0]);
  });
};

module.exports.GetRecipeById = function(id, fnWhenDone) {
  var con = connectionFact.CreateConnection(mysql);
  con.connect();
  con.query('SELECT * FROM inventory.recipe WHERE recipe_id = ?', [id], function(error, results, fields) {
    fnWhenDone(results[0]);
  });
};
module.exports.GetStepsForRecipe = function(id, fnWhenDone) {
  var con = connectionFact.CreateConnection(mysql);
  con.connect();
  con.query(
     'SELECT ' +
     's.* ' +
     'FROM ' +
     'inventory.recipe_step s ' +
     'INNER JOIN inventory.recipe r ' +
     '  ON r.recipe_id = s.recipe_id ' +
     'WHERE r.recipe_id = ? ORDER BY s.step_num', [id], function(error, results, fields) {
    fnWhenDone(results);
  });
};

module.exports.GetIngredientsForRecipe = function(id, fnWhenDone) {
  var con = connectionFact.CreateConnection(mysql);
  con.connect();
  con.query(
     'SELECT ' +
     'i.* ' +
     'FROM ' +
     'inventory.ingredient i ' +
     'INNER JOIN inventory.recipe_ingredient_assoc assoc ' +
     '  ON assoc.ingredient_id = i.ingredient_id ' +
     'INNER JOIN inventory.recipe r ' +
     '  ON r.recipe_id = assoc.recipe_id ' +
     'WHERE r.recipe_id = ?', [id], function(error, results, fields) {
    fnWhenDone(results);
  });
};
