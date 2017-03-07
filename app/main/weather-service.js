module.exports = function(ngModule){
    ngModule.service('weatherService', function($http) {
        //this.city = "pritee";
        this.getAllData = function() {
            return $http({
                    method: 'GET',
                    url: 'main/data.json',
                })
                .then(function(data) {
                    return data;
                })
        }

    })
}
