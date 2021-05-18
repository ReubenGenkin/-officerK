var now = JSON.stringify(moment().format("dddd MMMM, YYYY"));
$("#currentDay").append(now);

var time = parseInt(moment().format("HH"));
console.log(time);

$(".time-block").each(function () {
    var timeDiv = parseInt(
        $(this)
            .attr("id")
            .split("-")[1]
    );

    console.log(timeDiv)
    if (timeDiv < time) {
        //add class to past div use "this"
        $(this).find('input').addClass('future');

    } else if (timeDiv == time) {
        //add class to present div
        $(this).find('input').addClass('present');

    } else {
        //add class to future div
        $(this).find('input').addClass('past');
    }
})

$('.saveBtn').each().click(function () {
    // $(".textarea").each(function() {
    input123 = JSON.stringify($(this));
    saveINp = localStorage.setItem("key1", input123);
    console.log(input123);
});
// });






// function store() {
   
//     $(".time-block").cu(function () {

//     var timeBlockId = parseInt($(this).attr('id').split("-")[1])
//     console.log(timeBlockId);

//     var buttId = parseInt($(this).find('button').attr("id").split("-")[1]);
//     console.log(buttId);

//     if (buttId == timeBlockId) {
//         inputVal = $(this).find('input').val()
//     localStorage.setItem("server", inputVal);
    
//     }
// })
// }

// var generateBtn = document.querySelector(".saveBtn");
// generateBtn.addEventListener("click", store);
