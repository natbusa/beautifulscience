'use strict';

/**
 * @ngdoc function
 * @name autoscienceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the autoscienceApp
 */
app.controller('datasetCtrl', function ($scope, $routeParams, $http) {
  var id= $routeParams.id;
  $http({
    method: 'GET',
    url: '/cog/datasets/'+id+'/stats'
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.d = response.data
    console.log(response.data)

    $scope.charts=[]
    response.data.vars.forEach(function(item) {
      $http.get('/cog/datasets/'+id+'/variables/'+item.id+'/charts/1').then(
              function (response) {    $scope.charts[item.id] = response.data }
      );
    });

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

});
