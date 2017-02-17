var app = angular.module('app', []);
app.controller('appController',['$scope','$http','$location', function($scope, $http, $location){

    // principais filtros
    $scope.search = {
        simulado: 2,
        tipo: 'objetiva'
    };

    /////////// MENU
    // lista simulados no menu
    var listaMenu = function(){
        $http ({
            method: 'GET',
            url: 'app/data/listasimulados.json'
        }).then(function (response){
            $scope.simulados = response.data;
        }).catch (function (response){
            if(response.status == 404){
            }
        });
    };

    // salva no click tipo da prova
    $scope.getSimuladoByTipo = function(itemSimulado,tipo){
        $scope.search.simulado = itemSimulado;
        $scope.search.tipo = tipo;
    };

    /////////// FIM MENU


    // SORT function
    $scope.sortTable = {
        propName: 'posicao'
    };
    /////////// LISTA TABELA PROVAS
    var listaProva = function() {
        $http ({
            method: 'GET',
            url: 'app/data/listaprovas.json'
        }).then(function (response){
            $scope.provas = response.data;
            // sort da tabela
            $scope.provas = orderBy($scope.provas,$scope.sortTable.propName)
        }).catch (function (response){
            if(response.status == 404){
                console.log('erro');
            }
        });
    };
    /////////// LISTA TABELA PROVAS



    // botoes do tamanho da fonte da pagina
    $scope.fontsizecurrent = 1.0;
    $scope.iconInc = function(){
        $scope.fontsizecurrent = parseFloat($scope.fontsizecurrent);
        $scope.fontsizecurrent = $scope.fontsizecurrent + 0.10;
        $scope.fontsizecurrent = $scope.fontsizecurrent.toFixed(2);
        document.getElementById('body').style.fontSize = $scope.fontsizecurrent+'rem';
    };
    $scope.iconDec = function(){
        $scope.fontsizecurrent = parseFloat($scope.fontsizecurrent);
        $scope.fontsizecurrent = $scope.fontsizecurrent - 0.10;
        $scope.fontsizecurrent = $scope.fontsizecurrent.toFixed(2);
        document.getElementById('body').style.fontSize = $scope.fontsizecurrent+'rem';
    };
    $scope.iconFontDefault = function(){
        $scope.fontsizecurrent = '1.0';
        document.getElementById('body').style.fontSize = '1rem';
    };


    // inicializando algumas funcoes
    listaProva();
    listaMenu();

}]);
