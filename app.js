//renders clock at top of screen

let renderClock = function() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
setInterval(renderClock, 1000)
if (moment(renderClock).isAfter($("#timeColumn09").text())) {
    window.alert('true')
}
var time = $("#timeColumn09").text()


// saves notes to local storage
$('.save-btn').on('click', function() {
    let userEntry = $(this).siblings('input').val()
    let timeBlock = $(this).siblings('input').attr('id')
    console.log(userEntry, timeBlock)
    localStorage.setItem(timeBlock, userEntry)
})

// sets current hour using moment
let currentHour = moment().hour()
console.log(currentHour)

// restablishes notes on refresh and adds colors to 
// line items based on timeframe
for (let i = 9; i <=17; i++) {
    $('#'+i).val(localStorage.getItem(i))
    if (currentHour > i) {
        $('#'+i).addClass('bg-danger')
    } else if (currentHour == i) {
        $('#'+i).addClass('bg-warning')
    } else {
        $('#'+i).addClass('bg-primary')
    }
}

