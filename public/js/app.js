var mainApp = angular.module('mainApp', [
    'ngRoute',
    'appControllers',
    'appServices',
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
            when('/courses', {
                templateUrl: 'views/course-list.html',
                controller: 'courseCtrl'
            }).
            when('/course/:courseId', {
                templateUrl: 'views/course-details.html',
                controller: 'courseCtrl'
            }).
            when('/procedures', {
                templateUrl: 'views/procedure-list.html',
                controller: 'procedureCtrl'
            }).
            when('/procedure/:procedureId', {
                templateUrl: 'views/procedure-details.html',
                controller: 'procedureCtrl'
            }).
            when('/rooms', {
                templateUrl: 'views/room-list.html',
                controller: 'roomCtrl'
            }).
            when('/room/:roomId', {
                templateUrl: 'views/room-details.html',
                controller: 'roomCtrl'
            }).
            when('/subjects', {
                templateUrl: 'views/subject-list.html',
                controller: 'subjectCtrl'
            }).
            when('/subject/:subjectId', {
                templateUrl: 'views/subject-details.html',
                controller: 'subjectCtrl'
            }).
            otherwise({
                redirectTo: '/employees'
            });
    }]);