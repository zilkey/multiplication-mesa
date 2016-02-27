angular.module('myApp', ['ngNewRouter', 'app.home'])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  {path: '/', component: 'home' }
];
function AppController ($router) {}
