(function() {
  'use strict';

  angular.module('hotelApp')
  .factory('serverFactory', serverFactory);

  serverFactory.$inject = ['$http'];

  function serverFactory($http) {
    var services = {
      saveQuote: saveQuote
    };

    return services;

    function saveQuote(data) {
      console.log(data);
      return $http({
        method: 'POST',
        url: '/quote',
        data: data
      })
      .then(function success(response) {
        console.log(response);
          // this callback will be called asynchronously
          // when the response is available
        }, function error(response) {
          console.log(response);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });   
    }
  }
})();
