angular.module('MainApp',[




])

.controller("MainController",function($scope){

	$scope.categories =[
		 {"name":"Dave Voyles","location":"Philadelphia"},
         {"name":"Stacey Mulcahey","location":"New York"},
         {"name":"Jason Fox","location":"Dallas"}
         ]
  $scope._name = "stacey";
  $scope._location = "nyc";
  $scope.user ={
  	name:function(theName){
  		if(angular.isDefined(theName))
  		{
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