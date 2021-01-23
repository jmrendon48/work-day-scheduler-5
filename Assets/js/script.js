// global variables
var events = [];

// use moment to change currentDay text to the current day
var currentDayUpdate = function() {
    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);
};

// checks the hour and color codes time blocks accordingly
var timeBlockColorCoding = function() {
    // get current hour of the day
    var currentHour = moment().hour();

    // remove old time block background-color class
    $(".event-container").removeClass("past present future");

    for (var i = 9; i < 18; i++) {
        // get the hour of each div, and turn it into an integer
        var timeBlockContainer = $(".event-container").filter('[data-hour=' + [i] + "]");
        timeBlockHour = timeBlockContainer.data("hour");
        timeBlockHour = parseInt(timeBlockHour);

        // adds appropriate class depending on what hour it is
        if (timeBlockHour < currentHour) {
            timeBlockContainer.addClass("past");  
        } else if (timeBlockHour === currentHour) {
            timeBlockContainer.addClass("present");
        } else {
            timeBlockContainer.addClass("future");
        }
    }
};

$(".event-container").on("click", "p", function() {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>")
        .addClass("event-textarea")
        .val(text);
    $(this).replaceWith(textInput);
});

// the event of corrisponding time block is saved to the page and local storage
$(".button-container").on("click", "button", function() {
    // get current value of textarea
    var text = $(".event-textarea").val();

    var eventP = $("<p>")
        .addClass("event")
        .text(text);

    // replace textarea with new content
    $(".event-textarea").replaceWith(eventP);

    var hourNumber = $(this).data("hour");
    localStorage.setItem("hour-" + hourNumber, text);
});

currentDayUpdate();

timeBlockColorCoding();

setInterval(timeBlockColorCoding, 60000);