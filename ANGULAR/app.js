(function() {
    'use strict';

    var app = angular.module('TodoList', [
        
    ]);

    app.controller('PrincipalController', function($scope){
            $scope.listaDeTarefas = [];

        $scope.meuEvento = function (tarefa) {
            
            var novaTarefa = {};

            novaTarefa.nome = tarefa.nome;
            novaTarefa.valor = tarefa.valor;
            
            $scope.listaDeTarefas.push(novaTarefa)
        }


        $scope.tarefa = { nome:"Ta quanto esse revolvi?", valor:500}

    }); 

})();