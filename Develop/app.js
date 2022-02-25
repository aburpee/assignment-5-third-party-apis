let renderClock = function() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
setInterval(renderClock, 1000)
if (moment(renderClock).isAfter($("#timeColumn09").text())) {
    window.alert('true')
}
var time = $("#timeColumn09").text()



$('.save-btn').on('click', function() {
    let userEntry = $(this).siblings('input').val()
    let timeBlock = $(this).siblings('input').attr('id')
    console.log(userEntry, timeBlock)
    localStorage.setItem(timeBlock, userEntry)
})
let currentHour = moment().hour()
console.log(currentHour)
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

