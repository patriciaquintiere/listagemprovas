var app = angular.module('app', []);
app.controller('appController',['$scope','$http','$location', function($scope, $http, $location){

    $scope.simulados = [
        {
            nome: 'simulado 10',
            provas: [
                {
                    tipo: 'objetiva',
                    itens: [
                        {
                            prova:
                                {
                                    matricula: 11111,
                                    posicao: 1,
                                    nota: 40,
                                    especialidade: 'clínica médica',
                                    turma: '2008 MEDGRUPO SALVADOR - Turma A/2008 SALVADOR',
                                    filial: 'Salvador(BA)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 22222,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'São Paulo(SP)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 333333,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'Salvador(BA)'
                                }
                        }
                    ]
                },
                {
                    tipo: 'final',
                    itens: [
                        {
                            prova:
                                {
                                    matricula: 11111,
                                    posicao: 1,
                                    nota: 40,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO RIO DE JANEIRO - Turma A/2008 RIO DE JANEIRO',
                                    filial: 'Rio de Janeiro(BA)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 22222,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'São Paulo(SP)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 333333,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica médica',
                                    turma: '2008 MEDGRUPO SALVADOR PAULO - Turma A/2008 SALVADOR',
                                    filial: 'Salvador(BA)'
                                }
                        }
                    ]
                }
            ]
        },
        {
            nome: 'simulado 9',
            provas: [
                {
                    tipo: 'objetiva',
                    itens: [
                        {
                            prova:
                                {
                                    matricula: 44444,
                                    posicao: 1,
                                    nota: 40,
                                    especialidade: 'clínica médica',
                                    turma: '2008 MEDGRUPO SALVADOR - Turma A/2008 SALVADOR',
                                    filial: 'Salvador(BA)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 11111,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'São Paulo(SP)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 77777,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'Salvador(BA)'
                                }
                        }
                    ]
                },
                {
                    tipo: 'final',
                    itens: [
                        {
                            prova:
                                {
                                    matricula: 11111,
                                    posicao: 1,
                                    nota: 40,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO RIO DE JANEIRO - Turma A/2008 RIO DE JANEIRO',
                                    filial: 'Rio de Janeiro(BA)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 22222,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'São Paulo(SP)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 333333,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica médica',
                                    turma: '2008 MEDGRUPO SALVADOR PAULO - Turma A/2008 SALVADOR',
                                    filial: 'Salvador(BA)'
                                }
                        }
                    ]
                }
            ]
        },
        {
            nome: 'simulado 8',
            provas: [
                {
                    tipo: 'objetiva',
                    itens: [
                        {
                            prova:
                                {
                                    matricula: 33333,
                                    posicao: 1,
                                    nota: 40,
                                    especialidade: 'clínica médica',
                                    turma: '2008 MEDGRUPO SALVADOR - Turma A/2008 SALVADOR',
                                    filial: 'Salvador(BA)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 11111,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'São Paulo(SP)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 222222,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'Salvador(BA)'
                                }
                        }
                    ]
                },
                {
                    tipo: 'final',
                    itens: [
                        {
                            prova:
                                {
                                    matricula: 11111,
                                    posicao: 1,
                                    nota: 40,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO RIO DE JANEIRO - Turma A/2008 RIO DE JANEIRO',
                                    filial: 'Rio de Janeiro(BA)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 22222,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica geral',
                                    turma: '2008 MEDGRUPO SÃO PAULO - Turma A/2008 SÃO PAULO',
                                    filial: 'São Paulo(SP)'
                                }
                        },
                        {
                            prova:
                                {
                                    matricula: 333333,
                                    posicao: 3,
                                    nota: 76,
                                    especialidade: 'clínica médica',
                                    turma: '2008 MEDGRUPO SALVADOR PAULO - Turma A/2008 SALVADOR',
                                    filial: 'Salvador(BA)'
                                }
                        }
                    ]
                }
            ]
        },

    ];



    $scope.tipoNum = '';
    $scope.tipoProva = '';

    $scope.tipoSimulado = function(simuladorNum,simuladorProva){
        $scope.tipoNum = simuladorNum,
        $scope.tipoProva = simuladorProva
    };

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



    // // MSG DE ERRO
    // $scope.msg = {
    //     orgError: 'Empresa não localizada. Verifique o campo e digite novamente.',
    //     userError: 'Usuário não localizado. Verifique o campo e digite novamente.',
    //     viewOrgError: '',
    //     viewUserError: ''
    // };
    // // inputs
    // $scope.search = {
    //     orgname: '',
    //     username: '',
    //     filterOrg: ''
    // };
    //
    // //// MOSTRA OU ESCONDE BLOCO
    // //// QUANDO RETORNADO O OBJETO COM LISTA DE REPOSITORIOS
    // // LISTA EMPRESA
    // $scope.infoRepOrg = {
    //     show: false
    // };
    // // LISTA USUARIO
    // $scope.infoRepUser = {
    //     show: false
    // };
    //
    // // LISTA REPOSITORIOS
    // $scope.reposit = {
    //     listOrg: '',
    //     listUser: '',
    // };
    //
    // // BUSCA REPOSITORIO EMPRESA
    // $scope.buscaRepositorioEmpresas = function() {
    //     $http ({
    //         method: 'GET',
    //         url: 'https://api.github.com/orgs/'+$scope.search.orgname+'/repos'
    //     }).then(function (response){
    //         // mostra html da lista informacoes de repositorios
    //         $scope.infoRepOrg.show = true;
    //         // passa dados da requisicao para variavel
    //         $scope.reposit.listOrg = [];
    //         $scope.reposit.listOrg = response.data;
    //         if(response.data == 0){
    //             $scope.msg.viewOrgError = 'Não há repositórios para esta empresa';
    //         } else {
    //             // remove msg de erro
    //             $scope.msg.viewOrgError = '';
    //         }
    //     }).catch (function (response){
    //         // esconde html da lista de informacao de repositorios
    //         $scope.infoRepOrg.show  = false;
    //         // limpa variavel - lista de repositorios
    //         $scope.reposit.listOrg = '';
    //         // mensagem de erro
    //         if(response.status == 404){
    //             $scope.infoRepOrg.show = true;
    //             $scope.msg.viewOrgError = $scope.msg.orgError;
    //         }
    //     });
    // };
    //
    // // BUSCA REPOSITORIO USUARIOS
    // $scope.buscaRepositorioUsuarios = function() {
    //     $http ({
    //         method: 'GET',
    //         url: 'https://api.github.com/users/'+$scope.search.username+'/repos'
    //     }).then(function (response){
    //         // mostra html da lista informacoes de repositorios
    //         $scope.infoRepUser.show = true;
    //         // passa dados da requisicao para variavel
    //         $scope.reposit.listUser = [];
    //         $scope.reposit.listUser = response.data;
    //         if(response.data == 0){
    //             $scope.msg.viewUserError = 'Não há repositórios para este usuário';
    //         } else {
    //             // remove msg de erro
    //             $scope.msg.viewUserError = '';
    //         }
    //     }).catch (function (response){
    //         // esconde html da lista de informacao de repositorios
    //         $scope.infoRepUser.show = false;
    //         // limpa variavel - lista de repositorios
    //         $scope.reposit.listUser = '';
    //         if(response.status == 404){
    //             $scope.infoRepUser.show = true;
    //             $scope.msg.viewUserError = $scope.msg.userError;
    //         }
    //     });
    // };


}]);
