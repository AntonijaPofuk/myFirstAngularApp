var app = angular.module("mainApp", []);

app.filter('Demofilter',function(){
    return function(input)
    {
        return input.toString() + " Tutorial"
    }
});