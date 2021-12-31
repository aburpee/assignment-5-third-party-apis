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
// window.alert(typeof($("#timeColumn09")));

// time = function() {
$("#timeColumn09").html('09:00:00')
    // moment('09:00:00').format('hh:mm:ss'))
// }

// time()