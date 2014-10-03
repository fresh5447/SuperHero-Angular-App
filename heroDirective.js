myApp.directive('heroDirective', function(){
    return {
        restrict: 'EA',
        templateUrl: 'heroView.html',
        replace: true,
        scope: {
            superHero: '='
        }


    };
});
