angular.module('mymeanblog')
          .config(RouterConfig);

    RouterConfig.$inject = ["$routeProvider"];
    
    function RouterConfig($routeProvider){
      $routeProvider
      .when('/', {
        controller: 'SignupController',
        templateUrl: 'html/views/signup.html',
        restrictied: {
          access: false
        }
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/views/login.html',
        restrictied: {
          access: false
        }
      })
      .when('/dashboard', {
        controller: 'DashboardController',
        templateUrl: 'html/views/dashboard.html',
        restrictied: {
          access: true
        }
      })
      .when('/create', {
        controller: 'PostController',
        templateUrl: 'html/views/create.html',
        restrictied: {
          access: true
        }
      })
      .when('/edit/:postId', {
        controller: 'PostController',
        templateUrl: 'html/views/edit.html',
        restrictied: {
          access: true
        }
      })
      .otherwise({
        redirectTo: '/',
        restrictied: {
          access: false
        }
      });
    }