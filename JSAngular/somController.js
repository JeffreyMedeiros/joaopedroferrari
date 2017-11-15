(function(){
    'use strict'
    angular.module('Todo List').controller('SomController', function ($scope) {
           $scope.soma = function (calcular) {
            calcular.resultado = parseInt(calcular.valorA) + parseInt(calcular.valorB);
        }
        $scope.calcular = {valorA: 0, valorB: 0, resultado: 0};  
    });
})();