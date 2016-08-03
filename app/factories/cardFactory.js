app.factory("cardFactory", function(firebaseURL, $q, $http){
	let createCard = function(data) {
		return $q (function(resolve, reject){
			$http.post(`${firebaseURL}/cards.json`, data)
			.success(function(card){
				resolve(card)

			})
		})
	}
	return {createCard};
})