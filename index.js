//get user's name 
var entermyName = prompt("Enter your name");
myName = document.querySelector("#myName");
myName.innerHTML = entermyName;

// get time 
function startTime() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var myClock = document.querySelector("#myClock");
    myClock.innerHTML =   h + ":" + m + ":" + s + " " + dayName;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}