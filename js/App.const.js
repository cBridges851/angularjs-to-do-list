const app = angular.module("todoApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/add-task", {
            templateUrl: "/views/add-task.html"
        })
        .otherwise({
            redirectTo: "/add-task"
        });

}]);

export { app }