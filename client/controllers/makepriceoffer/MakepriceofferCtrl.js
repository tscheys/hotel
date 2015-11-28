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
        babybed: makepriceoffer.babybed,
        persons: [{
          title: 'Volwassenen in tweepersoonskamer',
          number: makepriceoffer.volwkoppel,
          price: 44
         },
         {
          title: 'Volwassenen in familiekamer',
          number: makepriceoffer.volwfam,
          price: 41
         },
         {
          title: 'Kinderen jonger dan 12 jaar',
          number: makepriceoffer.ki12,
          price: 28
         },
         {
          title: 'Kinderen jonger dan 6 jaar',
          number: makepriceoffer.ki6,
          price: 25
         },
         {
          title: 'Babies',
          number: makepriceoffer.babies,
          price: 12
         }
        ]};
      pdfFactory.priceofferPdf(data);
    }
  }
})();
