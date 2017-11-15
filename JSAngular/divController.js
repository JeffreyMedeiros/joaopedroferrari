(function(){
    'use strict'
    angular.module('Todo List').controller('DivController', function ($scope) {
        $scope.divisao = function (calcular) {
            calcular.resultado = parseInt(calcular.valorA) / parseInt(calcular.valorB);
        }
        $scope.calcular = {valorA: 0, valorB: 0, resultado: 0};
    });
})();