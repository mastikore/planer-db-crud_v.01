var appControllers = angular.module('appControllers', []);

appControllers.controller('employeeCtrl', [
	'$scope',
	'$http',
	'$routeParams',
	'employeeService',// potrzebne przy mimifikacji
	function($scope, $http, $routeParams, employeeService) {

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
}])
.controller('courseCtrl', [
	'$scope',
	'$http',
	'$routeParams',
	'coursesService',// potrzebne przy mimifikacji
	function($scope, $http, $routeParams, coursesService) {

		$scope.employees = [];

		var employeeId = $routeParams.employeeId;

		coursesService.allEmployees($scope);
		$scope.dodajPracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc) {
			coursesService.addEmployee($scope, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		};
		$scope.usunPracownika = function(id) {
			$scope.employees.splice(id,1);
			coursesService.deleteEmployee($scope,id);
		};

		coursesService.employeeData($scope,employeeId);
		$scope.zaktualizujDanePracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc){
			coursesService.updateEmployeeData($scope,employeeId, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		}
}])
.controller('procedureCtrl', [
	'$scope',
	'$http',
	'$routeParams',
	'procedureService',// potrzebne przy mimifikacji
	function($scope, $http, $routeParams, procedureService) {

		$scope.employees = [];

		var employeeId = $routeParams.employeeId;

		procedureService.allEmployees($scope);
		$scope.dodajPracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc) {
			procedureService.addEmployee($scope, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		};
		$scope.usunPracownika = function(id) {
			$scope.employees.splice(id,1);
			procedureService.deleteEmployee($scope,id);
		};

		procedureService.employeeData($scope,employeeId);
		$scope.zaktualizujDanePracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc){
			procedureService.updateEmployeeData($scope,employeeId, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		}
}])
.controller('roomCtrl', [
	'$scope',
	'$http',
	'$routeParams',
	'roomService',// potrzebne przy mimifikacji
	function($scope, $http, $routeParams, roomService) {

		$scope.employees = [];

		var employeeId = $routeParams.employeeId;

		roomService.allEmployees($scope);
		$scope.dodajPracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc) {
			roomService.addEmployee($scope, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		};
		$scope.usunPracownika = function(id) {
			$scope.employees.splice(id,1);
			roomService.deleteEmployee($scope,id);
		};

		roomService.employeeData($scope,employeeId);
		$scope.zaktualizujDanePracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc){
			roomService.updateEmployeeData($scope,employeeId, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		}
}]).controller('subjectCtrl', [
	'$scope',
	'$http',
	'$routeParams',
	'subjectService',// potrzebne przy mimifikacji
	function($scope, $http, $routeParams, subjectService) {

		console.log("subjectCtrl")
		$scope.employees = [];

		var employeeId = $routeParams.employeeId;

		subjectService.allEmployees($scope);
		$scope.dodajPracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc) {
			subjectService.addEmployee($scope, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		};
		$scope.usunPracownika = function(id) {
			$scope.employees.splice(id,1);
			subjectService.deleteEmployee($scope,id);
		};

		subjectService.employeeData($scope,employeeId);
		$scope.zaktualizujDanePracownika = function(imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc){
			subjectService.updateEmployeeData($scope,employeeId, imie, nazwisko, tytul, email, przedmiot, minimum_etatowe, rodzaj_zatrudnienia, dostepnosc);
		}
}]);