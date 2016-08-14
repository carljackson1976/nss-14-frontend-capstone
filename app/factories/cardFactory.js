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
	return {createCard, getPicsFromFirebase};
})