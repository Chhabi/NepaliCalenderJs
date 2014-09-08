var NepaliCalender = function(id) {
    this.containerId = id;
}


NepaliCalender.prototype.render = function() {

    var calanderString = "<table class=\"swidget-calander\"><tr><td>Welcome to Nepali Calender</td></tr></table>";
    var container = document.getElementById(this.containerId);
    container.innerHTML = calanderString;

};