(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('MakepriceofferCtrl', MakepriceofferCtrl);

  MakepriceofferCtrl.$inject = ['pdfFactory'];

  function MakepriceofferCtrl(pdfFactory) {
    var makepriceoffer = this;
    
    makepriceoffer.createOffer = function () {
      console.log(makepriceoffer.naam);
      pdfFactory.priceofferPdf(makepriceoffer);
    }
  }
})();
