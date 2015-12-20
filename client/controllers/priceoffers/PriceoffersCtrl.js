(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('PriceoffersCtrl', PriceoffersCtrl);

  PriceoffersCtrl.$inject = ['serverFactory'];

  function PriceoffersCtrl(serverFactory) {
    var priceoffers = this;
    priceoffers.quotes = [];
    activate();

    function activate() {
      serverFactory.getQuotes()
      .then(function success(resp) {
        priceoffers.quotes = resp.data;
        console.log(priceoffers.quotes);
      }, function error(resp) {
        console.log(resp);
      });
    };
    
  }

})();
