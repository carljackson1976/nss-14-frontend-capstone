app.controller("inputGreetingCardCtrl", function($scope, $location, $http, firebaseURL, cardFactory, AuthFactory){
  
  $scope.fileInput = null;
  $scope.cardName = null;
  $scope.hideElements = false;


  $scope.cardCreated = function() {

    // $scope.hideElements = true;

    let cardObj = {};
    cardObj.name = $scope.card_name;
    cardObj.text = $scope.card_text;
    cardObj.uid = AuthFactory.getUser();
    console.log(cardObj);

  }

  cardFactory.getPicsFromFirebase()
  .then(function(result){
    console.log(result);
    $scope.cardimages=result;
  })



});
