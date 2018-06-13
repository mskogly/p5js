//https://www.youtube.com/watch?v=Bk8rLzzSink

var osc;
var playing = false;
var button;
var slider;

function setup() { 
  createCanvas(100, 100);
  osc = new p5.Oscillator();
  osc.setType('sine'); 
 osc.start();
 osc.amp(0);

  button = createButton('play/pause');
  button.mousePressed(toggle);
  slider = createSlider(100,1200,440);
} 

function draw() { 

 osc.freq(slider.value());


  if(playing) {
    background(255,0,255);
  } else {
    background(51);
  }
  
}

function toggle(){
  if(!playing){
      osc.amp(0.5,1); //second argument is fadein in seconds
    osc.freq(440);

    playing = true;
  } else {
    osc.amp(0,1);
    playing = false;
  }
}


