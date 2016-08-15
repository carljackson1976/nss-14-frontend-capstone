app.factory("cardFactory", function(firebaseURL, $q, $http){
	let createCard = function(data) {
		return $q (function(resolve, reject){
			$http.post(`${firebaseURL}/cards.json`, data)
			.success(function(card){
				resolve(card)

			})
		})
	}
	const getPicsFromFirebase = () => {
    return $q((resolve, reject) => {
      $http.get(`${firebaseURL}/cardimages.json`)
        .success((dataObject) => {
          resolve(dataObject);
        })
        .error((error) => {
          reject(error);
        });
    });
  };

 let getCard = function(uid) {
    let cards = [];
    return $q(function(resolve, reject) {
      $http.get(`${firebaseURL}/cards.json?orderBy="uid"&equalTo="${uid}"`)
        .success(function(oweskiObject) {
          let oweskiCollection = oweskiObject;
          Object.keys(oweskiCollection).forEach(function(key) {
            oweskiCollection[key].id = key;
            cards.push(oweskiCollection[key]);
          });
          resolve(cards);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  let deleteCard = function(id) {
    return $q(function(resolve, reject) {
      $http.delete(`${firebaseURL}/cards/${id}.json`)
        .success(function(resolveObject) {
 //          let oweskiCollection = oweskiObject;
 //          Object.keys(oweskiCollection).forEach(function(key) {
 //            oweskiCollection[key].id = key;
 //            cards.push(oweskiCollection[key]);
 //          });
          resolve(resolveObject);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };
	return {createCard, getPicsFromFirebase, getCard, deleteCard};
})