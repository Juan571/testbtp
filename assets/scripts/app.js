var BTP = angular.module("BTP",[
    'ui.router'

]);

BTP.controller("LoginController",['$scope','$state',function($scope,$state){
    $scope.user;
    $scope.password; 
    $scope.cargarMain = function(data){
        $state.go("dashboard");
    };


}]); 
BTP.controller("ApuestasController",['$scope','$state',function($scope,$state){
  $scope.apuesta = {};
  $scope.apuesta.monto=20;
  $scope.apuesta.montoganar=224;
  $scope.apuesta.saldo=100;
  
  
  $scope.cards = [
    {   time : "201712/24 17:00",
        teamA : {
            name: "Sacramento Kings" ,
            
            
        },
        teamB : {
            name: "New Orleans Pelicans" ,

        }
    },
    {
        time : "201712/24 17:00",
        teamA : {
            name: "New York Knicks" ,
        },
        teamB : {
            name: "San Antonio Spols",
        }
        
    },
      {
        time : "201712/24 17:00",
        teamA : {
            name: "San Antonio Spols" ,
        },
        teamB : {
            
        }
        
    }
      
    ];

}]); 

BTP.config(function($stateProvider) {
  var mainState = {
    name: 'dashboard',
    url: '/dashboard',
    templateUrl: 'dashboard.html'
  }

  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'index.html'
  }
  
  

  $stateProvider.state(mainState);
  $stateProvider.state(loginState);
});