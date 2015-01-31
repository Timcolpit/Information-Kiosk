function kiosk () {
  butts = document.getElementsByClassName ('butt');
  conts = document.getElementsByClassName ('cont');

  for (var i = 0; i < butts.length; i++) {
    conts[i].className = "cont off";
    butts[0].className = "butt butt_on"
      conts[0].className = "cont on";
  }

  for (var i = 0; i < butts.length; i++) {
    butts[i].onclick = (function (e) {
      return function () {
        for (var j = 0; j < conts.length; j++) {
          conts[j].className = "cont off";
          butts[j].className = "butt";
        }
        butts[e].className = "butt butt_on";
        conts[e].className = "cont on";
      }
    })(i);
  }
}

function screensaver () {

  var backg = document.getElementById ('screensaver');
  var video = document.getElementById ('butt_video');
  var running = false;
  var back;

  function on () {
    if (running == false) {
      running = true;
      backg.style.display  = "block";
      video.play ();
    }
  } //close on ()

  function off () {
    if (running == true) {
      running = false;
      backg.style.display  = "none";
      video.load ();
      video.pause ();
      butts[0].click();
    }
  } //close off ()

  function backend () {
    var iter = 0;
    var wait_before_play = 2; //in minutes
    var loop_durration = 100; //in ms

    var inter = setInterval (function () {
      iter++;
      if (iter*loop_durration/60000 >= wait_before_play) {
        on ();
        clearInterval (inter);
      }
    }, loop_durration);
    return inter;
  } //close backend ()

  window.onclick = function () {
    off ();
    clearInterval (back);
    back = backend ();
  }

  back = backend ();
} //close screensaver ()

