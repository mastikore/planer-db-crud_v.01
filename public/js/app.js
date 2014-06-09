var mainApp = angular.module('mainApp', [
    'ngRoute',
    'appControllers',
    'appServices'
]);
mainApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/employees', {
                templateUrl: 'views/employee-list.html',
                controller: 'employeeCtrl'
            }).
            when('/employee/:employeeId', {
                templateUrl: 'views/employee-details.html',
                controller: 'employeeCtrl'
            }).
            otherwise({
                redirectTo: '/employees'
            });
 }]);
