(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('MakepriceofferCtrl', MakepriceofferCtrl);

  MakepriceofferCtrl.$inject = ['pdfFactory', 'constantFactory', 'serverFactory'];

  function MakepriceofferCtrl(pdfFactory, constantFactory, serverFactory) {
    var makepriceoffer = this;
    
    makepriceoffer.createOffer = function () {
      pdfFactory.priceofferPdf(constantFactory.priceoffer(makepriceoffer));
      serverFactory.saveQuote(constantFactory.quote(makepriceoffer));
    }
  }
})();
