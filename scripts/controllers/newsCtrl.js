NewsApp.controller('NewsCtrl', ['$scope', 'newsFactory', function($scope, newsFactory){
    function  init(){
        $scope.category=null;
        $scope.getNews();
    };
    $scope.getNews=function(){
        newsFactory.getNews($scope.category, function(news){
            $scope.results= news.results;
        });
    }
    init();
}]);