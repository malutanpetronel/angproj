'use strict';

angular.module('angprojApp')
        .controller('TaskCtrl', function($scope) {
            $scope.$parent.routeActive = 'task';
            $scope.tasks = [{
                    name: 'aa',
                    age: 12
                },
                {
                    name: "vvv",
                    age: 45
                },
                {
                    name: "dddd",
                    age: 43

                }];
            $scope.addNewTask = function(task) {
                $scope.tasks.push(task);
            };

        });
