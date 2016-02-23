// Copying stuff from the internet is fine, right?
// What could go wrong?
// http://stackoverflow.com/questions/17289448/angularjs-to-output-plain-text-instead-of-html

var skylandersFilters = angular.module('skylandersFilters', [])

skylandersFilters.filter('htmlToPlaintext', function() {
    return function(text) {
      return angular.element(text).text();
    }
  }
);

// https://gist.github.com/paulakreuger/b2af1958f3d67f46447e

skylandersFilters.filter('capitalizeFirstLetter', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});