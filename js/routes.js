angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.myMeter', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myMeter.html',
        controller: 'myMeterCtrl'
      }
    }
  })

  .state('menu.history', {
    url: '/history',
    views: {
      'side-menu21': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('menu.aboutUs', {
    url: '/aboutUs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.journeyDetails', {
    url: '/detail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/journeyDetails.html',
        controller: 'journeyDetailsCtrl'
      }
    }
  })

  .state('menu.summary', {
    url: '/summary',
    views: {
      'side-menu21': {
        templateUrl: 'templates/summary.html',
        controller: 'summaryCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});