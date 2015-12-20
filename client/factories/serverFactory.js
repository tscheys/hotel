(function() {
  'use strict';

  angular.module('hotelApp')
  .factory('serverFactory', serverFactory);

  serverFactory.$inject = ['$http'];

  function serverFactory($http) {
    var services = {
      saveQuote: saveQuote,
      getQuotes: getQuotes
    };

    return services;

    function saveQuote(data) {
      return $http({
        method: 'POST',
        url: '/quote',
        data: data
      })
      .then(function success(resp) {
        console.log(resp);
      })
      .catch(function error(resp) {
        throw resp;
      });   
    }

    function getQuotes(callback) {
      return $http({
        method: 'GET',
        url: '/quotes'
      }).then(function success(resp) {
        callback(resp.data);
      }, function error(resp) {
        throw resp;
      })
    }
  }
})();
