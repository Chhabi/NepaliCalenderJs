var NepaliCalender = function (id) {
    this.containerId = id;
}

NepaliCalender.prototype.getFirstWeekDayOfMonth = function (today, weekday) {
    var diff = (today % 7);
    var index = weekday - 1;
    while (diff != 0) {
        index--;
        diff--;
    }
    if (index < 0) {
        index = 7 + index;
    }
    return index;
};


NepaliCalender.prototype.render = function () {

    var weekDayStartsAt = 0;


    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    var mapService = new NepaliDateMap();
    var converter = new NepaliDateConverter("y-m-d", mapService);
    var today = converter.convert(new Date()); //jan 1 2012
    var thisMonth = mapService.getMap(today.np.y)[today.np.m - 1];
    var firstDayOfTheMonthStartsAt = this.getFirstWeekDayOfMonth(today.np.d, today.en.getDay());
    var calanderString = "<table class=\"swidget-calander\"><tr><th colspan=\"7\">Welcome to Nepali Calender, Today is " + today.np.y + "-" + today.np.m + "-" + today.np.d + "</th></tr>";
    var container = document.getElementById(this.containerId);
    calanderString += "<tr>";
    days.forEach(function (value, index) {
        calanderString += "<th>" + value + "</th>";
    });
    calanderString += "</tr>";

    var calItems = [];
    calanderString += "<tr>";
    var rowString = "";
    dateNumber = 1;
    for(var i=1;dateNumber<=thisMonth;i++) {
        if (firstDayOfTheMonthStartsAt-1>0) {
            i+=firstDayOfTheMonthStartsAt-2;
            rowString+= "<td colspan=\""+(firstDayOfTheMonthStartsAt-1)+"\">&nbsp;</td>";
            firstDayOfTheMonthStartsAt = -1;
        } else {
            if (i%7 == 0) {
                className ="weekend";
            }else {
                className ="weekday";
            }
            rowString+= "<td class=\""+className+"\">"+dateNumber+"</td>";
            dateNumber++;
        }
        if (i%7==0) {
            calItems.push(rowString);
            rowString = '';
        }
    }
    if(rowString!='') {
        calItems.push(rowString);
    }
    calanderString += calItems.join('</tr><tr>');
    calanderString += "</tr>";

    container.innerHTML = calanderString + "</table>";

};