import * as angular_material from 'angular-material';
import * as angular from 'angular';
//import cam from './inv.cam.js';
import * as Quagga from 'quagga';
import * as ui_router from 'angular-ui-router';

var app = angular.module('app', [angular_material, ui_router]);

app.config(($stateProvider: angular.IStateProvider) => {
  $stateProvider.state({
    name: 'recipeDetail',
    url: '/recipes/:rid',
    templateUrl: 'scripts/tmpl.recipe_detail.html'
  });
});

class WebService
{
  private $http: angular.IHttpService;

  constructor($http: angular.IHttpService)
  {
    this.$http = $http;
  }

  public GetAllIngredients = () => {
    return this.$http({
      method: "GET",
      url: "/api/ingredients"
    });
  };

  public GetAllRecipes = () => {
    return this.$http.get("/api/recipes");
  };
}

class RecipesCtrl
{
  public Recipes: Array<any> = [];
  private webService: WebService;

  constructor(webService: WebService) {
    this.webService = webService;
    this.LoadRecipes();
  }

  public LoadRecipes = (): void => {
    this.webService.GetAllRecipes().then((recipes: any) => {
      this.Recipes = recipes.data;
    });
  };

  //public ViewRecipe = (recipe_id: number): void => {
  //}
}

class IngredientsCtrl
{
  public IsWatching: boolean;
  public Ingredients: Array<any> = [];
  private webService: WebService;


  constructor(webService: WebService) {
    this.IsWatching = false;
    this.webService = webService;

    this.LoadIngredients();
  }

  public LoadIngredients = (): void => {
    this.webService.GetAllIngredients().then((data: any) => {
      this.Ingredients = data.data;
    });
  };

  public InitCam = (): void => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#cam")
      },
      decoder: {
        readers: ["code_128_reader"]
      }
    }, (err:any): void => {
      if(err) {
        alert(err);
        return;
      }
      
      console.log("Quagga init success");
      //_this.SetWatching(true);
    });
  };

  public SetWatching = (isOn: boolean): void => {
    this.IsWatching = isOn;
    if(isOn) {
      this.InitCam();
      //Quagga.start();
    } else {
      Quagga.stop();
    }
  };
}

app.service("WebService", ["$http", WebService]);
app.controller('IngredientsCtrl', ["WebService", IngredientsCtrl]);
app.controller('RecipesCtrl', ["WebService", RecipesCtrl]);
