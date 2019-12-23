import angular from "angular";

// Create an angular module named 'app'.
angular.module("app", []);

// Put application code here before bootstrap is called.
angular.module("app").controller("MainCtrl", function($scope, $http) {
  console.log("this MainCntrl is being const")
  $http.get("https://raw.githubusercontent.com/AsimShakour/angular/02_04b/builds/angular/js/data.json").then(function(response) 
    { // First function handles success
      console.log("We are successful in calling http get ");
      console.log(response.data);
      $scope.artists = response.data;
    }, function(response){
      // Second function handles error
      console.log(response.status + " " +response.statusText)
    }
  )
}
)


// Bootstrap angular onto the 'app' element, injecting the 'app' module.
angular.bootstrap(document.getElementById("app"), ["app"]);
