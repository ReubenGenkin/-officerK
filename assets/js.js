var now = JSON.stringify(moment().format("dddd MMMM, YYYY"));
$("#currentDay").append(now);

var time = parseInt(moment().format("HH"));

$(".time-block").each(function () {
    var timeDiv = parseInt(
        $(this)
            .attr("id")
            .split("-")[1]
    );

    if (timeDiv < time) {
        $(this).find('input').addClass('future');

    } else if (timeDiv == time) {
        $(this).find('input').addClass('present');

    } else {
        $(this).find('input').addClass('past');
    }

    var timeId = $(this)
        .attr("id")

    var timeContent = localStorage.getItem(timeId);

    var timeText = $(this).find('input').val()

    if (timeText !== null) {
        $(this).find('input').val(timeContent);
    }
})

$('.saveBtn').click(function () {
    var timeKey = $(this).parent().attr("id");
    var doItem = $(this).siblings(".textarea").val();

    localStorage.setItem(timeKey, doItem);
});
