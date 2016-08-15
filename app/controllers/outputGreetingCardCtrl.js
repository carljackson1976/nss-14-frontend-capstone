app.controller("outputGreetingCardCtrl", function($scope, $location, $http, firebaseURL, cardFactory, AuthFactory, $route){
	$scope.userCards = null;

    let userID = AuthFactory.getUser();


	cardFactory.getCard(userID).
	then(function(result){
		console.log(result);
		$scope.userCards = result;
	})

	$scope.deleteCard = function(id){
        cardFactory.deleteCard(id).
        then(function(result){
        	$route.reload();
        })
	}



});