var appControllers = angular.module('appControllers', []);

appControllers.controller('employeeCtrl', [
	'$scope',
	'$http',
	'$routeParams',
	'employeeService',// potrzebne przy mimifikacji
	function($scope, $http, $routeParams, employeeService) {

		console.log("employeeCtrl")
		$scope.employees = [];

		var employeeId = $routeParams.employeeId;

		employeeService.allEmployees($scope);
		$scope.dodajPracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc) {
			employeeService.addEmployee($scope, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		};
		$scope.usunPracownika = function(id) {
			$scope.employees.splice(id,1);
			employeeService.deleteEmployee($scope,id);
		};

		employeeService.employeeData($scope,employeeId);
		$scope.zaktualizujDanePracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc){
			employeeService.updateEmployeeData($scope,employeeId, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		}
}]);