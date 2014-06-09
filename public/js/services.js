angular.module('appServices',[])
.factory('employeeService',['$http',function($http){
	return {
		allEmployees : function($scope){
			$http.get('/api/getAllEmployees').success(function(data, status, headers, config) {
				$scope.employees = data;
			});
		},
		addEmployee : function($scope, imie, nazwisko, tytul, email, przedmiot, minimumEtatowe, rodzajZatrudnienia, dostepnosc){
			$http.post('/api/addNewEmployee',  {
					nowyId : employeeId,
					noweImie : imie,
					noweNazwisko : nazwisko,
					nowyTytul : tytul,
					nowyMail : email,
					nowyPrzedmiot : przedmiot,
					noweMinimumEtatowe : minimumEtatowe,
					nowyRodzajZatrudnienia : rodzajZatrudnienia,
					nowaDostepnosc : dostepnosc
				}).success(function(){
					$http.get('/api/getAllEmployees').success(function(data, status, headers, config) {
					$scope.employees = data;
				});
			});
		},
		deleteEmployee : function($scope,id){
			$http.post('/api/deleteEmployee/',{
					id:id,
				});
		},
		employeeData : function($scope,id){
			$http.get('/api/getEmployeeData/' + id).success(
			function(data) {
				$scope.selectedEmployee = data;
			});
		},
		updateEmployeeData : function($scope, employeeId, imie, nazwisko, tytul, email, przedmiot, minimumEtatowe, rodzajZatrudnienia, dostepnosc){
			$http.post('/api/updateEmployeeData',{
			index : employeeId,
			firstName : imie,
			surname : nazwisko,
			title : tytul,
			email : email,
			speciality : przedmiot,
			minimumStaffing : minimumEtatowe,
			employmentType : rodzajZatrudnienia,
			availability : dostepnosc
		});
		}
	}
}]);