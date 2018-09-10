
var currentVideoIndex = 0;
var $distortionPlayerSource = document.querySelector("#distortion-video-player source");
var $distortionPlayer = document.querySelector("#distortion-video-player");
var keyWasPressed = false;
var $mainPlayer = document.querySelector("#main-video-player");



var distortion_main = new Howl({
  src: ['dist/old_distortion_video/distortion_sound01.mp3'],
  autoplay: true,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_a = new Howl({
  src: ['dist/old_distortion_video/distortion_sound27.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_b = new Howl({
  src: ['dist/old_distortion_video/distortion_sound02.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_c = new Howl({
  src: ['dist/old_distortion_video/distortion_sound03.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_d = new Howl({
  src: ['dist/old_distortion_video/distortion_sound04.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_e = new Howl({
  src: ['dist/old_distortion_video/distortion_sound05.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_f = new Howl({
  src: ['dist/old_distortion_video/distortion_sound06.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_g = new Howl({
  src: ['dist/old_distortion_video/distortion_sound07.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_h = new Howl({
  src: ['dist/old_distortion_video/distortion_sound08.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_i = new Howl({
  src: ['dist/old_distortion_video/distortion_sound09.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_j = new Howl({
  src: ['dist/old_distortion_video/distortion_sound10.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_k = new Howl({
  src: ['dist/old_distortion_video/distortion_sound11.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_l = new Howl({
  src: ['dist/old_distortion_video/distortion_sound12.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_m = new Howl({
  src: ['dist/old_distortion_video/distortion_sound13.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_n = new Howl({
  src: ['dist/old_distortion_video/distortion_sound14.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_o = new Howl({
  src: ['dist/old_distortion_video/distortion_sound15.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_p = new Howl({
  src: ['dist/old_distortion_video/distortion_sound16.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_q = new Howl({
  src: ['dist/old_distortion_video/distortion_sound17.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_r = new Howl({
  src: ['dist/old_distortion_video/distortion_sound18.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_s = new Howl({
  src: ['dist/old_distortion_video/distortion_sound19.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_t = new Howl({
  src: ['dist/old_distortion_video/distortion_sound20.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_u = new Howl({
  src: ['dist/old_distortion_video/distortion_sound21.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_v = new Howl({
  src: ['dist/old_distortion_video/distortion_sound22.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_w = new Howl({
  src: ['dist/old_distortion_video/distortion_sound23.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_x = new Howl({
  src: ['dist/old_distortion_video/distortion_sound24.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_y = new Howl({
  src: ['dist/old_distortion_video/distortion_sound25.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});
var distortion_z = new Howl({
  src: ['dist/old_distortion_video/distortion_sound26.mp3'],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function onend() {
    console.log('distortionMusic Finished!');
  }
});





document.addEventListener("keydown", function (e) {
  if (document.querySelector(".finger").classList.contains("remind")){
    document.querySelector(".finger").classList.remove("remind");
  }
  if (e.keyCode == 65 && keyWasPressed === false) { // a
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_1.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_a.play();

  } else if (e.keyCode == 66 && keyWasPressed === false) { // b
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_2.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_b.play();

  } else if (e.keyCode == 67 && keyWasPressed === false) { // c
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_3.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_c.play();

  } else if (e.keyCode == 68 && keyWasPressed === false) { // d
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_4.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_d.play();

  } else if (e.keyCode == 69 && keyWasPressed === false) { // e
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_5.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_e.play();

  } else if (e.keyCode == 70 && keyWasPressed === false) { // f
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_6.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_f.play();

  } else if (e.keyCode == 71 && keyWasPressed === false) { // g
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_7.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_g.play();

  } else if (e.keyCode == 72 && keyWasPressed === false) { // h
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_8.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_h.play();

  } else if (e.keyCode == 73 && keyWasPressed === false) { // i
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_9.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_i.play();

  } else if (e.keyCode == 74 && keyWasPressed === false) { // j
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_10.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_j.play();

  } else if (e.keyCode == 75 && keyWasPressed === false) { // k
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_11.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_k.play();

  } else if (e.keyCode == 76 && keyWasPressed === false) { // l
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_12.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_l.play();

  } else if (e.keyCode == 77 && keyWasPressed === false) { // m
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_13.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_m.play();

  } else if (e.keyCode == 78 && keyWasPressed === false) { // n
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_14.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_n.play();

  } else if (e.keyCode == 79 && keyWasPressed === false) { // o
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_15.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_o.play();

  } else if (e.keyCode == 80 && keyWasPressed === false) { // p
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_16.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_p.play();

  } else if (e.keyCode == 81 && keyWasPressed === false) { // q
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_17.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_q.play();

  } else if (e.keyCode == 82 && keyWasPressed === false) { // r
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_18.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_r.play();

  } else if (e.keyCode == 83 && keyWasPressed === false) { // s
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_19.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_s.play();

  } else if (e.keyCode == 84 && keyWasPressed === false) { // t
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_20.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_t.play();

  } else if (e.keyCode == 85 && keyWasPressed === false) { // u
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_21.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_u.play();

  } else if (e.keyCode == 86 && keyWasPressed === false) { // v
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_22.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_v.play();

  } else if (e.keyCode == 87 && keyWasPressed === false) { // w
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_23.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_w.play();

  } else if (e.keyCode == 88 && keyWasPressed === false) { // x
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_24.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_x.play();

  } else if (e.keyCode == 89 && keyWasPressed === false) { // y
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_25.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_y.play();

  } else if (e.keyCode == 90 && keyWasPressed === false) { // z
    
    keyWasPressed = true;

    var newVideoURL = "dist/new_distortion_video_recompressed/Distortion_26.mp4";
    $distortionPlayerSource.setAttribute('src', newVideoURL);
    $distortionPlayer.classList.add("active")
    $distortionPlayer.load();
    $distortionPlayer.currentTime = $mainPlayer.currentTime;
    $distortionPlayer.play();
    distortion_main.stop();
    distortion_z.play();

  } else if (e.keyCode == 32) { // space
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
    if (document.querySelector(".spacebar").classList.contains("remind")){
			document.querySelector(".spacebar").classList.remove("remind");
		}
    keyWasPressed = false;
    var mainVideo = "dist/new_distortion_video_recompressed/Distortion_main.mp4";


    $distortionPlayerSource.setAttribute('src', mainVideo);
    console.log("playing",mainVideo);

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