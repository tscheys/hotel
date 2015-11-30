(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('PriceoffersCtrl', PriceoffersCtrl);

  PriceoffersCtrl.$inject = ['serverFactory'];

  function PriceoffersCtrl(serverFactory) {
    var self = this;

    function showQuotes() {
      serverFactory.getQuotes()
      .then(function success(data) {
        self.quotes = data;
        console.log(data);
      }, function error(resp) {
        console.log(resp);
      });
    };
    
  }

})();
