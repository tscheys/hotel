(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('MakepriceofferCtrl', MakepriceofferCtrl);

  MakepriceofferCtrl.$inject = ['pdfFactory'];

  function MakepriceofferCtrl(pdfFactory) {
    var makepriceoffer = this;
    
    makepriceoffer.createOffer = function () {
      var data = {
        naam: makepriceoffer.naam,
        nights: makepriceoffer.nachten,
        persons: [{
          title: 'Volwassenen in tweepersoonskamer',
          number: makepriceoffer.volwkoppel,
          price: 44
         },
         {
          title: 'Volwassenen in familiekamer',
          number: makepriceoffer.volwfam,
          price: 41
         }
        ]};
      pdfFactory.priceofferPdf(data);
    }
  }
})();
