'use strict';

angular.module('angprojApp')
        .controller('MainCtrl', function($scope) {
            console.log($scope.$parent);
            $scope.$parent.routeActive = 'home';


            $scope.persons = [
                'Petro',
                'Diana',
                'Veronica'
            ];


            $scope.company = {
                name: 'Arobs',
                product: 'Smailo',
                service: 'Web development',
                settled: 1998,
                emails: [
                    {
                        name: 'Support',
                        email: 'support@arobs.com',
                        importancy: 'high'
                    },
                    {
                        name: 'Marketing',
                        email: 'marketing@arobs.com',
                        importancy: 'low'
                    },
                    {
                        name: 'Sales',
                        email: 'sales@arobs.com',
                        importancy: 'none'
                    }
                ]
                };
            console.log($scope.company);
        });


