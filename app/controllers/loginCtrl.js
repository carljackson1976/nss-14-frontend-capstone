app.controller("loginCtrl", function($scope, $location, $rootScope, AuthFactory){
    $rootScope.userIsLoggedIn = true;
    $scope.registerMode = false;

    $scope.switchToRegisterMode = function() {
      $scope.registerMode = true;
    }

    $scope.switchToLoginMode = function() {
      $scope.registerMode = false;
    }

    // $scope.register = function() {

    //   AuthFactory.authWithProvider().then(function(result){
    //     $rootScope.userIsLoggedIn = true;
    //     AuthFactory.setUser = result.user.uid;
    //   console.log("register");
    //   });
    // }
    // if ($location.path() === "/login"){
    //   AuthFactory.logout();
    //   $rootScope.userIsLoggedIn = true;
    // }

    $scope.register = function () {
      AuthFactory.createWithEmail($scope.email, $scope.password)
      .then((result) => {
        AuthFactory.setUser(result.uid);
      })
    } 
    $scope.login = function () {
      console.log("hello")
      AuthFactory.authWithEmail($scope.email, $scope.password)
      .then((result) => {
        AuthFactory.setUser(result.uid);
      })
    }

});
