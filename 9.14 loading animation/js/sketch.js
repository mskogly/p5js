
var songs = [];
var angle = 0;
var loading = true;
var counter = 0;

function preload() {

}

/* function soundLoaded(song) {
  song1 = song;
  song1.play();
  loading = false;
} */

//js closure
function rainbowSong(index, filename) {
  loadSound(filename, soundLoaded);

  function soundLoaded(sound) {
    console.log(index + ' ' + filename);
    songs[index] = sound;
    songs[index].play();
    counter++;
    if(counter == 2){loading = false;}
  }
}

function setup() {
  createCanvas(400, 400);
  console.log(floor(millis()) + ' milliseconds');

  rainbowSong(0, 'sound/sonar1.mp3');
  rainbowSong(1, 'sound/sonar2.ogg');

  // song1 = loadSound('mp3/sonar1.mp3', soundLoaded);
  //song2 = loadSound('mp3/sonar1.mp3', soundLoaded);
}

function draw() {
  background(220);

  if (loading) {
    translate(width / 2, height / 2);
    rotate(angle);
    strokeWeight(4);
    stroke(255);
    line(0, 0, 100, 0);
    angle += 0.1;
  } else {
    background(0, 255, 0);
  }


}