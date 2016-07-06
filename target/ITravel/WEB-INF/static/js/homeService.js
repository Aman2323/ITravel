'use strict';

iTravelApp.factory('homeService', function($http) {
	return{
		putContactUsInfo : function(contactUsInfo){
			return $http.put("http://localhost:8080/ITravel/contactUsInfo",contactUsInfo).then(function(response){
				aler("Response status is" +response.status)
				return response;
			},
			function(errResponse){
				
			}
			);
		}
	};
});