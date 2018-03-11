console.log("transition.js")
// this file handles transition from experience to experience"use strict";

var transitionMusic = new Howl({
  src: ['dist/transition_sequence/transition_sequence.mp3'],
  autoplay: false,
  loop: false,
  volume: 1,
  onend: function onend() {
    console.log('Finished!');
  }
});

var $transitionVideo = document.getElementById("transition-video-player");

document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    console.log("you've hit the spacebar so you should see your transition!");
    if (transitionMusic.playing() === false) {
      transitionMusic.play();
      $transitionVideo.currentTime = 0;
      $transitionVideo.play();
      $transitionVideo.style.display = "block";
    }
  };
});
document.body.addEventListener("keyup", function (e) {
  if (e.keyCode == 32) {
	console.log("you've stopped the spacebar so your transition should restart!");
	transitionMusic.pause();
	$transitionVideo.pause();
	$transitionVideo.style.display = "none";
  };
});

$transitionVideo.addEventListener("ended", function() {
	console.log("video has ended!");
	$transitionVideo.play();
	document.location.href = nextPageURL;
})