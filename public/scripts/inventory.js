import angular from 'angular';
//import cam from './inv.cam.js';
import Quagga from 'quagga'

var app = angular.module('app', []);

var ingredientsCtrl = (function() {
  function ingredientsCtrl() {
    this.IsWatching = false;
    var _this = this;
    this.SetWatching = function(isOn) {
      _this.IsWatching = isOn;
      if(isOn) {
        this.InitCam();
        //Quagga.start();
      } else {
        Quagga.stop();
      }
    };

    this.InitCam = function() {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#cam")
        },
        decoder: {
          readers: ["code_128_reader"]
        }
      }, function(err) {
        if(err) {
          alert(err);
          return;
        }
        
        console.log("Quagga init success");
        //_this.SetWatching(true);
      });
    }

    //this.InitCam();
  };
  
  return ingredientsCtrl;
})();

app.controller('ingredientsCtrl', ingredientsCtrl);
