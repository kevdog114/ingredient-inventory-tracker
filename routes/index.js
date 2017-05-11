var Ingredients = require('../ingredient_data');

exports.index = function(req, res){
  res.render('index', {
//    locals: {
//      app_name: "This is my program"
//    }
  });
};

exports.ingredients = function(req, res){
  res.render('ingredients');
};

exports.api = {

  ingredients: function(req, res) {
    Ingredients.GetIngredients(function(data) {
      res.json(data);
    });
  },
  
  ingredientById: function(req, res) {
    Ingredients.GetIngredientById(req.params.ingredient_id, function(data) {
      res.json(data);
    });
  },

  recipes: function(req, res) {
    Ingredients.GetRecipes(function(data) {
      res.json(data);
    })
  },
  
  recipesById: function(req, res) {
    Ingredients.GetRecipeById(req.params.recipe_id, function(data) {
      res.json(data);
    })
  },
  stepsForRecipe: function(req, res) {
    Ingredients.GetStepsForRecipe(req.params.recipe_id, function(data) {
      res.json(data);
    })
  },
  ingredientsForRecipe: function(req, res) {
    Ingredients.GetIngredientsForRecipe(req.params.recipe_id, function(data) {
      res.json(data);
    })
  }
};

