app.controller("holidayCardCtrl", function($scope, $location, $http, firebaseURL){

	$scope.cardName = null;
	$scope.hideElements = false;


	$scope.cardCreated = function() {

		$scope.hideElements = true;

		let cardObj = {name: $scope.cardName}
		cardObj = JSON.stringify(cardObj);
		let queryString = `${firebaseURL}/cards.json?`;
		$http.post(queryString, cardObj)
		.success(function(id) {
			console.log("Your card was put at id", id);
		});

	}



});

