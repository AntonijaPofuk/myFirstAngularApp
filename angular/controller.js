var app = angular.module("mainApp", []);

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

app.controller("jsonReadData", function($scope, $http) {
  $http.get("database.json")
  .then(function (res) {
      $scope.myObject=res.data.records;
  });   
  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.myObject.length; i++){
        var item = $scope.myObject[i];
        var itemInt = parseInt(item.Age);
        console.log(typeof(itemInt));
        total += itemInt;
    }
    return total;
  }             
});

app.filter('searchFor', function(){
  // All filters must return a function
  return function(arr, searchString){
      if(!searchString){
          return arr;
      }
      var result = [];
      searchString = searchString.toLowerCase();
      angular.forEach(arr, function(item){
          if(item.Name.toLowerCase().indexOf(searchString) !== -1){
              result.push(item);
          }
      });
      return result;
  };
});

app.filter('Demofilter',function(){
  return function(input)
  {
      return input + " Tutorial"
  }
});






