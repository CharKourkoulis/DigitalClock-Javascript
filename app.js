
 var hour = document.getElementById("hour");
 var min = document.getElementById("minute");
 var second = document.getElementById("second");
 var date = document.getElementById("badge2text");


function clock(){
    var fullDate = new Date();
    
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    var dates = fullDate.getDay() + " / "+ (fullDate.getMonth()+1 )+ " / "+ fullDate.getFullYear();
    
    if(hours < 10){
        hours = "0" + hours;
    }

    if(mins < 10){
        mins = "0" + mins;
    }

    if(secs < 10){
        secs = "0" + secs;
    }
    
    hour.innerHTML = hours + " " +":";
    min.innerHTML = mins + " "+":";
    second.innerHTML = secs;
    date.innerHTML = dates;
}

clock();
setInterval(clock,100);


$(document).ready(function () {
    
$("#badge2, #badge").mouseover(function() {
  this.fadeOut(1000);
  
});


$("#badge2, #badge").mouseout(function() {});
    this.fadeIn(1000);
});


