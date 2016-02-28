angular.module('app.grid', [])
  .controller('GridController', [function () {
    var grid = this;
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    grid.data = {};
    numbers.forEach(function (number) {
      var row = {};
      numbers.forEach(function (innerNumber) {
        row[innerNumber] = {
          answer: null,
          correctAnswer: number * innerNumber,
          attempts: 0,
          errors: 0
        };
      })
      grid.data[number] = row;
    });

    grid.highlight = {x: null, y: null};

    grid.onFocus = function (x,y) {
      grid.highlight = {x: x, y: y};
    };

    grid.onKeyUp = function ($event, x,y) {
      var mapping = {
        up: 38,
        down: 40,
        right: 39,
        left: 37,
      };
      var newX = x, newY = y;

      switch ($event.which) {
        case mapping.up:
          newY = Math.max(y - 1, numbers[0]);
          break;
        case mapping.down:
          if (y < numbers[numbers.length - 1]) newY++;
          break;
        case mapping.left:
          newX = Math.max(x - 1, numbers[0]);
          break;
        case mapping.right:
          if (x < numbers[numbers.length - 1]) newX++;
          break;
      }

      grid.highlight = {x: newX, y: newY};
      angular.element("[data-x=" + newX.toString() + "][data-y=" + newY.toString() + "]").focus();
    };
  }]);
