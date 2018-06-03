

var currentMusicIndex = 1;
var $audio = document.querySelector("audio");
document.body.addEventListener("keydown", function (e) {
	if (e.keyCode == 13) {
		console.log("you hit enter!");
		var nextHidden = document.querySelector(".hidden");
		if (nextHidden) {
			nextHidden.play();
			nextHidden.classList.remove("hidden");
			currentMusicIndex = (currentMusicIndex + 1) % 14; //modulo
			var updateAudio = "dist/polaroid_video/Audio"+currentMusicIndex+".mp3";
			$audio.setAttribute('src', updateAudio); 		// animate it into place
		}
		nextHidden = document.querySelector(".hidden");
		if (nextHidden) {
			// preloading!
			nextHidden.load();
			var preloadAudio = new Audio();
			preloadAudio.src = "dist/polaroid_video/Audio"+(currentMusicIndex+1)+".mp3";

		}
	}
	if (e.keyCode == 32){
		$audio.pause();
		$audio.currentTime = 0;
	}
});


document.body.addEventListener("keyup", function (e) {

	$audio.play()
})



document.body.addEventListener("touchstart", function (e) {
	if (e.keyCode == 13) {
		console.log("you hit enter!");
		var nextHidden = document.querySelector(".hidden");
		if (nextHidden) {
			nextHidden.play();
			nextHidden.classList.remove("hidden");
			currentMusicIndex = (currentMusicIndex + 1) % 14; //modulo
			var updateAudio = "dist/polaroid_video/Audio"+currentMusicIndex+".mp3";
			$audio.setAttribute('src', updateAudio); 		// animate it into place
		}
		nextHidden = document.querySelector(".hidden");
		if (nextHidden) {
			// preloading!
			nextHidden.load();
			var preloadAudio = new Audio();
			preloadAudio.src = "dist/polaroid_video/Audio"+(currentMusicIndex+1)+".mp3";

		}
	}
	if (e.keyCode == 32){
		$audio.pause();
		$audio.currentTime = 0;
	}
});


document.body.addEventListener("touchend", function (e) {

	$audio.play()
})