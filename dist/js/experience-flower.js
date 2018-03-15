'use strict';

var flowerMusic = new Howl({
  src: ['dist/flower_sequence/flower_sound.mp3'],
  autoplay: true,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('flowerMusic Finished!');
  }
});

flowerMusic.play();

floraButtons = ["flower_01.png", "flower_02.png", "flower_03.png", "flower_04.png", "flower_05.png", "flower_06.png", "flower_07.png", "flower_08.png", "flower_09.png"];

var $flora1 = document.querySelector(".flora1");
var $flora2 = document.querySelector(".flora2");
var $flora3 = document.querySelector(".flora3");
var $flora4 = document.querySelector(".flora4");
var $flora5 = document.querySelector(".flora5");
var $flora6 = document.querySelector(".flora6");
var $flora7 = document.querySelector(".flora7");
var $flora8 = document.querySelector(".flora8");
var $flora9 = document.querySelector(".flora9");

$flora1.addEventListener("click", function () {
  console.log("clicked on flora1 bitch");
  document.querySelector;
});
$flora2.addEventListener("click", function () {
  console.log("clicked on flora2 bitch");
});
$flora3.addEventListener("click", function () {
  console.log("clicked on flora3 bitch");
});
$flora4.addEventListener("click", function () {
  console.log("clicked on flora4 bitch");
});
$flora5.addEventListener("click", function () {
  console.log("clicked on flora5 bitch");
});
$flora6.addEventListener("click", function () {
  console.log("clicked on flora6 bitch");
});
$flora7.addEventListener("click", function () {
  console.log("clicked on flora7 bitch");
});
$flora8.addEventListener("click", function () {
  console.log("clicked on flora8 bitch");
});
$flora9.addEventListener("click", function () {
  console.log("clicked on flora9 bitch");
});
// TweenMax.staggerTo(".flower", 1, { scale: 2.0, repeat: -1}, 0.1);
//# sourceMappingURL=experience-flower.js.map
