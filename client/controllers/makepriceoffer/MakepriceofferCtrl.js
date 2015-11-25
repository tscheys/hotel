(function() {
  'use strict';

  angular.module('hotelApp')
  .controller('MakepriceofferCtrl', MakepriceofferCtrl);

  function MakepriceofferCtrl() {
    var makepriceoffer = this;
    makepriceoffer.createOffer = function () {
      console.log('we got in here');
    }
  }
})();
