app.controller("inputGreetingCardCtrl", function($scope, $location, cardFactory){
  $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    //1 = developer
    //2 = beesknees
    //3 = places
    let uid = firebase.auth().currentUser.uid;
    console.log(uid);

    $scope.storyNotDone = true;


    $scope.$watch('fileInput', function() {
      console.log($scope.fileInput);
    });


    $scope.completeStory = function() {
      $scope.storyNotDone = false;
      $scope.completeMadLib();
      let data = {text: $scope.cardText, uid: uid};
      cardFactory.createCard(data)
      .then(function(finCard){
        console.log(finCard);
      })
    }

    $scope.doingThisMadlib = 0;

    if ($location.path() === "/beesknees"){
      $scope.doingThisMadlib = 2;
    }

    $scope.completeMadLib = function() {
      $scope.madLibBeesknees = `I have a ${$scope.adjective0} group of classmates. We all ${$scope.verb0} on Fridays and grab a couple ${$scope.pluralNoun0}. Mostly, we complain about ${$scope.nameOfTA0} and her stupid ${$scope.noun0}. It's ${$scope.adjective1} to get to hang out with such a ${$scope.adjective2} group of people. ${$scope.nameOfClassmate0} can sometimes ${$scope.verb1} too loudly but it doesn't ${$scope.verb2} me too much.`
    }

});
