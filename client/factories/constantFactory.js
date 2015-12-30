(function() {
  'use strict';

  angular.module('hotelApp')
  .factory('constantFactory', constantFactory);

  function constantFactory() {
    var services = {
      priceoffer: priceoffer,
      quote: quote,
      priceform: priceform
    };

    return services;

    function priceoffer(guest) {
      return {
        naam: guest.naam,
        nights: guest.nachten,
        babybed: guest.babybed,
        persons: [{
          title: 'Volwassenen in tweepersoonskamer',
          number: guest.volwkoppel,
          price: 44
         },
         {
          title: 'Volwassenen in familiekamer',
          number: guest.volwfam,
          price: 41
         },
         {
          title: 'Kinderen jonger dan 12 jaar',
          number: guest.ki12,
          price: 28
         },
         {
          title: 'Kinderen jonger dan 6 jaar',
          number: guest.ki6,
          price: 25
         },
         {
          title: 'Babies',
          number: guest.babies,
          price: 12
         }
        ]
      };
    }

    function quote(guest) {
      return {
        name: guest.naam,
        nights: guest.nachten,
        babybed: guest.babybed,
        adultCouple: guest.volwkoppel,
        adultFamily: guest.volwfam,
        kids12: guest.ki12,
        kids6: guest.ki6,
        babies: guest.babies
      };
    }

    function priceform() {
      return [{
        label: "NaamKlant",
        model: "quote.naam",
        type: "text",
        placeholder: "Naam klant",
        class: "form-control"
      }, 
      {
        label: "nachten",
        model: "quote.nachten",
        type: "text",
        placeholder: "Aantal nachten",
        class: "form-control"
      },
      {
        label: "volwfam",
        model: "quote.volwfam",
        type: "text",
        placeholder: "Volwassenen familiekamer",
        class: "form-control"
      },
      {
        label: "volwkoppel",
        model: "quote.volwkoppel",
        type: "text",
        placeholder: "Volwassenen koppel",
        class: "form-control"
      },
      {
        label: "ki12",
        model: "quote.ki12",
        type: "text",
        placeholder: "Kinderen 12 jaar of jonger",
        class: "form-control"
      },
      {
        label: "ki6",
        model: "quote.ki6",
        type: "text",
        placeholder: "Kinderen 6 jaar of jonger",
        class: "form-control"
      },
      {
        label: "ki6",
        model: "quote.ki6",
        type: "text",
        placeholder: "Kinderen 6 jaar of jonger",
        class: "form-control"
      },
      {
        label: "babies",
        model: "quote.babies",
        type: "text",
        placeholder: "Aantal babies",
        class: "form-control"
      },
      {
        label: "babies",
        model: "quote.babybed",
        type: "checkbox",
        placeholder: "Aantal babies",
        class: "checkbox"
      }
      ];
    }

  }

})();

