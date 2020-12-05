var app = angular.module("mainApp", []);

/* 
var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'index.html'
	})
	.when('/login',{
		templateUrl: 'login.html'
	})
	.when('/dashboard',{
		resolve: {
			"check":function($location, $rootScope){
				if ($rootScope.loggedIn){
					$location.path('/');
				} 
				else {
					templateUrl: 'dashboard.html';
				} 
			}
		}	
	})
	.otherwise({
		template: 'ERROR 404!'
	});
});

app.controller('loginCtrl', function($scope, $location){
    $scope.submit = function(){        
        if ($scope.username=='admin' && $scope.password=='admin' ){
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
        } else {
			alert("Wrong input!");
		}
    };
});
*/

app.controller("loopCtrl", function ($scope) {
  var range = 10;
  var myRange = [];
  for (i = 0; i < range; i++) {
    myRange.push(i);
  }
  $scope.myRange = myRange;
});

app.controller("counterCtrl", function ($scope) {
  $scope.counter = -1;
  $scope.$watch("myText", function (newValue, oldValue) {
    $scope.oldValue = $scope.counter - 1;
    $scope.newValue = $scope.counter;
    $scope.counter++;
  });
});

app.controller("personCtrl", function ($scope) {
  $scope.firstName;
  $scope.lastName;
  $scope.fullName = function () {
    return $scope.firstName + " " + $scope.lastName;
  };
});

app.value("myValue", 50);

app.controller("myCtrlTest", function ($scope, myValue) {
  console.log("my value is: " + myValue);
});

app.factory("myFactory", function () {
  var a = 10;
  return a;
});
app.controller("myFactoryTest", function ($scope, myFactory) {
  console.log("my factory value is: " + myFactory);
});

app.service("random", function () {
  var randomNumber = Math.random();
  this.generate = function () {
    return randomNumber;
  };
});

app.controller("myServiceTest", function ($scope, random) {
  $scope.generateRandom = function () {
    var generatedNumber = random.generate();
    $scope.randomNumber = generatedNumber;
  };
});

app.controller("selectOption", function ($scope) {
  $scope.names = ["Java", "PHP", ".Net", "AngularJS", "C/C++"];
});




