var NepaliCalender = function (id) {
    this.containerId = id;
}

NepaliCalender.prototype.getFirstWeekDayOfMonth = function (today, weekday) {
    var diff = (today % 7);
    var index = weekday + 1;
    while (diff != 0) {
        index--;
        diff--;
    }

    if (index < 0) {
        index = Math.abs(7 + index);
    }
    if (index >= 7) {
        index = Math.abs(6 - index);
    }

    return index;
};


NepaliCalender.prototype.render = function (today,mapService) {

    var weekDayStartsAt = 0;
    var days = mapService.getDayNames();
    var months = mapService.getMonthNames();
    var thisMonth = mapService.getMap(today.np.y)[today.np.m - 1];
    var firstDayOfTheMonthStartsAt = this.getFirstWeekDayOfMonth(today.np.d, today.en.getDay());
    var container = document.getElementById(this.containerId);
    var calanderString ="";

    calanderString += "<tr class=\"weekdays\">";
    days.forEach(function (value, index) {
        calanderString += "<th>" + value + "</th>";
    });
    calanderString += "</tr>";

    var calItems = [];
    calanderString += "<tr>";
    var rowString = "";
    var push = 0;
    dateNumber = 1;
    for (var i = 1; dateNumber <= thisMonth; i++) {
        if (firstDayOfTheMonthStartsAt > 0) {
            push = firstDayOfTheMonthStartsAt;
            i += push - 1;
            if (push > 0) {
                rowString += "<td colspan=\"" + push + "\">&nbsp;</td>";
            }
            firstDayOfTheMonthStartsAt = -1;
        } else {
            if (i % 7 == 0) {
                className = "weekday weekend";
            } else {
                className = "weekday";
            }

            if (today.np.d == dateNumber) {
                className += " today";
            }
            rowString += "<td class=\"" + className + "\" data-date=\""+today.np.y+"-"+today.np.m+"-"+dateNumber+"\">" + dateNumber + "</td>";
            dateNumber++;
        }
        if (i % 7 == 0) {
            calItems.push(rowString);
            rowString = '';
        }
    }
    if (rowString != '') {
        calItems.push(rowString);
    }
    calanderString += calItems.join('</tr><tr>');
    calanderString += "</tr>";

    container.innerHTML = calanderString;

};