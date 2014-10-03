var myApp = angular.module('myApp',[]);

myApp.controller('heroController', function($scope, $location, $timeout)  {

    $scope.superHeros = [{
        firstName: 'Doug',
        image: 'images/images.jpg',
        superPower: 'invisibility'
    }, {
        firstName: 'Aziz',
        image: 'images/aziz.jpg',
        superPower: 'xray'
    }, {
        firstName: 'Mary',
        image: 'images/mary.jpg',
        superPower: 'flight'
    }, {
        firstName: 'Swati',
        image: 'images/swati.jpg',
        superPower: 'strength'
    }, {
        firstName: 'David',
        image: 'images/david.jpg',
        superPower: 'aqua'
    }, {
        firstName: 'Phillip',
        image: 'images/phillip.jpg',
        superPower: 'stretch'
    }];

    $scope.superHeroInput = '';

    $scope.$watch('superHeroInput', function(newValue){
        switch(newValue){
            case doug:
                $scope.selectedSuperHero = $scope.superHeros[0];
                break;
            case mary:
                $scope.selectedSuperHero = $scope.superHeros[0];
                break;
            case david:
                $scope.selectedSuperHero = $scope.superHeros[0];
                break;
        }

    });
});


//$scope.$watch('superHeroInput', function(newValue){
//    if (!newValue || newValue.length ==0) {
//        $scope.selectedSuperHero = $scope.superHeros[0]
//    } else {
//        var randomItem = $scope.superHeros[Math.floor(Math.random() * $scope.superHeros.length)];
//        $scope.selectedSuperHero = randomItem;
//    }
//});