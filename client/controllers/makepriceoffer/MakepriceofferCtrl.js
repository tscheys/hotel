(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('MakepriceofferCtrl', MakepriceofferCtrl);

  MakepriceofferCtrl.$inject = ['pdfFactory', 'constantFactory', 'serverFactory'];

  function MakepriceofferCtrl(pdfFactory, constantFactory, serverFactory) {
    var quote = this;
    
    quote.fields = constantFactory.priceform();
    
    quote.createOffer = function () {
      console.log(quote);
      pdfFactory.priceofferPdf(constantFactory.priceoffer(quote));
      serverFactory.saveQuote(constantFactory.quote(quote));
    };

  }
})();

