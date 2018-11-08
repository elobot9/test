 
// Show slide function
function showSlide(id) {

  $(".slide").hide();

  $("#"+id).show();

}
var questionSection = {
 loadscreen: function() {
  
    showSlide("loadscreen");
    $("#loadElement").html("Searching")

    setTimeout(function() {$("#loadElement").html("Searching.")}, 1000);
    setTimeout(function() {$("#loadElement").html("Searching..")}, 2000);
    setTimeout(function() {$("#loadElement").html("Searching...")}, 3000);
    setTimeout(function() {$("#loadElement").html("Searching.")}, 4000);
    setTimeout(function() {$("#loadElement").html("Searching..")}, 5000);
    setTimeout(function() {$("#loadElement").html("Searching...")}, 6000);
    setTimeout(function() {$("#loadElement").html("Searching.")}, 7000);
    setTimeout(function() {$("#loadElement").html("Searching..")}, 8000);
    setTimeout(function() {$("#loadElement").html("Searching...")}, 9000);
    setTimeout(function() {$("#loadElement").html("Searching.")}, 10000);
    setTimeout(function() {$("#loadElement").html("User found!")}, 10380);
    setTimeout(function() {$("#loadElement").html("Connecting.")}, 14000);
    setTimeout(function() {$("#loadElement").html("Connecting..")}, 15000);
    setTimeout(function() {$("#loadElement").html("Connecting...")}, 16000);
    setTimeout(function() {$("#loadElement").html("Connecting.")}, 17000);
    setTimeout(function() {$("#loadElement").html("Connecting..")}, 18000);
    setTimeout(function() {$("#loadElement").html("Connecting...")}, 19000);
    setTimeout(function() {$("#loadElement").html("Connecting.")}, 20000);
    setTimeout(function() {$("#loadElement").html("Connecting..")}, 21000);
    setTimeout(function() {$("#loadElement").html("Connected!")}, 21320);
    setTimeout(function() {$("#loadElement").html("Loading.")}, 26000);
    setTimeout(function() {$("#loadElement").html("Loading..")}, 27000);
    setTimeout(function() {$("#loadElement").html("Loading...")}, 28000);
    setTimeout(function() {showSlide("showData");}, 30600);

  },

  start: function(){
    showSlide('start')
  }
}
showSlide("postQ1");




/*  var x = Math.random()*1000
    var y = Math.random()*1000
    function createLineElement(x, y) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
               + 'width: 50px; '
               + 'background: black;'
               + 'height: 0px; '
               + '-webkit-transform: rotate(' + 90 + 'deg); '
               + 'position: absolute; '
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);  
    return line;
}

function createLine(x1, y1) {
    var a = 243 + x1
    var b = y1
    return createLineElement(a, b);
}
*/

var x = Math.random()
var y = Math.random()

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light1",// "dark1", "dark2"
/*    title:{
        text: "Division of your personality"             
    },*/
    axisY:{
        interval: 10,
        suffix: "%"
    },
    toolTip:{
        shared: true
    },
    data:[{
        type: "stackedBar100",
        toolTipContent: "{label}<br><b>{name}:</b>(#percent%)",
        showInLegend: true, 
        name: "BIS/Neuroticism",
        dataPoints: [
            { y: x, label: "You" },
            { y: y, label: "Your Partner" },
        ]
        },
        {
            type: "stackedBar100",
            toolTipContent: "<b>{name}:</b>(#percent%)",
            showInLegend: true, 
            name: "BAS/Extraversion",
            dataPoints: [
                { y: 1-x, label: "You" },
                { y: 1-y, label: "Your Partner" },
            ]
        }, 
]
});
chart.render();

}
