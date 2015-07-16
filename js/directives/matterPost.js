app.directive('matterPost', function() {
  return {
    restrict: 'E',
    scope: { 
    	item: '=',
    	list: '='
    },
    templateUrl: 'js/directives/matterPost.html',
    link: function(scope, element, attrs) {
    	
		//define function to close matter
	  	scope.closeMatter = function(item) { 
	    	item.status = 'closed';
	  	};

		//define function to delete matter
	  	scope.deleteMatter = function(item,list) { 
	    	list.splice( list.indexOf(item), 1 );
	    };
	}
  }
});