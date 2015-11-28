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
      var price = calculatePrice(inquiryData);
      pdfMake.createPdf(docDefinition(inquiryData, price)).open();
    }
  }

})();

function calculatePrice (data) {
  var total = 0;
  var summary = [];
  data.persons.forEach(function(clientType) {
    summary.push(clientType.title + ': ' + clientType.number + ' x ' + clientType.price + ' = ' + clientType.price * clientType.number);
    total += clientType.price * clientType.number;
  });
  summary.push('Totaal per nacht: ' + total);
  summary.push('Aantal nachten: ' + data.nights);
  summary.push('Totaal verblijf: ' + total * data.nights);
  return summary;
}

function docDefinition (data, price) {
  return {
    content: [
          { text: 'Prijsofferte', style: 'header' },
          'Beste ,', 'Onderaan dit document vindt u de totaalprijs voor uw verblijf.',
          { text: 'Overzicht', style: 'subheader' },
          price
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      // alignment: 'justify'
    }
  }
};


