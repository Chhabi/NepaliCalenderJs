var NepaliDateConverter = function (format, mapService) {

    var self = this;
    //formats: Y-m-d || Y/m/d // d/m/Y
    this.format = format.toLowerCase() || "";
    this.base_bs = {y: 2000, m: 9, d: 17};
    this.base_ad = {y: 1944, m: 1, d: 1};
    this.mapService = mapService;

    this.convert = function (date) {
        var dateObj = date;
        if (typeof dateObj == 'string') {
            dateObj = self.parseDate(dateObj, self.format);
        }
        else if (typeof dateObj == 'object' && date.getDate()) {
            dateObj = {y: date.getFullYear(), m: date.getMonth()+1, d: date.getDate()};
        }
        return {np: self.adToBikramSambat(dateObj), en: new Date(dateObj.y, dateObj.m, dateObj.d)};
    };

    this.countAdDays = function (dateStart, dateEnd) {
        var start = Date.UTC(dateStart.y, dateStart.m - 1, dateStart.d),
            end = Date.UTC(dateEnd.y, dateEnd.m - 1, dateEnd.d);
        return (end - start) / (1000 * 60 * 60 * 24);
    };

    this.addBikramSambatDays = function (delta) {
        var day = self.base_bs.d + delta,
            year = self.base_bs.y,
            month = self.base_bs.m;

        while (day > self.mapService.getMap(year)[month - 1]) {
            day = day - self.mapService.getMap(year)[month - 1];
            month += 1;
            if (month > 12) {
                month = 1;
                year += 1;
            }
        }
        return {y: year, m: month, d: day}
    };

    this.adToBikramSambat = function (date) {
        if (
            date.y < 1944 ||
                date.y > 2043 ||
                date.m < 1 ||
                date.m > 12 ||
                date.d < 1 ||
                date.d > 31 ||
                (date.y == 2043 && date.m == 4 && date.d > 13)
            ) {
            throw "Invalid Date, Not Supported Yet :(";
        }
        else {
            date_delta = self.countAdDays(self.base_ad, date);
            return self.addBikramSambatDays(date_delta);
        }

    };

    this.splitWithChar = function (string, splitChar) {
        return string.split(splitChar);
    };

    this.constructDateObject = function (_y, _m, _d) {
        var year = parseInt(_y) || 0,
            month = parseInt(_m) || 0,
            day = parseInt(_d) || 0;
        return {
            y: year,
            m: month,
            d: day
        };
    };

    this.parseDate = function (date, _format) {
        var split,
            format = _format || "y-m-d";
        switch (format) {
            case "y-m-d":
                split = self.splitWithChar(date, '-');
                return self.constructDateObject(split[0], split[1], split[2]);
            case "y/m/d":
                split = self.splitWithChar(date, '/');
                return self.constructDateObject(split[0], split[1], split[2]);
            case "d/m/y":
                split = self.splitWithChar(date, '/');
                return self.constructDateObject(split[2], split[1], split[0]);
            case "d-m-y":
                split = self.splitWithChar(date, '-');
                return self.constructDateObject(split[2], split[1], split[0]);
        }
    };

    return {
        convert: this.convert
    };

};