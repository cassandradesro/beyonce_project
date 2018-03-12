'use strict';

console.log("transition.js");

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

// TweenMax.staggerTo(".flower", 1, { scale: 2.0, repeat: -1}, 0.1);
//# sourceMappingURL=experience-flower.js.map
