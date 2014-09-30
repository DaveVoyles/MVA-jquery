"use strict";

angular.module('MainApp', [
])
    
.controller("MainController", function($scope, $http){
 $http.get('assets/data/evangelists.json')
       .then(function(res){
          $scope.categories = res.data.evangelist;                
       });

  $scope._name     = "Default Name";
  $scope._location = "Default Location";
  $scope.user      = {

    name:function(theName){
      if(angular.isDefined(theName)){
        this._name = theName;
      }
      return this._name;
    },

    location:function(theLocation){
      if(angular.isDefined(theLocation)){
        this._location = theLocation;
      }
      return this._location;
    }
  }

 function addName(user){
  $scope.categories.push(user);
 }

 $scope.addName = addName;

})