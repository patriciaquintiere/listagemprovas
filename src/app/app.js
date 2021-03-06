var app = angular.module('app', []);
app.controller('appController',['$scope','$http','$location', '$filter', function($scope, $http, $location, $filter){

    // principais filtros
    $scope.search = {
        simulado: 1,
        tipo: 'objetiva'
    };

    /////////// MENU
    // lista simulados no menu
    $scope.listaMenu = function(){
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

    // lista tipos de provas
    $scope.tiposProva = [
        { tipo : "objetiva", id: 123 },
        { tipo : "final", id: 124 }
    ];

    $scope.toggleActiveSubMenu = function(itemSimulado,id){
        var createId = itemSimulado;
        createId += id;
        var classBtnSimulado = 'btn-simulado';
        var allSubMenu = document.getElementsByClassName(classBtnSimulado);
        var idSubMenu = document.getElementById(createId);

        for(i = 0; i < allSubMenu.length; i++){
            document.getElementsByClassName(classBtnSimulado)[i].setAttribute('class',classBtnSimulado);
            document.getElementById(createId).setAttribute('class',classBtnSimulado+' active');
        };
    };

    // salva no click tipo da prova
    $scope.getSimuladoByTipo = function(itemSimulado,tipo,id){
        $scope.search.simulado = itemSimulado;
        $scope.search.tipo = tipo;
        $scope.listaProva();
        $scope.toggleActiveSubMenu(itemSimulado,id);
    };

    /////////// FIM MENU


    // SORT function
    $scope.sortTable = {
        propName: 'posicao'
    };

    /////////// LISTA TABELA PROVAS E PAGINACAO
    $scope.itensPerPage = 6;

    $scope.listaProva = function() {
        // pagina atual - paginacao
        $scope.currentPage = 1;

        $http ({
            method: 'GET',
            url: 'app/data/listaprovas.json'
        }).then(function (response){
            $scope.provas = response.data;
            // filtro da tabela
            $scope.provas = $filter('filter')($scope.provas, $scope.search)

            // sort da tabela
            $scope.provas = $filter('orderBy')($scope.provas, $scope.sortTable.propName)

            // total de provas fitradas
            $scope.totalItens = $scope.provas.length;
            // calculo para obter quantidade de páginas
            $scope.totalPages = Math.floor($scope.totalItens / $scope.itensPerPage);
            if($scope.totalItens % $scope.itensPerPage > 0){
                $scope.totalPages++;
            }
            $scope.pages = [];
            for(i = 0; i < $scope.totalPages; i++){
                $scope.pages.push(i+1);
            }
        }).catch (function (response){
            if(response.status == 404){
                console.log('erro');
            }
        });
    };
    // PAGINACAO
    $scope.setPage = function(page){
        $scope.currentPage = page;
    };
    /////////// LISTA TABELA PROVAS E PAGINACAO

    // MENU
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };


    // PRINT
    $scope.print = function(){
        window.print();
    };

    // botoes de tamanho da fonte da pagina
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
    $scope.listaProva();
    $scope.listaMenu();
}]);
