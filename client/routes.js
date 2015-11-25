(function() {
  'use strict';


  angular.module('hotelApp')
  .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/makereservation');

    $stateProvider
      .state('makereservation', {
        url: '/makereservation',
        templateUrl: 'controllers/makereservation/makereservation.html',
        controller: 'MakereservationCtrl',
        controllerAs: 'makereservation',
        data: {
          title: 'Makereservation'
        }
      })
      .state('makepriceoffer', {
        url: '/makepriceoffer',
        templateUrl: 'controllers/makepriceoffer/makepriceoffer.html',
        controller: 'MakepriceofferCtrl',
        controllerAs: 'makepriceoffer',
        data: {
          title: 'Makepriceoffer'
        }
      })
      .state('reservations', {
        url: '/reservations',
        templateUrl: 'controllers/reservations/reservations.html',
        controller: 'ReservationsCtrl',
        controllerAs: 'reservations',
        data: {
          title: 'Reservations'
        }
      })
      .state('priceoffers', {
        url: '/priceoffers',
        templateUrl: 'controllers/priceoffers/priceoffers.html',
        controller: 'PriceoffersCtrl',
        controllerAs: 'priceoffers',
        data: {
          title: 'Priceoffers'
        }
      })
      .state('clients', {
        url: '/clients',
        templateUrl: 'controllers/clients/clients.html',
        controller: 'ClientsCtrl',
        controllerAs: 'clients',
        data: {
          title: 'Clients'
        }
      });

  }
})();
