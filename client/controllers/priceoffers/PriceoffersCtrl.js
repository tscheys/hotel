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
      serverFactory.getQuotes(function(data) {
        priceoffers.quotes = data;
      });
    }; 
  }
})();
