// use moment to change currentDay text to the current day
var currentDayUpdate = function() {
    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);
};

var timeBlockColorCoding = function() {
    // get current hour of the day
    var currentHour = moment().hour();

    // remove old time block background-color class
    $(".event-container").removeClass("past present future");

    for (var i = 9; i < 18; i++) {
        // get the hour of each div, and turn it into an integer
        var timeBlockContainer = $(".event-container").filter('[data-hour=' + [i] + "]");
        timeBlockHour = timeBlockContainer.data("hour");
        console.log(timeBlockHour);
        timeBlockHour = parseInt(timeBlockHour);

        //
        if (timeBlockHour < currentHour) {
            timeBlockContainer.addClass("past");
        } else if (timeBlockHour === currentHour) {
            timeBlockContainer.addClass("present");
        } else {
            timeBlockContainer.addClass("future");
        }
    }
};

currentDayUpdate();

setInterval(timeBlockColorCoding(), 300000);