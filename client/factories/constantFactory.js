(function() {
  'use strict';

  angular.module('hotelApp')
  .factory('constantFactory', constantFactory);

  function constantFactory() {
    var services = {
      priceoffer: priceoffer,
      quote: quote
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
      }
    }

  }

})();
