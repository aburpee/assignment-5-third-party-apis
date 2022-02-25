$("#timeColumn09").click(function(){
    console.log('i clicked')
})

$("#noteColumn09").click(function(){
    console.log("i added a note")
})

$("#saveColumn09").click(function(){
    console.log("i saved a note")
})

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

for (let i = 9; i <=17; i++) {
    $('#'+i).val(localStorage.getItem(i))
}