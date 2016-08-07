app.controller("outputGreetingCardCtrl", function($scope, $location, $http, firebaseURL){

	$scope.fileInput = null;
	// $scope.cardName = null;
	$scope.hideElements = false;


	$scope.cardCreated = function() {

		$scope.hideElements = true;
        let uid = currentUser.uid;
		let cardObj = {name: $scope.fileInput}
		cardObj = JSON.stringify(cardObj);
		let queryString = `${firebaseURL}/cards.json?`;
		$http.post(queryString, cardObj)
		.success(function(id) {
			console.log("Your card was put at id", id);
		});

	}



});