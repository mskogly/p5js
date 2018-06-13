//https://www.youtube.com/watch?v=NCCHQwNAN6Y

var song1;
var sliderVolume;
var sliderRate;
var sliderPan;
var vol;
var button;
var jumpButton;
var amp;


function setup() { 
  createCanvas(400, 400);
  background(220);
  song1 = loadSound('Plirk-Hurt.mp4', loaded);
  amp = new p5.Amplitude();


  createP("Use arrow left/right to play sound<br/><br/>Volume");
  sliderVolume = createSlider(0,1,0.3,0.01);
  createP("Rate");
  sliderRate = createSlider(0,3,1,0.01);
  createP("Pan");
  sliderPan = createSlider(-1,1,0,0.01);

  //trigger a function after x seconds into the song
  song1.addCue(3,changeBackground, color(0,0,255));
  song1.addCue(4,changeBackground, color(255,0,255));


} 

function changeBackground(col){
  
  background(col);

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
  button = createButton("Play");
  button.mousePressed(togglePlaying);

  jumpButton = createButton("Jump");
  jumpButton.mousePressed(jumpSong);

  
}

function jumpSong(){
  var len = song1.duration();
  var t = random(len);
  //var current = song1.currentTime();
  //song1.setVolume(0);
  song1.jump(t);
  //song1.setVolume(vol);
  console.log(song1.currentTime());
}


function draw() { 
  background(51);


lev = amp.getLevel();
diam = map(lev, 0,vol,40,400);

stroke(255);
noFill();
  ellipse(width/2,height/2,diam,diam);

  vol = sliderVolume.value();

  song1.setVolume(vol);

  song1.rate(sliderRate.value());
  song1.pan(sliderPan.value());

 /* if(song1.currentTime() > 5){
background(255,0,0);    
  }*/


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