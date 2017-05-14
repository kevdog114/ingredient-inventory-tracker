"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_material = require("angular-material");
var angular = require("angular");
//import cam from './inv.cam.js';
var Quagga = require("quagga");
var ui_router = require("angular-ui-router");
var app = angular.module('app', [angular_material, ui_router]);
app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'recipeDetail',
        url: '/recipes/:rid',
        templateUrl: 'scripts/tmpl.recipe_detail.html'
    });
});
var WebService = (function () {
    function WebService($http) {
        var _this = this;
        this.GetAllIngredients = function () {
            return _this.$http({
                method: "GET",
                url: "/api/ingredients"
            });
        };
        this.GetAllRecipes = function () {
            return _this.$http.get("/api/recipes");
        };
        this.$http = $http;
    }
    return WebService;
}());
var RecipesCtrl = (function () {
    function RecipesCtrl(webService) {
        var _this = this;
        this.Recipes = [];
        this.LoadRecipes = function () {
            _this.webService.GetAllRecipes().then(function (recipes) {
                _this.Recipes = recipes.data;
            });
        };
        this.webService = webService;
        this.LoadRecipes();
    }
    return RecipesCtrl;
}());
var IngredientsCtrl = (function () {
    function IngredientsCtrl(webService) {
        var _this = this;
        this.Ingredients = [];
        this.LoadIngredients = function () {
            _this.webService.GetAllIngredients().then(function (data) {
                _this.Ingredients = data.data;
            });
        };
        this.InitCam = function () {
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector("#cam")
                },
                decoder: {
                    readers: ["code_128_reader"]
                }
            }, function (err) {
                if (err) {
                    alert(err);
                    return;
                }
                console.log("Quagga init success");
                //_this.SetWatching(true);
            });
        };
        this.SetWatching = function (isOn) {
            _this.IsWatching = isOn;
            if (isOn) {
                _this.InitCam();
                //Quagga.start();
            }
            else {
                Quagga.stop();
            }
        };
        this.IsWatching = false;
        this.webService = webService;
        this.LoadIngredients();
    }
    return IngredientsCtrl;
}());
app.service("WebService", ["$http", WebService]);
app.controller('IngredientsCtrl', ["WebService", IngredientsCtrl]);
app.controller('RecipesCtrl', ["WebService", RecipesCtrl]);
