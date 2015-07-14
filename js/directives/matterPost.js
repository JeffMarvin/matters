app.directive('matterPost', function() {
  return {
    restrict: 'E',
    scope: { 
    	item: '='
    },
    templateUrl: 'js/directives/matterPost.html'
  };
});