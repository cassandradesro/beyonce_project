"use strict";

var currentMusicIndex = 0;

document.body.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    console.log("you hit enter!");
    var nextHidden = document.querySelector(".hidden");
    if (nextHidden) {
      nextHidden.classList.remove("hidden");
      currentMusicIndex = (currentMusicIndex + 1) % 12; //modulo
      // animate it into place
    }
  }
});

//tweenmax.from // to make them fall down into place
//# sourceMappingURL=experience-polaroid.js.map
