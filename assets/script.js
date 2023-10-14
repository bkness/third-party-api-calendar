// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// heres where all the magic starts 

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    // Using jquery we can us the on event to attatch our event listener to the parent element ive selected. then calling on a function im able to set variables within the local storage using the localStorage.setitem with the key and value. this bring the current element
    $('.saveBtn').on('click', function () {
        var key = $(this).parent().attr('id')
        var value = $(this).siblings('textarea').val()

        localStorage.setItem(key, value)
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // if before hour make red if current make green 

    //    here i created a variable to call on js for 24 hour time 

    var currentHour = dayjs().hour();

    // here i use the each function to iterates over each element in the selected set 

    $('.time-block').each(function () {

        // using parse to turn hour into an integer i used slice to remove the first five characters so im left with the id
        var blockHour = parseInt($(this).attr('id').slice(5));
        console.log(blockHour);

        if (blockHour < currentHour) {
            $(this).removeClass('present').removeClass('future').addClass('past');
        } else if (blockHour === currentHour) {
            $(this).removeClass('past').removeClass('future').addClass('present');
        } else {
            $(this).removeClass('past').removeClass('present').addClass('future');
        }
    });


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // calling on jquery we go inside the parent to target the child element so we can set its .text value to local storage
    $('#hour-9 .description').text(localStorage.getItem('hour-9'))

    $('#hour-10 .description').text(localStorage.getItem('hour-10'))

    $('#hour-11 .description').text(localStorage.getItem('hour-11'))

    $('#hour-12 .description').text(localStorage.getItem('hour-12'))

    $('#hour-13 .description').text(localStorage.getItem('hour-13'))

    $('#hour-14 .description').text(localStorage.getItem('hour-14'))

    $('#hour-15 .description').text(localStorage.getItem('hour-15'))

    $('#hour-16 .description').text(localStorage.getItem('hour-16'))

    $('#hour-17 .description').text(localStorage.getItem('hour-17'))

    // TODO: Add code to display the current date in the header of the page.

    // here we are calling on the parent with jquery and .text with dayjs so we can list the current date in the header
    $('#currentDay').text(dayjs().format('DD/MM/YYYY'))
});
