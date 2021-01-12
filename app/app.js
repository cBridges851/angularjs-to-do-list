let todoApp = angular.module("todoApp", [])

todoApp.run(function() {
    console.log("I am running")
});

todoApp.controller("todoAppController", ["$scope", function($scope) {
    $scope.name = "Christa"
    $scope.tasks = [
        {
            "name": "Make to-do list application in AngularJS",
            "label": "Independent Learning",
            "labelClass": "label-independent",
            "complete": false
        },
        {
            "name": "Make a code style checker",
            "label": "University",
            "labelClass": "label-university",
            "complete": false
        }
    ]
}])