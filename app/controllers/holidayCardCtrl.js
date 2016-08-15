app.controller("holidayCardCtrl", function($scope, $location, $http, firebaseURL, AuthFactory){

	// $scope.fileInput = null;
	$scope.cardName = null;
	$scope.hideElements = false;


	$scope.cardCreated = function() {

		$scope.hideElements = true;

		let cardObj = {name: $scope.cardName, uid:AuthFactory.getUser(), url:"img/holiday1.jpg", 
		text:"Hoping your Holiday Season is as great as you are! With Love,"}
		cardObj = JSON.stringify(cardObj);
		let queryString = `${firebaseURL}/cards.json?`;
		$http.post(queryString, cardObj)
		.success(function(id) {
			console.log("Your card was put at id", id);
		});

	}



});
