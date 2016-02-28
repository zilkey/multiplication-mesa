angular.module('myApp', ['ngNewRouter', 'app.grid'])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  {path: '/', component: 'grid' }
];
function AppController ($router) {}
