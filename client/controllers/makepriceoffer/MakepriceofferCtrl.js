(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('MakepriceofferCtrl', MakepriceofferCtrl);

  MakepriceofferCtrl.$inject = ['pdfFactory', 'constantFactory', 'serverFactory'];

  function MakepriceofferCtrl(pdfFactory, constantFactory, serverFactory) {
    var quote = this;
    
    quote.createOffer = function () {
      pdfFactory.priceofferPdf(constantFactory.priceoffer(quote));
      serverFactory.saveQuote(constantFactory.quote(quote));
    }
  }
})();
