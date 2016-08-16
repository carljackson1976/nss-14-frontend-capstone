app.controller("outputGreetingCardCtrl", function($scope, $location, $http, firebaseURL, cardFactory, AuthFactory, $route){
	$scope.userCards = null;
    $scope.editBool = true;
    let userID = AuthFactory.getUser();
    let cardToEdit = null;


	cardFactory.getCards(userID).
	then(function(result){
		console.log(result);
		$scope.userCards = result;
        cardToEdit = result.id;
	})

	$scope.deleteCard = function(id){
        cardFactory.deleteCard(id).
        then(function(result){
        	$route.reload();
        })
    };
    $scope.updateCard = function(id){
    	$scope.editBool = false;
    	cardFactory.getCard(id).
    	then(function(result){
            console.log(result);
        $scope.formData = {};
        $scope.formData.card_name = result.name;
        $scope.formData.card_text = result.text;
    	})


    }
    $scope.saveCard = function(id, url){
    	console.log(id);
    	let newObj = {};
    	newObj.name = $scope.formData.card_name;
    	newObj.text = $scope.formData.card_text;
    	newObj.uid = AuthFactory.getUser();
    	newObj.id = id;
    	newObj.url = url;
    	JSON.stringify(newObj)
    	cardFactory.updateItem(id, newObj).
    	then(function(result){
    		cardToEdit = null;
    		console.log(result);
    		$route.reload();
    	})




    }
        





});