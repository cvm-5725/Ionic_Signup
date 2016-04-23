angular.module('starter.controllers', ['ngOpenFB'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
 
$scope.fbLogin = function () {

ngFB.login(

function (response) {

if (response.status === 'connected') {

console.log('Facebook login succeeded');

$scope.closeLogin();

} else {

alert('Facebook login failed');

}

},

{scope: 'email,publish_actions'});

};

$scope.fbLogout = function () {

ngFB.logout(function(response) {
         console.log('You are logged out!');
      })
  };

})
.controller('ProfileCtrl', function ($scope, ngFB) {
    ngFB.api({
        path: '/me/',
        params: {fields: 'id,name,gender,email,picture'}
    }).then(
        function (user) {
            $scope.user = user;
        },
        function (error) {
            alert('Facebook error: ' + error.error_description);
        });


});

