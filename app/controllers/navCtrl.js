app.controller("navCtrl", function($scope, $rootScope, AuthFactory, $route){
  $rootScope.userIsLoggedIn = false;

  $scope.logout = function(){
         firebase.auth().signOut()
         .then(function() {
             // Sign-out successful.
             console.log(AuthFactory.getUser(), "Logged out");
             AuthFactory.setUser(null);
       		$route.reload();
         }, function(error) {
             // An error happened.
             console.log(error);
         });
     };
});
