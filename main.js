var i = 0;

var enmins = end.innerHTML.slice(0, 1);
var enseconds = end.innerHTML.slice(2);
var evsec = enmins * 60 + +enseconds;
var paused = true;
var y = setInterval(up, 1000);

function up() {
  if (paused == true) {
    var q = 100 / evsec;
    i += q;
    timeline.style.width = `${i}%`;
    // count up
    seconds++;
    if (seconds == 60) {
      mins++;
      seconds = 00;
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
    being.innerHTML = `${mins}:${seconds}`;
    if (
      mins == end.innerHTML.slice(0, 1) &&
      seconds == end.innerHTML.slice(2)
    ) {
      clearInterval(y);
    }
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

function pause() {
  if (paused == true) {
    paused = false;
    audio.pause();
    ahla.className = "fas fa-play";
  } else if (paused == false) {
    paused = true;
    audio.play();
    ahla.className = "fas fa-pause";
  }
}

function muted() {
  audio.muted = true;
  mute.classList.add("active");
  unmute.classList.remove("active");
}

function unmuted() {
  audio.muted = false;
  unmute.classList.add("active");
  mute.classList.remove("active");
}

function loop() {
  audio.loop = true;
  lop.classList.add("active");
}
