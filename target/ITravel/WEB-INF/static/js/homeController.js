 // create the controller and inject Angular's $scope
    iTravelApp.controller('homeController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    iTravelApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    iTravelApp.controller('contactController', function($scope, homeService) {
        $scope.message = 'Contact us! JK. This is just a demo.';       
       
    	
        $scope.contactUsInfoBtn = function () {
        	alert("Buton Clicked" +$scope.name +" " + $scope.email + " " + $scope.message +" " + $scope.subject);
            $scope.myTxt = "You clicked submit!";
            
            var contactUsInfo = {
            	name : $scope.name,
            	email: $scope.email ,
            	subject : $scope.subject,
            	message : $scope.message
            	
            }
            
            homeService.putContactUsInfo(contactUsInfo).then(function(response){
            	$scope.response = reponse.data;
            }); 	
            
        }
        
    });
    
