var currentVideoIndex = 0;
var $waterPlayerSource = document.querySelector("#water-video-player source");
var $waterPlayer = document.querySelector("#water-video-player");
var keyWasPressed = false;


var beginMusic = new Howl({
  src: ['dist/water_video/water_begin_sound.mp3'],
  autoplay: true,
  loop: true,
  volume: .5,
  onend: function onend() {
    console.log('BeginMusic Finished!');
  }
});
var middleMusic = new Howl({
  src: ['dist/water_video/water_mid_sound.wav'],
  autoplay: false,
  loop: false,
  volume: 4,
  onend: function onend() {
    endMusic.play();
  }
});
var endMusic = new Howl({
  src: ['dist/water_video/water_end_sound.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('endMusic Finished!');
  }
});

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 32){
        beginMusic.stop();
        middleMusic.stop();
        endMusic.stop();
    }
  if (e.keyCode == 16 && keyWasPressed === false) {
    
    keyWasPressed = true;

    var newVideoURL = "dist/water_video/Water_Full.mp4";
    $waterPlayerSource.setAttribute('src', newVideoURL);
    console.log("playing",newVideoURL);


    $waterPlayer.load();
    $waterPlayer.currentTime = "10";
    middleMusic.play();
    beginMusic.stop();
    $waterPlayer.play();
    
  }
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 32){
    beginMusic.play();
  }

  if (e.keyCode == 16) {
    console.log("let go of a key!");

    keyWasPressed = false;
    var mainVideo = "dist/water_video/Water_Begin.mp4";


    $waterPlayerSource.setAttribute('src', mainVideo);
    console.log("playing",mainVideo);

    $waterPlayer.load();
    $waterPlayer.currentTime = "0";
    middleMusic.stop();
    beginMusic.play();
    $waterPlayer.play();
    endMusic.stop();

  }
});

// if (e.keyCode == 32){
//     beginMusic.stop();
//     middleMusic.stop();
//     endMusic.stop();
// }