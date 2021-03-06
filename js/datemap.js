var NepaliDateMap = function () {
    var self = this;
    this.bs = [],
        this.bs[2000] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2001] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2002] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2003] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2004] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2005] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2006] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2007] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2008] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        this.bs[2009] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2010] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2011] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2012] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        this.bs[2013] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2014] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2015] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2016] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        this.bs[2017] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2018] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2019] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2020] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2021] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2022] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        this.bs[2023] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2024] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2025] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2026] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2027] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2028] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2029] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2030] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2031] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2032] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2033] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2034] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2035] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        this.bs[2036] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2037] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2038] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2039] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        this.bs[2040] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2041] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2042] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2043] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        this.bs[2044] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2045] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2046] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2047] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2048] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2049] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        this.bs[2050] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2051] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2052] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2053] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        this.bs[2054] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2055] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2056] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2057] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2058] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2059] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2060] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2061] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2062] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
        this.bs[2063] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2064] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2065] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2066] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        this.bs[2067] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2068] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2069] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2070] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        this.bs[2071] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2072] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        this.bs[2073] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        this.bs[2074] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2075] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2076] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        this.bs[2077] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        this.bs[2078] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2079] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        this.bs[2080] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        this.bs[2081] = [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        this.bs[2082] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        this.bs[2083] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
        this.bs[2084] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
        this.bs[2085] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
        this.bs[2086] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        this.bs[2087] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
        this.bs[2088] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
        this.bs[2089] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        this.bs[2090] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //var months = ["बैशाख", "ज्येष्ठ", "आषाढ", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पौष", "माघ", "फाल्गुन", "चैत्र"]
    //var days = ["आईतवार", "सोमबार", "मंगलवार", "बुद्धबार", "बिहीवार", "शुक्रबार ", "शनिबार "];
    this.months = ["Baisakh", "Jestha", "Ashad", "Shrawan", "Bhadra", "Asoj", "Kartik", "Mangshir", "Poush", "Magh", "Falgun", "Chaitra"]

    return {
        getMap: function (i) {
            return self.bs[i];
        },
        getMonthNames: function () {
            return self.months;
        },
        getDayNames: function () {
            return self.days;
        }
    };
};
