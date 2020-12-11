var app = angular.module("mainApp", ["kendo.directives"]);

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
  $http.get("data/database.json")
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

 app.controller("myKendoDatePicker", function($scope) {
  $scope.monthPickerConfig = {
    start  : "year",
    depth  : "day",
    format : "yyyy. MMMM dd.",
    change : function(e) { 
      // handler for "change" event
    var datePicker = e.sender;
    console.log("Choosen date is: " + datePicker.value());
    $scope.choosenDate = datePicker.value();
    $scope.selected = true;
    $scope.$digest();
  }
  };
});
app.controller("myBirthsday", function($scope) {});
app.controller("myOrientationMenu", function($scope) {
  $scope.orientation = "horizontal";
});

app.controller("Host", function($scope) {
    $scope.Show = function() {
      $scope.editPopup.center();
      $scope.editPopup.open();
    }
}).controller("Popup", function($scope) {
    var datasources = [{ ID: 13, Name: "ID is 13" }, 
    { ID: 14, Name: "ID is 14" }];
    $scope.datasources = datasources;
    var dataview = { DataSourceID: 14 };
    $scope.dataview = dataview;
});

app.controller("myUpdateCtrl", function($scope) {
  $scope.gridData = new kendo.data.ObservableArray([
    { artist: "Pink Floyd", track: "The dark side of the Moon" },
    { artist: "The Beatles", track: "I've just seen a face" },
    { artist: "Queen", track: "Innuendo" }
  ]);
  $scope.gridColumns = [
    { field: "artist", title: "Artist" },
    { field: "track", title: "Track" }
  ];
  $scope.update = function() {
    $scope.gridData[0].set("track", "Hey you");
  };
  $scope.onChange = function(data){
    $scope.selected = data;
  };
});

app.controller("myGridCtrl", function ($scope) {
  $scope.ds = new kendo.data.DataSource({
    pageSize: 5,
    data: records,
    schema:{
      model: {
          fields: {
              Name: { type: "string" },
              Age: { type: "number" },
              Color: { type: "string" }
          }
      }
  },
    group: {
      field: "Ages", aggregates: [
      { field: "Age", aggregate: "count" },
      { field: "Age", aggregate: "sum"},
      { field: "Age", aggregate: "average" },
      { field: "Age", aggregate: "count" },
      { field: "Name", aggregate: "count" }
      ]
  },
    aggregate: [
      { field: "Name", aggregate: "count" },
      { field: "Age", aggregate: "count" },
      { field: "Age", aggregate: "sum" },
      { field: "Age", aggregate: "average" },
      { field: "Age", aggregate: "min" },
      { field: "Age", aggregate: "max" },
    ],
  });
  $scope.mainGridOptions = {
    height: 500,
    pageable: true,
    columns: [
      {
        field: "Name",
        title: "Name", aggregates: ["count"], footerTemplate: "Total Count: #=count#",
        width: 200,
        template: "{{ dataItem.Name }}"
        
      },
      {
        field: "Age",
        title: "Age",
        width: 80,
        aggregates: ["sum"],
        footerTemplate: "Total Sum: #=sum#"
      },
    ],
  };
});