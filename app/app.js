let todoApp = angular.module("todoApp", ["ui.directives", "ui.filters"])

todoApp.run(function () {
    console.log("I am running")
});

todoApp.controller("todoAppController", ["$scope", function ($scope) {
    $scope.name = "Christa"
    $scope.labelObject = [
        {
            "name": "Independent Learning",
            "cssLabel":"label-independent"
        },
        {
            "name": "University",
            "cssLabel":"label-university"
        }
    ]

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
        let labelClass = null;
        for (let label of $scope.labelObject) {
            if (label.name === $scope.newTask.label) {
                labelClass = label.cssLabel;
                break;
            }
        }

        $scope.tasks.unshift({
            "name": $scope.newTask.name,
            "label": $scope.newTask.label,
            "labelClass": labelClass,
            "complete": false        
        });
    }

    $scope.completeTask = function(task, complete) {
        const selectedTask = $scope.tasks[$scope.tasks.indexOf(task)]
        selectedTask.complete = complete
    }

    $scope.deleteTask = function(task) {
        $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    }
}])