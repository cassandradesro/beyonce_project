"use strict";

// document.body.addEventListener("keypress", function (e) {
//   if (e.keyCode == 9) {
//     console.log("you hit enter!");
//     var nextHidden = document.querySelector(".hidden");
//   	if (nextHidden) {
//   		nextHidden.classList.remove("hidden");
//   		// animate it into place
//   	}
//   }
// });

var currentVideoIndex = 0;
var $doorPlayerSource = document.querySelector("#door-video-player source");
var $doorPlayer = document.querySelector("#door-video-player");
var keyWasPressed = false;

var mainMusic = new Howl({
  src: ['dist/door_video/door_main_sound.mp3'],
  autoplay: true,
  loop: true,
  volume: .5,
  onend: function onend() {
    console.log('mainMusic Finished!');
  }
});
var waterMusic = new Howl({
  src: ['dist/door_video/door_water_sound.mp3'],
  autoplay: false,
  loop: true,
  volume: 4,
  onend: function onend() {}
});
var grassMusic = new Howl({
  src: ['dist/door_video/door_field_sound.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('grassMusic Finished!');
  }
});
var fireMusic = new Howl({
  src: ['dist/door_video/door_fire_sound.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('fireMusic Finished!');
  }
});

document.addEventListener("keydown", function (e) {
  if (document.querySelector(".finger").classList.contains("remind")) {
    document.querySelector(".finger").classList.remove("remind");
  }
  if (e.keyCode == 32) {
    fireMusic.stop();
    grassMusic.stop();
    waterMusic.stop();
    mainMusic.stop();
  }
  if (e.keyCode === 78 && keyWasPressed === false) {
    //n

    keyWasPressed = true;

    var newVideoURL = "dist/door_video/door_grass.mp4";
    $doorPlayerSource.setAttribute('src', newVideoURL);
    console.log("playing", newVideoURL);

    $doorPlayer.load();
    $doorPlayer.currentTime = 0;
    grassMusic.play();
    mainMusic.stop();
    fireMusic.stop();
    waterMusic.stop();
    $doorPlayer.play();
  }
  if (e.keyCode === 79 && keyWasPressed === false) {
    //o

    keyWasPressed = true;

    var newVideoURL = "dist/door_video/door_fire.mp4";
    $doorPlayerSource.setAttribute('src', newVideoURL);
    console.log("playing", newVideoURL);

    $doorPlayer.load();
    $doorPlayer.currentTime = 0;
    fireMusic.play();
    mainMusic.stop();
    grassMusic.stop();
    waterMusic.stop();
    $doorPlayer.play();
  }
  if (e.keyCode === 80 && keyWasPressed === false) {
    //p

    keyWasPressed = true;

    var newVideoURL = "dist/door_video/door_water.mp4";
    $doorPlayerSource.setAttribute('src', newVideoURL);
    console.log("playing", newVideoURL);

    $doorPlayer.load();
    $doorPlayer.currentTime = 0;
    fireMusic.stop();
    mainMusic.stop();
    grassMusic.stop();
    waterMusic.play();
    $doorPlayer.play();
  }
});

document.addEventListener("keyup", function (e) {

  if (e.keyCode == 32) {
    mainMusic.play();
  }

  if (e.keyCode === 78 || e.keyCode === 79 || e.keyCode === 80) {
    console.log("let go of a key!");

    keyWasPressed = false;
    var mainVideo = "dist/door_video/door_main.mp4";

    $doorPlayerSource.setAttribute('src', mainVideo);
    console.log("playing", mainVideo);

    $doorPlayer.load();
    $doorPlayer.currentTime = "0";
    grassMusic.stop();
    waterMusic.stop();
    fireMusic.stop();
    mainMusic.play();
    $doorPlayer.play();
  }
});
//# sourceMappingURL=experience-door.js.map
