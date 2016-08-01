app.controller("inputGreetingCardCtrl", function($scope, $location){
  $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    //1 = developer
    //2 = beesknees
    //3 = places

    $scope.storyNotDone = true;

    $scope.completeStory = function() {
      $scope.storyNotDone = false;
      $scope.completeMadLib();
    }

    $scope.doingThisMadlib = 0;

    if ($location.path() === "/beesknees"){
      $scope.doingThisMadlib = 2;
    }

    $scope.completeMadLib = function() {
      $scope.madLibBeesknees = `""`;
    }

});
