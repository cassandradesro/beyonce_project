'use strict';

var currentMusicIndex = 1;
var $audio = document.querySelector("audio");

if (window.innerWidth < 415) {
	console.log('view on desktop browser plz');
	document.querySelector('.user-on-mobile').classList.add('show');
}

document.body.addEventListener("keydown", function (e) {
	if (e.keyCode == 13) {
		console.log("you hit enter!");
		if (document.querySelector(".finger").classList.contains("remind")) {
			document.querySelector(".finger").classList.remove("remind");
		}
		console.log("reminder finger won't show");
		var nextHidden = document.querySelector(".hidden");
		if (nextHidden) {
			nextHidden.play();
			nextHidden.classList.remove("hidden");
			currentMusicIndex = (currentMusicIndex + 1) % 14; //modulo
			var updateAudio = "dist/polaroid_video/Audio" + currentMusicIndex + ".mp3";
			$audio.setAttribute('src', updateAudio); // animate it into place
		}
		nextHidden = document.querySelector(".hidden");
		if (nextHidden) {
			// preloading!
			nextHidden.load();
			var preloadAudio = new Audio();
			preloadAudio.src = "dist/polaroid_video/Audio" + (currentMusicIndex + 1) + ".mp3";
		}
	}
	if (e.keyCode == 32) {
		console.log("spacebar reminder finger won't show");
		$audio.pause();
		$audio.currentTime = 0;
		if (document.querySelector(".spacebar").classList.contains("remind")) {
			document.querySelector(".spacebar").classList.remove("remind");
		}
	}
});

document.body.addEventListener("keyup", function (e) {

	$audio.play();
});

// .from(".hoggle-img", 3, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, rotationY:360, scale:0, force3D:true, ease: Power0.easeNone}
//# sourceMappingURL=experience-polaroid.js.map
