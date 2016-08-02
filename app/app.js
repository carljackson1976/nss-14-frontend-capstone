var app = angular.module("MadLibs", ["ngRoute"])
  .constant("firebaseURL", "https://madlib-demo.firebaseio.com/");

app.config(function($routeProvider) {
  let authConfig = {
    apiKey: "AIzaSyCOOGMthG0zFso2EchsmuqJ0ZTSqx7sV_4",
    authDomain: "madlib-demo.firebaseapp.com"
  }

  firebase.initializeApp(authConfig);

  $routeProvider.
   when('/select', {
     templateUrl: 'partials/selectGreetingCard.html',
     controller: 'selectGreetingCardCtrl'
   })
   .when('/', {
     templateUrl: 'partials/loginRegister.html',
     controller: 'loginCtrl'
   })
   .when('/input', {
     templateUrl: 'partials/inputGreetingCard.html',
     controller: 'inputGreetingCardCtrl'
   })
   .when('/output', {
     templateUrl: 'partials/outputGreetingCard.html',
     controller: 'outputGreetingCardCtrl'
   })
   .when('/login', {
     templateUrl: 'partials/loginRegister.html',
     controller: 'loginCtrl'
   })
   .when('/logout', {
     templateUrl: 'partials/loginRegister.html',
     controller: 'loginCtrl'
   })
   .when('/holiday', {
     templateUrl: 'partials/holidayCard.html',
     controller: 'holidayCardCtrl'
     })
   .when('/beesknees', {
     templateUrl: 'partials/inputGreetingCard.html',
     controller: 'inputGreetingCardCtrl'
     })
   .when('/birthday', {
     templateUrl: 'partials/birthdayCard.html',
     controller: 'birthdayCardCtrl'
   });
 });