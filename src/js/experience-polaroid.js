

var currentMusicIndex = 1;
var $audio = document.querySelector("audio");
document.body.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    console.log("you hit enter!");
    var nextHidden = document.querySelector(".hidden");
  	if (nextHidden) {
  		nextHidden.classList.remove("hidden");
  		currentMusicIndex = (currentMusicIndex + 1) % 14; //modulo
  		var updateAudio = "dist/polaroid_video/Audio"+currentMusicIndex+".mp3";
  		$audio.setAttribute('src', updateAudio); 		// animate it into place
  	}
  }
  if (e.keyCode == 32){
	$audio.pause();
	$audio.currentTime = 0;
	}
});

