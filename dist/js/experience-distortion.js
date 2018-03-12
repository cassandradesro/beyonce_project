"use strict";

var currentVideoIndex = 0;
var $distortionPlayerSource = document.querySelector("#distortion-video-player source");
var $distortionPlayer = document.querySelector("#distortion-video-player");
var keyWasPressed = false;
var $mainPlayer = document.querySelector("#main-video-player");

var distortion_main = new Howl({
  src: ['dist/distortion_video/distortion_sound01.mp3'],
  autoplay: true,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_a = new Howl({
  src: ['dist/distortion_video/distortion_sound027.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_b = new Howl({
  src: ['dist/distortion_video/distortion_sound02.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_c = new Howl({
  src: ['dist/distortion_video/distortion_sound03.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_d = new Howl({
  src: ['dist/distortion_video/distortion_sound04.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_e = new Howl({
  src: ['dist/distortion_video/distortion_sound05.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_f = new Howl({
  src: ['dist/distortion_video/distortion_sound06.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_g = new Howl({
  src: ['dist/distortion_video/distortion_sound07.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_h = new Howl({
  src: ['dist/distortion_video/distortion_sound08.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_i = new Howl({
  src: ['dist/distortion_video/distortion_sound09.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_j = new Howl({
  src: ['dist/distortion_video/distortion_sound10.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_k = new Howl({
  src: ['dist/distortion_video/distortion_sound11.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_l = new Howl({
  src: ['dist/distortion_video/distortion_sound12.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_m = new Howl({
  src: ['dist/distortion_video/distortion_sound13.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_n = new Howl({
  src: ['dist/distortion_video/distortion_sound14.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_o = new Howl({
  src: ['dist/distortion_video/distortion_sound15.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_p = new Howl({
  src: ['dist/distortion_video/distortion_sound16.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_q = new Howl({
  src: ['dist/distortion_video/distortion_sound17.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_r = new Howl({
  src: ['dist/distortion_video/distortion_sound18.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_s = new Howl({
  src: ['dist/distortion_video/distortion_sound19.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_t = new Howl({
  src: ['dist/distortion_video/distortion_sound20.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_u = new Howl({
  src: ['dist/distortion_video/distortion_sound21.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_v = new Howl({
  src: ['dist/distortion_video/distortion_sound22.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_w = new Howl({
  src: ['dist/distortion_video/distortion_sound23.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_x = new Howl({
  src: ['dist/distortion_video/distortion_sound24.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_y = new Howl({
  src: ['dist/distortion_video/distortion_sound25.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
var distortion_z = new Howl({
  src: ['dist/distortion_video/distortion_sound26.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 65 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_1.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_a.play();
  }
  if (e.keyCode == 65 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_1.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_a.play();
  }
  if (e.keyCode == 65 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_1.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_a.play();
  }
  if (e.keyCode == 65 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_1.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_a.play();
  }
  if (e.keyCode == 65 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_1.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_a.play();
  }
  if (e.keyCode == 65 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_1.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_a.play();
  }
  if (e.keyCode == 66 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_2.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_b.play();
  }
  if (e.keyCode == 67 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_3.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_c.play();
  }
  if (e.keyCode == 68 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_4.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_d.play();
  }
  if (e.keyCode == 69 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_5.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_e.play();
  }
  if (e.keyCode == 70 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_6.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_f.play();
  }
  if (e.keyCode == 71 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_7.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_g.play();
  }
  if (e.keyCode == 72 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_8.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_h.play();
  }
  if (e.keyCode == 73 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_9.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_i.play();
  }
  if (e.keyCode == 74 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_10.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_j.play();
  }
  if (e.keyCode == 75 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_11.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_k.play();
  }
  if (e.keyCode == 76 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_12.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_l.play();
  }
  if (e.keyCode == 77 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_13.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_m.play();
  }
  if (e.keyCode == 78 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_14.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_n.play();
  }
  if (e.keyCode == 79 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_15.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_o.play();
  }
  if (e.keyCode == 80 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_16.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_p.play();
  }
  if (e.keyCode == 81 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_17.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_q.play();
  }
  if (e.keyCode == 82 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_18.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_r.play();
  }
  if (e.keyCode == 83 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_19.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_s.play();
  }
  if (e.keyCode == 84 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_20.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_t.play();
  }
  if (e.keyCode == 85 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_21.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_u.play();
  }
  if (e.keyCode == 86 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_22.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_v.play();
  }
  if (e.keyCode == 87 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_23.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_w.play();
  }
  if (e.keyCode == 88 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_24.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_x.play();
  }
  if (e.keyCode == 89 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_25.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_y.play();
  }
  if (e.keyCode == 90 && keyWasPressed === false) {
    // a

    keyWasPressed = true;

    var newVideoURL = "dist/distortion_video/Distortion_26.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active");
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_z.play();
  }
  if (e.keyCode == 32) {
    // a
    distortion_main.stop();
    distortion_a.stop();
    distortion_b.stop();
    distortion_c.stop();
    distortion_d.stop();
    distortion_e.stop();
    distortion_f.stop();
    distortion_g.stop();
    distortion_h.stop();
    distortion_i.stop();
    distortion_j.stop();
    distortion_k.stop();
    distortion_l.stop();
    distortion_m.stop();
    distortion_n.stop();
    distortion_o.stop();
    distortion_p.stop();
    distortion_q.stop();
    distortion_r.stop();
    distortion_s.stop();
    distortion_t.stop();
    distortion_u.stop();
    distortion_v.stop();
    distortion_w.stop();
    distortion_x.stop();
    distortion_y.stop();
    distortion_z.stop();
  }
});

document.addEventListener("keyup", function (e) {
  console.log("let go of a key!");

  keyWasPressed = false;
  var mainVideo = "dist/distortion_video/Distortion_main.mp4";

  $distortionPlayerSource.setAttribute('src', mainVideo);
  console.log("playing", mainVideo);

  $distortionPlayer.load();
  $distortionPlayer.currentTime = $mainPlayer.currentTime;
  $distortionPlayer.play();
  distortion_main.play();
  distortion_a.stop();
  distortion_b.stop();
  distortion_c.stop();
  distortion_d.stop();
  distortion_e.stop();
  distortion_f.stop();
  distortion_g.stop();
  distortion_h.stop();
  distortion_i.stop();
  distortion_j.stop();
  distortion_k.stop();
  distortion_l.stop();
  distortion_m.stop();
  distortion_n.stop();
  distortion_o.stop();
  distortion_p.stop();
  distortion_q.stop();
  distortion_r.stop();
  distortion_s.stop();
  distortion_t.stop();
  distortion_u.stop();
  distortion_v.stop();
  distortion_w.stop();
  distortion_x.stop();
  distortion_y.stop();
  distortion_z.stop();
});
//# sourceMappingURL=experience-distortion.js.map
