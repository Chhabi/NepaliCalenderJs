var nepaliCalenderApp = angular.module("nepaliCalenderApp", []);

nepaliCalenderApp.directive("nepaliCalender", function(){
    var cal = new NepaliCalender("swidget-calander-body");
    var mapService = new NepaliDateMap();
    var converter = new NepaliDateConverter("y-m-d", mapService);

    return {
        restrict: 'E',
        templateUrl: 'template/nepali-calender.html',
        controller: function($scope) {
            var controllerSelf = this;
            $scope.dateInput = new Date();
            $scope.$watch('dateInput', function(v) {
                var today = converter.convert($scope.dateInput);
                controllerSelf.month = mapService.getMonthNames()[today.np.m - 1];
                controllerSelf.year = today.np.y;
                cal.render(today,mapService);
            },true);
            this.prevMonth = function() {
                $scope.dateInput.setMonth($scope.dateInput.getMonth()-1);
            };
            this.nextMonth = function() {
                $scope.dateInput.setMonth($scope.dateInput.getMonth()+1);
            };
            this.prevYear = function() {
                $scope.dateInput.setFullYear($scope.dateInput.getFullYear()-1);
            };
            this.nextYear = function() {
                $scope.dateInput.setFullYear($scope.dateInput.getFullYear()+1);
            };
            this.today = function() {
                $scope.dateInput = new Date();
            };

        },
        controllerAs:"calender"
    }

});
