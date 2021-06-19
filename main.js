var i = 0;

var enmins = end.innerHTML.slice(0, 1);
var enseconds = end.innerHTML.slice(2);
var evsec = enmins * 60 + +enseconds;

var y = setInterval(up, 1000);

function up() {
  var q = 100 / evsec;
  i = i + q;
  timeline.style.width = `${i}%`;
  if (i == 100) {
    clearInterval(y);
    console.log("done");
  }
}

window.onload = function () {
  document.querySelector("body").style.filter = "blur(100px)";
  setTimeout(() => {
    document.querySelector("body").style.filter = "blur(0px)";
  }, 1000);
};

var seconds = being.innerHTML.slice(2);
var mins = being.innerHTML.slice(0, 1);

console.log(seconds, mins);

function countUp() {
  seconds++;
  if (seconds == 60) {
    mins++;
    seconds = 00;
  }
  seconds = seconds < 10 ? "0" + seconds : seconds;
  being.innerHTML = `${mins}:${seconds}`;
  if (mins == end.innerHTML.slice(0, 1) && seconds == end.innerHTML.slice(2)) {
    clearInterval(x);
  }
}

var x = setInterval(() => {
  countUp();
}, 1000);

function pause() {
  clearInterval(y);
  clearInterval(x);
}
