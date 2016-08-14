app.factory("AuthFactory", function() {

let currentUserId = null;
let provider = new firebase.auth.GoogleAuthProvider();


// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log("user logged in", user.uid);
//     currentUserId = user.uid;
//   } else {
//     console.log("user not logged in");
//   }
// });

let authWithProvider = function() {
  return firebase.auth().signInWithPopup(provider);
};

let logout = function() {
  currentUserId = null;
  return firebase.auth().signOut();
  // this signOut is a METHOD****
};

let isAuthenticated = function() {
  return (currentUserId) ? true : false;
};

let getUser = function () {
  return currentUserId;
};

let setUser = function (uid) {
  currentUserId = uid;
}

let createWithEmail = function (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

  let authWithEmail = function (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

return { authWithProvider, isAuthenticated, getUser, logout, setUser, createWithEmail, authWithEmail };
});

app.run(["$location", "FBCreds", "AuthFactory", function ($location, FBCreds, AuthFactory) {
  const authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain,
    databaseURL: FBCreds.databaseURL,
    storageBucket: FBCreds.storageBucket
  };

  firebase.initializeApp(authConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      AuthFactory.setUser(user.uid); //set current user on login, switch to main view
      $location.url("/select");
    } else {
      AuthFactory.setUser(null); //this is to rest the current user to hide board.
      $location.url("/login");
    }
  });
}]);
