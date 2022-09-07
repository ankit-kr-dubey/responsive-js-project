console.log ("hii")
function displayTime(){
    var dateTime = new Date();
    var h = dateTime.getHours();
    var m = dateTime.getMinutes();
    var s = dateTime.getSeconds();

    document.getElementById("time1").innerHTML=h;
    document.getElementById("time2").innerHTML=m;
    document.getElementById("time3").innerHTML=s;
}
setInterval(displayTime, 1000);