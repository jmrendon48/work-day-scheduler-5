// use moment to change currentDay text to the current day
var currentDayUpdate = function() {
    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);
};

currentDayUpdate();