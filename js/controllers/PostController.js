app.controller('MattersListController', ['$scope', '$http', function($scope, $http) {
  
  $http.get('data/matters.json').success(function(data) {
    $scope.matters = data;
  });

}]);



