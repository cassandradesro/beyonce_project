
var currentVideoIndex = 0;
var $distortionPlayerSource = document.querySelector("#distortion-video-player source");
var $distortionPlayer = document.querySelector("#distortion-video-player");
var keyWasPressed = false;

document.addEventListener("keydown", function (e) {
  if (e.keyCode != 32 && keyWasPressed === false) {
    
    keyWasPressed = true;
    currentVideoIndex = (currentVideoIndex + 1) % 26; //modulo
    console.log("hit a key!");

    var newVideoURL = "dist/distortion_video/Distortion_"+currentVideoIndex+".mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    console.log("playing",newVideoURL);
    $distortionPlayer.load();
    $distortionPlayer.currentTime = 0;
    $distortionPlayer.play();

  }
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode != 32) {
    console.log("let go of a key!");

    keyWasPressed = false;
    var mainVideo = "dist/distortion_video/Distortion_main.mp4";


    $distortionPlayerSource.setAttribute('src', mainVideo);
    console.log("playing",mainVideo);

    $distortionPlayer.load();
    $distortionPlayer.currentTime = 0;
    $distortionPlayer.play();

  }
});