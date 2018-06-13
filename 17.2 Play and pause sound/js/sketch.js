var song1;
var sliderVolume;
var sliderRate;
var sliderPan;
var vol;
var button;


function setup() { 
  createCanvas(400, 400);
  song1 = loadSound('sonar1.mp3', loaded);
  button = createButton("Play");
  button.mousePressed(togglePlaying);

  createP("Use arrow left/right to play sound<br/><br/>Volume");
  sliderVolume = createSlider(0,1,0.2,0.01);
  createP("Rate");
  sliderRate = createSlider(0,3,1,0.01);
  createP("Pan");
  sliderPan = createSlider(-1,1,0,0.01);
} 

function togglePlaying(){
  if(!song1.isPlaying()){
    song1.play();
    button.html("Pause");
  } else {
    song1.pause();
    button.html("Play");
  }
}

function loaded(){
  //song1.play();
}


function draw() { 
  background(220);
  vol = sliderVolume.value();

  song1.setVolume(vol);

  song1.rate(sliderRate.value());
  song1.pan(sliderPan.value());
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(!song1.isPlaying()){
      song1.play();
    }
  } else if (keyCode === RIGHT_ARROW) {
    if(!song1.isPlaying()){
      song1.play();
    }
  }
}