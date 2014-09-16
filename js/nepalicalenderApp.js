var nepaliCalenderApp = angular.module("nepaliCalenderApp", []);

nepaliCalenderApp.directive("nepaliCalender", function () {
    var cal = new NepaliCalender("swidget-calander-body");
    var mapService = new NepaliDateMap();
    var converter = new NepaliDateConverter("y-m-d", mapService);

    return {
        restrict: 'E',
        templateUrl: 'template/nepali-calender.html',
        controller: function ($scope) {
            var controllerSelf = this;
            this.daysToNextMonth = 0;
            this.daysToPrevMonth = 0;
            $scope.dateInput = new Date();
            $scope.$watch('dateInput', function (value) {
                var today = converter.convert(value);
                var days = mapService.getMap(today.np.y)[today.np.m - 1];
                controllerSelf.daysToNextMonth = days-today.np.d+1;
                controllerSelf.daysToPrevMonth = today.np.d+1;
                controllerSelf.month = mapService.getMonthNames()[today.np.m - 1];
                controllerSelf.year = today.np.y;
                cal.render(today, mapService);
            }, true);
            this.prevMonth = function () {
                $scope.dateInput.setDate($scope.dateInput.getDate() - this.daysToPrevMonth);
            };
            this.nextMonth = function () {
                $scope.dateInput.setDate($scope.dateInput.getDate() + this.daysToNextMonth);
            };
            this.prevYear = function () {
                $scope.dateInput.setFullYear($scope.dateInput.getFullYear() - 1);
            };
            this.nextYear = function () {
                $scope.dateInput.setFullYear($scope.dateInput.getFullYear() + 1);
            };
            this.today = function () {
                $scope.dateInput = new Date();
            };

        },
        controllerAs: "calender"
    }

});
