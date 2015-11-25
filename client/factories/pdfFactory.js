(function() {
  'use strict';

  angular.module('hotelApp')
  .factory('pdfFactory', pdfFactory);

  function pdfFactory() {
    var services = {
      priceofferPdf: priceofferPdf
    };

    return services;

    function priceofferPdf (inquiryData) {
      var docDefinition = { content: inquiryData.naam };
      pdfMake.createPdf(docDefinition).open();
    }
  }

})();
