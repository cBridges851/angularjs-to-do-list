let todoApp = angular.module("todoApp", ["ui.directives", "ui.filters"])

todoApp.run(function () {
    console.log("I am running")
});

todoApp.controller("todoAppController", ["$scope", function ($scope) {
    $scope.name = "Christa"
    $scope.labelObject = {
        "Independent Learning": "label-independent",
        "University": "label-university",
    }
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
        },
    ]

    $scope.addNewTask = function() {
        $scope.tasks.unshift({
            "name": $scope.newTask.name,
            "label": $scope.newTask.label,
            "labelClass": $scope.labelObject[$scope.newTask.label],
            "complete": false        
        });
    }

    $scope.completeTask = function(task, complete) {
        const selectedTask = $scope.tasks[$scope.tasks.indexOf(task)]
        selectedTask.complete = complete
    }
}])