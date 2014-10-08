"use strict";

angular.module('MainApp', [
])



    
.controller("MainController", function ($scope, $http) {

    var config = {
        headers: {
            'X-ZUMO-APPLICATION': 'ImDNVYiBYFCuENASFmQupAMlDUzamP37'
        }
    };

  getNames();

  $scope.people = [];
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

  function getNames() {
      $http.get('https://evangelists.azure-mobile.net/tables/people', config)
   .then(function (res) {
       console.log(res);
       $scope.people = res.data;
   });
  }
// add in resource 
 function addName(user){
     //$scope.categories.push(user);
     $http.post('https://evangelists.azure-mobile.net/tables/people', user, config)
       .then(function (res) {
           $scope.getNames();
       });
 }

 $scope.addName = addName;
 $scope.getNames = getNames;

})

