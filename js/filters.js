angular.module('matterFilters', []).filter('isOpen', function() {
  return function(input, isEnabled) {
    
    if (isEnabled) {
      var result = [];

      // iterate through matters and exclude closed ones in result
      angular.forEach(input, function(matter) {
              
        if (matter.status !== 'closed') {
          result.push(matter)            
        };
      });
      return result;

    } 
    return input;
    


  };
});