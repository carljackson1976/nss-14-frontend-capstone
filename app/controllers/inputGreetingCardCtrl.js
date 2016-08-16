app.controller("inputGreetingCardCtrl", function($scope, $location, $http, firebaseURL, cardFactory, AuthFactory){
  
  $scope.fileInput = null;
  $scope.cardName = null;
  $scope.hideElements = false;
  $scope.formData = {};



  $scope.cardCreated = function(url) {

    // $scope.hideElements = true;

    let cardObj = {};
    cardObj.name = $scope.formData.card_name;
    cardObj.text = $scope.formData.card_text;
    cardObj.url = url;
    cardObj.uid = AuthFactory.getUser();
    console.log(cardObj);
    cardFactory.createCard(cardObj).
    then(function(result){
      console.log(result);
    })

  }

  cardFactory.getPicsFromFirebase()
  .then(function(result){
    console.log(result);
    $scope.cardimages=result;
  })

   // //accepts message to be deleted
   //  deleteCard.delete=function(cardCreated()){
   //  currentCard.addEventListener("click",function(){
   //    //checks if delete button of message is pressed
   //      if(event.target.value==="delete"){
   //        //deletes current message
   //        currentCard.remove();
   //        //if the output div is empty it disbles the delete all button
   //        if ( document.getElementById('outputCard').innerHTML === "" ) {
   //          document.getElementById("deleteMssgsBtn").disabled=true;
   //          document.getElementById("outputCard").innerHTML = `<h1 id="noMessages">No Messages Here!</h1>`;
   //        }//end second if statement
   //      };//end first if statement

});
