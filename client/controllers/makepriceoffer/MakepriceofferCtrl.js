(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('MakepriceofferCtrl', MakepriceofferCtrl);

  MakepriceofferCtrl.$inject = ['pdfFactory', 'constantFactory'];

  function MakepriceofferCtrl(pdfFactory, constantFactory) {
    var makepriceoffer = this;
    
    makepriceoffer.createOffer = function () {
      pdfFactory.priceofferPdf(constantFactory.priceoffer(makepriceoffer));
    }
  }
})();
