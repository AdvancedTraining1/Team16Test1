var express = require('express');
var app = express();

var recipes = [{name:'宫保鸡丁'},{name:'云南米线'}];

app.get('/recipe/allRecipes', function(req, res){
    getAllRecipe(req,res, function(err, user){
    	if (err) return next(err);
    	res.send(req.allRecipes);
    });
});

function getAllRecipe(req,res, next) {
  console.log("查询全部菜谱...");
  if (recipes) {
    req.allRecipes = recipes;
    next();
  } else {
    console.log('尚无菜谱');
  }
}

app.listen(3000);
