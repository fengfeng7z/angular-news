NewsApp.factory('newsFactory', ['$http', function($http){
    var factory={};
    factory.getNews=function(category, callback){
        if(category){
            var url="https://content.guardianapis.com/seach?section=" + category.toLowerCase() + "&show-feilds=thumbnail&order-by=newest&page-size=12&api-key=1aa13b23-eab2-4c81-ae4e-9f30c9cc0a5e";
        }else{
            var url="https://content.guardianapis.com/seach?show-feilds=thumbnail&order-by=newest&page-size=12&api-key=1aa13b23-eab2-4c81-ae4e-9f30c9cc0a5e";
        }
        $http({method: 'GET', url: url}).then(function successCallback(apidata){
            callback(apidata.response);},function errorCallback(response){reture false;});
       
    };
    reture factory;
}]);
