app.controller('MatterListController', ['$scope', '$http', function($scope, $http) {
  
  $http.get('js/data/matters.json').success(function(data) {
    $scope.mattersByClient = data;
  });
  
  // init defaults
  $scope.selectedAll = false;
  $scope.viewing = null;
  $scope.enableClosedFilter = false;
 
  // show edit view of matter clicked on 
  $scope.viewMatter = function(matter) {
    $scope.viewing = matter;
  };  

  // toggle select all 
  $scope.checkAll = function () {
    
    //toggle value
    if ($scope.selectedAll) {
      $scope.selectedAll = false;
    } else {
      $scope.selectedAll = true;
    };

    // iterate through matters to assign new selectedAll checkbox value
    angular.forEach($scope.mattersByClient, function (group) {
      angular.forEach(group, function(matters) {
        angular.forEach(matters, function(matter) {
          matter.Selected = $scope.selectedAll;
        });
      });
    });

  };  

 
}]);



