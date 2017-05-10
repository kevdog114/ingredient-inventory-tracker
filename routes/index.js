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
